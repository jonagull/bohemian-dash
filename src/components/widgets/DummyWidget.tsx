import React from "react";

const styles = {
  backgroundColor: "#344a57",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
};

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

export const DummyWidget = React.forwardRef(
  (
    { style, className, ...props }: Props,
    ref: React.LegacyRef<HTMLDivElement>
  ) => {
    return <div style={styles}>{"Black yolocopter"}</div>;
  }
);
