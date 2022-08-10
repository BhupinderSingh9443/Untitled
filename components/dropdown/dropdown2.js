import React, { useState } from "react";
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";

function Dropdown() {
  const [value, setValue] = useState(1);

  return (
    <>
      <DropdownList
        dataKey="id"
        textField="color"
        value={value}
        onChange={(nextValue) => setValue(nextValue.id)}
        data={[
          { id: 1, color: ".com" },
          { id: 2, color: ".org" },
          { id: 3, color: ".in" },
        ]}
      />
    </>
  );
}

export default Dropdown;
