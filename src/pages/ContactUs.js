import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";

import "./ContactUs.css";
const ContactUs = (props) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const numberRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();
    const userDetails = {
      name: nameRef.current.valueOf,
      email: emailRef.current.valueOf,
      number: numberRef.current.valueOf,
    };
    props.getUserDetails(userDetails);
  };
  return (
    <div className="form-box">
      <Form className="user-form" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" ref={nameRef} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Number</Form.Label>
          <Form.Control type="number" placeholder="Number" ref={numberRef} />
        </Form.Group>
        <Form.Group controlId="formHorizontalCheck">
          <Form.Check label="Remember me" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactUs;
