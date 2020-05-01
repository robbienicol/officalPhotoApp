import React, { useRef } from "react";

const HandleSubmit = (props) => {
  const Ref = useRef("");

  props.history.push(`collection?query=${Ref.current.value}`);
};

export default HandleSubmit;
