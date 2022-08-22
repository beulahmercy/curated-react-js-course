import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Ratio from "react-bootstrap/Ratio";
import ListGroup from "react-bootstrap/ListGroup";
import Scrollspy from "react-scrollspy";

function ContentComponent() {
  const contents = [
    {
      heading: "New MOTS tourbook",
      subHeading: "Change the world, Dec 7, 2020",
      isImage: true,
      src: "image5.jpg",
      content: `The official Music Of The Spheres World Tour souvenir programme is available to order now at the
        Coldplay Store and at shows. This 56-page tourbook features exclusive interviews with all four
        members of the band as well as Phil Harvey, Pilar Zeta (art director) and Misty Buckley
        (production designer). The tourbook also contains exclusive photography from rehearsals and the
        Latin American and US legs of the tour, as well as info on the tour’s sustainability initiatives
        and Music Of The Spheres imagery and artwork. A planets sticker sheet is also stitched into the
        centre spread. Printed on Revive FSC recycled paper`,
    },
    {
      heading: "Music of the Spheres",
      subHeading: "Bring vibrant and joy, Sep 2, 2020",
      isImage: false,
      src: "https://youtube.com/embed/tgbNymZ7vqY",
      content: `The official Music Of The Spheres World Tour souvenir programme is available to order now at the
        Coldplay Store and at shows. This 56-page tourbook features exclusive interviews with all four
        members of the band as well as Phil Harvey, Pilar Zeta (art director) and Misty Buckley
        (production designer). The tourbook also contains exclusive photography from rehearsals and the
        Latin American and US legs of the tour, as well as info on the tour’s sustainability initiatives
        and Music Of The Spheres imagery and artwork. A planets sticker sheet is also stitched into the
        centre spread. Printed on Revive FSC recycled paper.`,
    },
    {
      heading: "Summer",
      subHeading: "Live life to the fullest, Dec 2, 2020",
      src: "image6.png",
      isImage: true,
      content: `The official Music Of The Spheres World Tour souvenir programme is available to order now at the
        Coldplay Store and at shows. This 56-page tourbook features exclusive interviews with all four
        members of the band as well as Phil Harvey, Pilar Zeta (art director) and Misty Buckley
        (production designer). The tourbook also contains exclusive photography from rehearsals and the
        Latin American and US legs of the tour, as well as info on the tour’s sustainability initiatives
        and Music Of The Spheres imagery and artwork. A planets sticker sheet is also stitched into the
        centre spread. Printed on Revive FSC recycled paper.`,
    },
    {
      heading: "1989",
      subHeading: "Dream Big, Sep 2, 2020",
      src: "image7.gif",
      isImage: true,
      content: `The official Music Of The Spheres World Tour souvenir programme is available to order now at the
        Coldplay Store and at shows. This 56-page tourbook features exclusive interviews with all four
        members of the band as well as Phil Harvey, Pilar Zeta (art director) and Misty Buckley
        (production designer). The tourbook also contains exclusive photography from rehearsals and the
        Latin American and US legs of the tour, as well as info on the tour’s sustainability initiatives
        and Music Of The Spheres imagery and artwork. A planets sticker sheet is also stitched into the
        centre spread. Printed on Revive FSC recycled paper.`,
    },
    {
        heading: "2022",
        subHeading: "Dream Big, Sep 2, 2020",
        src: "image7.gif",
        isImage: true,
        content: `The official Music Of The Spheres World Tour souvenir programme is available to order now at the
          Coldplay Store and at shows. This 56-page tourbook features exclusive interviews with all four
          members of the band as well as Phil Harvey, Pilar Zeta (art director) and Misty Buckley
          (production designer). The tourbook also contains exclusive photography from rehearsals and the
          Latin American and US legs of the tour, as well as info on the tour’s sustainability initiatives
          and Music Of The Spheres imagery and artwork. A planets sticker sheet is also stitched into the
          centre spread. Printed on Revive FSC recycled paper.`,
      },
      {
        heading: "Today",
        subHeading: "Dream Big, Sep 2, 2020",
        src: "image7.gif",
        isImage: true,
        content: `The official Music Of The Spheres World Tour souvenir programme is available to order now at the
          Coldplay Store and at shows. This 56-page tourbook features exclusive interviews with all four
          members of the band as well as Phil Harvey, Pilar Zeta (art director) and Misty Buckley
          (production designer). The tourbook also contains exclusive photography from rehearsals and the
          Latin American and US legs of the tour, as well as info on the tour’s sustainability initiatives
          and Music Of The Spheres imagery and artwork. A planets sticker sheet is also stitched into the
          centre spread. Printed on Revive FSC recycled paper.`,
      },
  ];
  return (
    <Container>
      <Row>
        <Col lg={4}>
          <h2>About Me</h2>
          <h5>Photo of Me</h5>
          <img src="image4.jpg" class="img-thumbnail" />

          <p>I am a singer and songwriter</p>
          <h3> Album Links</h3>
          <p>The latest hits and albums of 2022.</p>

          <ListComponent contents={contents} />
        </Col>
        <Col  lg={8}>
          {contents.map((item, index) => (
            <SubContent item={item} index={index} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

function SubContent({ item, index }) {
  //console.log(props);
  //{"item": "", "index": }
  return (
    <section id={`section${index + 1}`}>
      <h2>{item.heading}</h2>
      <h5>{item.subHeading}</h5>
      {item.isImage ? (
        <img src={item.src} />
      ) : (
        <Ratio aspectRatio="16x9">
          <iframe src={item.src}></iframe>
        </Ratio>
      )}
      <p>
        <a href={"http://google.com"}>Read More</a>
      </p>
      <p>{item.content}</p>
    </section>
  );
}

function ListComponent({ contents }) {

    const links = [];

    contents?.forEach((item, index) => {
        links.push(`section${index + 1}`);
    })

    console.log("links", links)
  return (
    // <ListGroup as="ul" className="position-sticky sticky-top">
    <Scrollspy
      className="position-sticky sticky-top list-group"
      items={links}
     
      currentClassName="list-group-item active"
    >
      {contents?.map((item, index) => (
        <ListGroup.Item action href={`#section${index + 1}`}>
          {item.heading}
        </ListGroup.Item>
      ))}
    </Scrollspy>
    // </ListGroup>
  );
}
export default ContentComponent;
