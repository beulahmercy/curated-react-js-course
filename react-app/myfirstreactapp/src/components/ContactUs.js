import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function ContactUsComponent() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // read all the form values

      console.log(form.elements);
      console.log(event.target["validationCustom01"]?.value);
      console.log(event.target.validationCustom01.value);

      console.log(event.target.ValidateCheck01?.checked);
    }

    setValidated(true);
  };

  return (
    <Container className="m-3 img-thumbnail">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md="4" >
            {/* <Form.Group as={Col} md="4" controlId="validationCustom01"> */}
            <Form.Label>First name</Form.Label>
            <Form.Control
              id="validationCustom01"
              required
              type="text"
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            {/* </Form.Group> */}
          </Col>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue="Otto"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="TN">Tamil Nadu</option>
              <option value="KA">Kerala</option>
              <option value="MA">Maharastra</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control
              type="text"
              placeholder="Zip"
              required
              pattern="[0-9]{6}"
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Check as={Col} lg="3" controlId="ValidateRadio01">
            <Form.Label>Gender</Form.Label>
            <div key={`radio`} className="mb-3">
              <Form.Check
                required
                label="Male"
                value="M"
                name="ValidateRadio01"
                type="radio"
                id={`radio-1`}
              />
              <Form.Check
                required
                label="Female"
                value="F"
                name="ValidateRadio01"
                type="radio"
                id={`radio-2`}
              />
            </div>
          </Form.Check>
          <Form.Group as={Col} controlId="ValidateTextArea01">
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="ValidateCheck01">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Row>
          <Col>
            <Button className="d-flex float-end" type="submit">
              OK
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default ContactUsComponent;
