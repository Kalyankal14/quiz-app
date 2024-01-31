import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  List,
  ListItem,
  Radio,
  ListItemPrefix,
} from "@material-tailwind/react";
import useAxios from "./hooks/useAxios";
import { useSelector } from "react-redux";

export function Quiz() {
  const {
    questionCategory,
    questionType,
    questionDifficulty,
    numOfQuestions,
    score,
  } = useSelector((state) => state);
  console.log("Redux State:", {
    questionCategory,
    questionType,
    questionDifficulty,
    numOfQuestions,
    score,
  });
  console.log(questionCategory);
  let apiUrl = `/api.php?amount=${numOfQuestions}`;
  if (questionCategory) {
    apiUrl = apiUrl.concat(`&category=${questionCategory}`);
  }
  if (questionType) {
    apiUrl = apiUrl.concat(`&type=${questionType}`);
  }
  if (questionDifficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${questionDifficulty}`);
  }
  const { res, loading } = useAxios({ url: apiUrl });
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          1.Question here
        </Typography>
        <List>
          <ListItem className="p-0">
            <label
              htmlFor="vertical-list-react"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Radio
                  name="vertical-list"
                  id="vertical-list-react"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="font-medium text-blue-gray-400"
              >
                True
              </Typography>
            </label>
          </ListItem>
          <ListItem className="p-0">
            <label
              htmlFor="vertical-list-vue"
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Radio
                  name="vertical-list"
                  id="vertical-list-vue"
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="font-medium text-blue-gray-400"
              >
                False
              </Typography>
            </label>
          </ListItem>
        </List>
      </CardBody>
      <Typography className="ml-10">Score 4/9</Typography>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}
