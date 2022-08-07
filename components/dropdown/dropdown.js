import React, { useState, useRef, useEffect } from "react";

// Value is for controlling th selected value from outside of the component
// OnChange will fire the event whenever ayn other list item is selected.
const Dropdown = ({ options, prompt, value, onChange, id, label }) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const close = (e) => {
    setOpen(e && e.target === ref.current);
  };

  useEffect(() => {
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  function filter(GivenArray) {
    return GivenArray.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  function displayValue() {
    if (query.length > 0) return query;
    if (value) return value[label];
    return "";
  }

  // For controlling the if the dropdown is open or not.

  const onKeyPressHandler = () => "";

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="dropdown">
      <div
        role="button"
        className="control"
        onClick={() => setOpen((prev) => !prev)}
      >
        {/* To control and open the dropdown */}
        <div className="selected-value" style={{ position: "relative" }}>
          {/* {value ? value[label] : prompt} */}
          <div className="country-flag-and-selected-value">
            {/* {selectedFlag ? <img className="country-flag" src={selectedFlag} alt="flag" /> : ''} */}
            <input
              type="text"
              ref={ref}
              placeholder={value ? value[label] : prompt}
              value={displayValue()}
              onChange={(e) => {
                setQuery(e.target.value);
                onChange(null);
              }}
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className="chevDown">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              fill="currentColor"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>

        {/* <div className={`arrow  ${open ? 'open' : null}`} /> */}
      </div>
      <div className={`options  ${open ? "open" : null}`}>
        {filter(options).map((option) => (
          <div
            onClick={() => {
              setQuery("");
              onChange(option);
              setOpen(false);
            }}
            onKeyPress={onKeyPressHandler}
            role="button"
            key={option[id]}
            className={`option ${value === option ? "selected" : null}`}
          >
            {/* {option.flag && <img className="country-flag" src={option.flag} alt="flag" /> } */}

            {option[label]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
