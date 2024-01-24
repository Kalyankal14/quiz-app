import {
  Button,
  Input,
  Option,
  Select,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import useAxios from "./hooks/useAxios";

const SelectInput = () => {
  const { res, error, loading } = useAxios({ url: "/api_category.php" });
  const diffcultyOptions = [
    { id: 1, name: "Easy" },
    { id: 2, name: "Medium" },
    { id: 3, name: "Hard" },
  ];
  const typeOptions = [
    { id: 1, name: "Multiple Choice" },
    { id: 2, name: "True/false" },
  ];
  return (
    <>
      {error && (
        <Typography variant="h5" color="red" className="mt-12">
          Something went wrong!
        </Typography>
      )}
      {loading && <Spinner />}
      {res && (
        <>
          {
            <div className="w-96 mt-6">
              <Select label="Select Category">
                {res.trivia_categories?.map((r) => (
                  <Option key={r.id}>{r.name}</Option>
                ))}
              </Select>
            </div>
          }
          <div className="w-96 mt-6">
            <Select label="Select Difficulty">
              {diffcultyOptions.map((diff) => (
                <Option key={diff.id}>{diff.name}</Option>
              ))}
            </Select>
          </div>
          <div className="w-96 mt-6">
            <Select label="Select Type">
              {typeOptions.map((type) => (
                <Option key={type.id}>{type.name}</Option>
              ))}
            </Select>
          </div>
          <div className="w-96 mt-6">
            <Input type="number" label="Amount of Questions" />
          </div>
          <Button type="submit" className="w-96 mt-6" ripple={true}>
            Get Started
          </Button>
        </>
      )}
    </>
  );
};

export default SelectInput;
