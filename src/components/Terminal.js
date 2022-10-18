import React from "react";

// TODO: Need to modify structure of props so that the dir can be passed
export function Terminal(props) {
  return (
    <div style={{ borderRadius: "10px" }}>
      <HeaderBar />
      <TerminalText lines={props.lines} />
    </div>
  );
}

function HeaderButton(props) {
  return (
    <div
      style={{
        backgroundColor: props.buttonColor,
        borderRadius: "100%",
        width: "10px",
        height: "10px",
        margin: "3px",
      }}
    />
  );
}

function HeaderBar() {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#edeeef",
        padding: "6px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
    >
      <HeaderButton buttonColor="#FF605C" />
      <HeaderButton buttonColor="#FFBD44" />
      <HeaderButton buttonColor="#00CA4E" />
    </div>
  );
}

function CodeLine(props) {
  let dir = props.dir ? props.dir : "~";

  return (
    <p style={{ margin: "0px", padding: "2px" }}>{`${dir}:$ ${props.text}`}</p>
  );
}

function TerminalText(props) {
  console.log(props.lines);
  let lines = props.lines.map((line) => <CodeLine text={line.text} dir={line.dir} />);

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "green",
        fontFamily: "monospace",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      {lines}
    </div>
  );
}
