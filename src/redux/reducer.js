import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_NUM_OF_QUESTIONS,
  CHANGE_SCORE,
  CHANGE_TYPE,
} from "./actionTypes";

const initialState = {
  questionCategory: "",
  questionType: "",
  questionDifficulty: "",
  numOfQuestions: 50,
  score: 0,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        questionCategory: action.payload,
      };
    case CHANGE_TYPE:
      return {
        ...state,
        questionType: action.payload,
      };
    case CHANGE_DIFFICULTY:
      return {
        ...state,
        questionDifficulty: action.payload,
      };
    case CHANGE_NUM_OF_QUESTIONS:
      return {
        ...state,
        numOfQuestions: action.payload,
      };
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };

    default:
      return state;
  }
};
