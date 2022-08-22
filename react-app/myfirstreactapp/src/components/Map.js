import React from "react";
import Container from "react-bootstrap/Container";

function MapComponent() {
  return (
    <div>
      <Container className="m-4 img-thumbnail">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.1167542448!2d80.06892435232284!3d13.047487785569134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1660385988608!5m2!1sen!2sin"
          width="100%"
          height="500px"          
        ></iframe>
      </Container>
      {/* <Container>
        <MapComponent1 />
      </Container> */}
    </div>
  );
}


function MapComponent1() {
  return (
    <div>
      <Container className="m-4 img-thumbnail">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.1167542448!2d80.06892435232284!3d13.047487785569134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1660385988608!5m2!1sen!2sin"
          width="100%"
          height="500px"          
        ></iframe>
      </Container>
      <Container></Container>
    </div>
  );
}

function MapComponent2() {
  return (
    <div>
      <Container className="m-4 img-thumbnail">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248756.1167542448!2d80.06892435232284!3d13.047487785569134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1660385988608!5m2!1sen!2sin"
          width="100%"
          height="500px"          
        ></iframe>
      </Container>
      <Container></Container>
    </div>
  );
}

export default MapComponent;
