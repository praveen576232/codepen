import React, { useEffect, useState } from "react";

import "./App.css";
import Editer from "./Editer";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [sourceDox, setSourceDox] = useState("");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSourceDox(
        `
        <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html>
        `
      )
    }, 250);
  return ()=>clearTimeout(timeout);
  }, [html,css,js])

  return (
    <div className="app">
      <h1 >code pen</h1>
      <div className="app_top">
        <Editer
          displayName="HTML"
          language="xml"
          value={html}
          onChange={setHtml}
        />
        <Editer
          displayName="CSS"
          language="css"
          value={css}
          onChange={setCss}
        />
        <Editer displayName="JS" language="xml" value={js} onChange={setJs} />
      </div>
      <div className="app_bottom">
        <iframe
        srcDoc={sourceDox}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default App;
