import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled } from "react-codemirror2";
import { EditLocationTwoTone } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import "./Editer.css";
function Editer({ language, displayName, value, onChange }) {
  function handelChange(editer, data, value) {
    onChange(value);
  }
  const [open, setopen] = useState(true);
  return (
    <div className={`editer_container ${open ? 'collapsed':''} `}>
      <div className="editer_top_bar">
        <h3>{displayName}</h3>
        <IconButton onClick={() => setopen((open) => !open)}>
          <EditLocationTwoTone className="icon_button"></EditLocationTwoTone>
        </IconButton>
      </div>
      <Controlled
      
        onBeforeChange={handelChange}
        value={value}
        className="code-mirror-wrapper"
        options={{

          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
}

export default Editer;
