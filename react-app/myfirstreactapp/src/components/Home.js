import React from "react";

function Home(props) {
  console.log(props);
  return (
    <React.Fragment>
      <h1>Home</h1>
      <p>
        In case you are using Sass the simplest way is to include the
        Bootstrap’s source Sass files in your main Sass file and then require it
        on your src/index.js or App.js file. This applies to a typical
        create-react-app application in other use cases you might have to setup
        the bundler of your choice to compile Sass/SCSS stylesheets to CSS.
      </p>
    </React.Fragment>
  );
}

export default Home;
