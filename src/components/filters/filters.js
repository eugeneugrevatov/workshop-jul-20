import React from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { setAfterFilter, setBeforeFilter, setTitleFilter } from "../../ac";

import "react-datepicker/dist/react-datepicker-cssmodules.css";

function Filters({
  after,
  before,
  titleOptions,
  setAfterFilter,
  setBeforeFilter,
  setTitleFilter
}) {
  return (
    <div>
      <div
        style={{
          width: 300,
          display: "inline-block",
          marginBottom: "10px",
          marginRight: "10px"
        }}
      >
        <Select
          defaultValue={titleOptions[0]}
          onChange={option => setTitleFilter(option.value)}
          options={titleOptions}
        />
      </div>

      <div style={{ width: 300, display: "inline-block" }}>
        <DatePicker
          style={{ padding: 10 }}
          selected={after}
          selectsStart
          startDate={after}
          endDate={before}
          onChange={date => setAfterFilter(date)}
        />

        <DatePicker
          selected={before}
          selectsEnd
          startDate={after}
          endDate={before}
          onChange={date => setBeforeFilter(date)}
          minDate={after}
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  after: state.filters.after,
  before: state.filters.before,
  titleOptions: [
    { value: null, label: "-- All --" },
    ...state.articles.map(article => ({
      value: article.title,
      label: article.title
    }))
  ]
});

export default connect(
  mapStateToProps,
  { setAfterFilter, setBeforeFilter, setTitleFilter }
)(Filters);
