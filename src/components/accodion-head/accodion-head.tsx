import React, { useState } from "react";
import { Image, Card, Accordion } from "react-bootstrap";
import  up  from "../../assets/up.svg";

export default function AccodionHead(props: {
  name: string;
  eventKey: string;
}) {
  const [state, setState] = useState(props.eventKey);
//   const [key, setKey] = useState(props.eventKey);
  const toggleCollapse = (id:any) => {
    setState(state !== id ? id : " ");
  };

  return (
    <Accordion.Toggle
      as={Card.Header}
      eventKey={props.eventKey}
     // - When click toggle state with new value that different from  eventKey
      onClick={() => toggleCollapse(props.eventKey)}
    >
      <h1>{props.name}</h1>
      {/* 
         - Add class rotate to imag when state === eventKey that i pass to component
      */}
      <Image src={up}  className={state === props.eventKey ? "arrow rotate" : "arrow"} />

    </Accordion.Toggle>
  );
}
