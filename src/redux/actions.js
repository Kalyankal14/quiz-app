import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_NUM_OF_QUESTIONS,
  CHANGE_SCORE,
  CHANGE_TYPE,
} from "./actionTypes";

export const handleCategory = (payload) => ({
  type: CHANGE_CATEGORY,
  payload,
});

export const handleDifficulty = (payload) => ({
  type: CHANGE_DIFFICULTY,
  payload,
});

export const handleType = (payload) => ({
  type: CHANGE_TYPE,
  payload,
});

export const handleNumOfQuestions = (payload) => ({
  type: CHANGE_NUM_OF_QUESTIONS,
  payload,
});

export const handleScore = (payload) => ({
  type: CHANGE_SCORE,
  payload,
});
