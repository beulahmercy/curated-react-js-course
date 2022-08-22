import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import React, { useState } from "react";
import NavBar from "./components/NavBar";
import CustomCarousal from "./components/Carousal";
import FooterComponent from "./components/Footer";
import ContactUsComponent from "./components/ContactUs";
import LayoutComponent from "./components/Layout"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import MapComponent from "./components/Map";
import ContentComponent from "./components/Content";

function App() {
  // const headings = [
  //   "My Frist React",
  //   "My Frist React 1",
  //   "My Frist React 2",
  //   "My Frist React 3"
  // ];

  //array destructring
  //object destructring

  // const test =[0, 1, 3]

  const obj = {
    title: "my title",
    content: "my content",
    flag : true,
    draw: function() {

    }
  }

  //obj.title
  //obj["content"]
  // const {title, content, draw} = obj;

  // const [first, second] = test;

  // console.log(title)
  // console.log(test[1])
  // console.log(test[3])

  //useState() react hook used to declare states for your component;
  const [headings, setHeadings] = useState([
    "My Frist React",
    "My Frist React 1",
    "My Frist React 2",
    "My Frist React 3",
  ]);
  //const headings = stateHeadings[0];
  //const setHeadings = stateHeadings[1];

  // setHeadings();
  //headings[0]

  // headings.map
  // forEach

  const onClick = () => {
    console.log("button click");
  };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <React.Fragment>
    //   <NavBar theme="light" />
    //   <CustomCarousal />
    //   {/* {headings?.map((item, index) => (
    //     <Home text={item} onClick={onClick}  />
    //   ))} */}
    //   <ContactUsComponent />
    //   <FooterComponent />
    // </React.Fragment>
    <BrowserRouter>
    
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route index element={<Home />} />
          <Route path="tours" element={<ContentComponent />}/> 
          <Route path="location-map" element={<MapComponent />}/> 
          <Route path="contact" element={<ContactUsComponent />}/> 
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
