import {
  SET_AFTER_FILTER,
  SET_BEFORE_FILTER,
  SET_TITLE_FILTER
} from "../constants";

const defaultValues = {
  after: null,
  before: null,
  title: null
};

export default (filters = defaultValues, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_AFTER_FILTER: {
      return { ...filters, after: payload.date };
    }
    case SET_BEFORE_FILTER: {
      return { ...filters, before: payload.date };
    }
    case SET_TITLE_FILTER: {
      return { ...filters, title: payload.text };
    }
    default:
      return filters;
  }
};
