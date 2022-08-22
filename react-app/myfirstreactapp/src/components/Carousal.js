// import Carousel from "react-bootstrap/Carousel";
// import { useState } from "react";

// function CustomCarousal() {
//   const [items, setItems] = useState([
//     {
//       image: "image1.jpg",
//       heading: "First slide label",
//       content: "My first image1",
//     },
//     {
//       image: "image2.jpg",
//       heading: "Second slide label",
//       content: "My Second image2",
//     },
//     {
//       image: "image3.jpg",
//       heading: "Third slide label",
//       content: "My Third image3",
//     },
//   ]);

//   return (
//     <Carousel>
//       {items.map((item, index) => (
//         <Carousel.Item>
//           <img className="d-block w-100" src={item.image} alt="First slide" />
//           <Carousel.Caption>
//             <h3>{index === 0 ? "Custom heading" : item.heading}</h3>
//             <p>{item.content}</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );
// }

// export default CustomCarousal;

import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";

function CustomCarousal() {
  const [items, setItems] = useState();


  useEffect(() => {
    setItems([
      {
        image: "image1.jpg",
        heading: "First slide label",
        content: "My first image1",
      },
      {
        image: "image2.jpg",
        heading: "Second slide label",
        content: "My Second image2",
      },
      {
        image: "image3.jpg",
        heading: "Third slide label",
        content: "My Third image3",
      },
    ]);
  }, []);

  return (
    <Carousel>
      {items?.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.image} alt="First slide" />
          <Carousel.Caption>
            <h3>{index === 0 ? "Custom heading" : item.heading}</h3>
            <p>{item.content}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
     
    </Carousel>
  );
}

export default CustomCarousal;
