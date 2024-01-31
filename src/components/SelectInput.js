import {
  Button,
  Input,
  Option,
  Select,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import useAxios from "./hooks/useAxios";
import { useDispatch } from "react-redux";
import {
  handleCategory,
  handleDifficulty,
  handleNumOfQuestions,
  handleType,
} from "../redux/actions";
import { useNavigate } from "react-router-dom";

const SelectInput = () => {
  const { res, error, loading } = useAxios({ url: "/api_category.php" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };

  const difficultyOptions = [
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
      {loading && <Spinner className="mt-16" />}
      {res && res.trivia_categories && (
        <>
          <div className="w-96 mt-6">
            <Select
              label="Select Category"
              onChange={(e) => {
                console.log("Event:", e); // Debugging statement
                dispatch(handleCategory(e));
              }}
            >
              {res.trivia_categories?.map((r) => (
                <Option key={r.id} value={r.name}>
                  {r.name}
                </Option>
              ))}
            </Select>
          </div>
          <div className="w-96 mt-6">
            <Select
              label="Select Difficulty"
              onChange={(e) => {
                console.log("Event:", e); // Debugging statement
                dispatch(handleDifficulty(e));
              }}
            >
              {difficultyOptions.map((diff) => (
                <Option key={diff.id} value={diff.name}>
                  {diff.name}
                </Option>
              ))}
            </Select>
          </div>
          <div className="w-96 mt-6">
            <Select
              label="Select Type"
              onChange={(e) => {
                console.log("Event:", e); // Debugging statement
                dispatch(handleType(e));
                //}
              }}
            >
              {typeOptions.map((type) => (
                <Option key={type.id} value={type.name}>
                  {type.name}
                </Option>
              ))}
            </Select>
          </div>
          <div className="w-96 mt-6">
            <Input
              type="number"
              label="Amount of Questions"
              onChange={(e) => dispatch(handleNumOfQuestions(e.target.value))}
            />
          </div>
          <Button
            type="button"
            className="w-96 mt-6"
            ripple={true}
            onClick={handleStart}
          >
            Get Started
          </Button>
        </>
      )}
    </>
  );
};

export default SelectInput;
