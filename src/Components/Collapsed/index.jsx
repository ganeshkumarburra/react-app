import React, { useState } from "react";
import "./collapsed.css";
import useCollapse from "react-collapsed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Tag from "../Tag/index";
import ReactJson from "react-json-view";

export default function Index() {
  const [isExpanded, setExpanded] = React.useState(true);
  const { getToggleProps, getCollapseProps } = useCollapse({
    isExpanded,
  });
  const [jsonData, setJsonData] = useState({
    the: "men",
    that: "landed",
    on: "the",
    moon: "were",
    maybe: 2,
    i: "think",
    probably: ["neil armstrong", "buzz aldrin"],
    am_i_right: true,
  });
  function onJsonChange(src) {
    setJsonData(src.updated_src);
  }
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          marginBottom: 10,
          justifyContent: "space-between",
        }}
      >
        <div style={{}}>
          <Tag data="Date" />
          <Tag data="Label" />
          <Tag data="Unique id" />
          <Tag data="status" />
        </div>

        <span>
          <FontAwesomeIcon
            icon={isExpanded ? faAngleDown : faAngleUp}
            {...getToggleProps({
              onClick: () => setExpanded((x) => !x),
            })}
          />
        </span>
      </div>
      <div {...getCollapseProps({})}>
        {/* <h2 style={{ margin: 0, padding: 10 }}>
          Start editing to see some magic happen!
        </h2> */}
        <ReactJson
          src={jsonData}
          onAdd={onJsonChange}
          onEdit={onJsonChange}
          onDelete={onJsonChange}
        />
      </div>
    </div>
  );
}
