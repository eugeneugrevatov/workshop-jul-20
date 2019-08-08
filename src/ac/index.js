import {
  DELETE_ARTICLE,
  INCREMENT,
  SET_AFTER_FILTER,
  SET_BEFORE_FILTER,
  SET_TITLE_FILTER
} from "../constants";

export const increment = () => ({
  type: INCREMENT
});

export const deleteArticle = id => ({
  type: DELETE_ARTICLE,
  payload: { id }
});

export const setAfterFilter = date => ({
  type: SET_AFTER_FILTER,
  payload: { date }
});

export const setBeforeFilter = date => ({
  type: SET_BEFORE_FILTER,
  payload: { date }
});

export const setTitleFilter = text => ({
  type: SET_TITLE_FILTER,
  payload: { text }
});
