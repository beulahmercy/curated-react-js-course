import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState, useEffect, useContext, createContext } from "react";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import NavLink from "react-bootstrap/NavLink";
import { Link } from "react-router-dom";

//creating the context

//enclose the compontent inside a context and reading value from the context
const { Provider, Consumer } = createContext();

function NavBar(props) {
  const [show, setShow] = useState(false);

  const [validated, setValidated] = useState(false);

  const [size, setSize] = useState("xl");

  const [searchText, setSearchText] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const text = event.target.searchText.value;
      setSearchText(text);
      console.log(text);
      setSize("lg");
      setShow(true);
    }
    setValidated(true);
  };
  return (
    <React.Fragment>
      <Navbar bg={props.theme} expand="lg">
        <Container>
          <Navbar.Brand href="#home">My Concert</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/tours">Tours</Nav.Link>
              <Nav.Link href="/location-map">Location Map</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
              {/* <Link to={"/"} className="nav-link">
                Home
              </Link>
              <Link to={"/"} className="nav-link">
                Tours
              </Link>
              <Link to={"/location-map"} className="nav-link">
                Location Map
              </Link>
              <Link to={"/contact"} className="nav-link">
                Contact Us
              </Link> */}
            </Nav>
          </Navbar.Collapse>
          <Form
            className="d-flex"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Row>
              <Form.Group as={Col} xl="8" controlId="searchText">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  required
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  Please provide a valid text.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="submit-button">
                <Button variant="success" type="submit">
                  Search
                </Button>
              </Form.Group>
            </Row>
          </Form>
        </Container>
      </Navbar>

      <Provider value={size}>
        <ModalComponent
          text={searchText}
          show={show}
          onHide={() => setShow(false)}
        />
      </Provider>
    </React.Fragment>
  );
}

function ModalComponent(props) {
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  //{...props} spread operator

  const [items, setItems] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://www.googleapis.com/customsearch/v1?key=AIzaSyA5-lpQYja2gFa1UflxoCpJ1JB6NfuVb7w&cx=017576662512468239146:omuauf_lfve&q=" +
        props.text;

      // promise
      //async await

      const response = await fetch(url);

      const data = await response.json();

      console.log(data.items);

      setItems(data.items);
    };

    if (props.text) {
      fetchData();
    }

    // setItems([
    //   {
    //     htmlFormattedUrl: "https://example.com",
    //     htmlSnippet: "My Test Snippet",
    //     htmlTitle: "My Test Title",
    //     title: "Title",
    //   },
    //   {
    //     htmlFormattedUrl: "https://example1.com",
    //     htmlSnippet: "My Test Snippet1",
    //     htmlTitle: "My Test Title1",
    //     title: "Title1",
    //   },
    //   {
    //     htmlFormattedUrl: "https://example2.com",
    //     htmlSnippet: "My Test Snippet2",
    //     htmlTitle: "My Test Title2",
    //     title: "Title2",
    //   },
    // ]);
  }, [props.text]);

  const onDelete = (id) => {
    console.log(id);
    setItems(items.filter((item, index) => index !== id));
  };

  const onAdd = () => {
    const item = {
      htmlFormattedUrl: "https://example2.new.com",
      htmlSnippet: "My New Test Snippet2",
      htmlTitle: "My New Test Title2",
      title: "New Title2",
    };
    setItems([...items, item]);
  };

  return (
    <>
      <Consumer>
        {(value) => (
          <Modal {...props} backdrop="static" size={value} keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title>Google Search Results</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container>
                {items?.map((item, index) => (
                  <Row key={index}>
                    <Col xs={12} className="m-1" key={index}>
                      <Card key={index}>
                        <Card.Body>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>{item.htmlSnippet}</Card.Text>
                          {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        <Card.Footer>
                          {/* <Button>
                    Add
                </Button> */}
                          <Row>
                            <Col xl={6}>
                              <NavLink
                                target="_blank"
                                href={item.htmlFormattedUrl}
                              >
                                Read More
                              </NavLink>
                            </Col>
                            <Col xl={6}>
                              <Button
                                className="fa fa-close float-end"
                                onClick={() => onDelete(index)}
                              ></Button>
                            </Col>
                          </Row>
                        </Card.Footer>
                      </Card>
                    </Col>
                  </Row>
                ))}
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onAdd}>
                Add
              </Button>
              {/* <Button variant="primary">Understood</Button> */}
            </Modal.Footer>
          </Modal>
        )}
      </Consumer>
    </>
  );
}

export default NavBar;
