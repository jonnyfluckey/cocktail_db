import React from "react";

function Splash() {
  const style = {
    background: {
      position: "absolute",
      backgroundColor: "#E4FAFF",
      height: "100%",
      width: "100%",
      padding: "50px"
    },
    header: {
      textAlign: "center"
    },
    img: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto"
    }
  };
  return (
    <div style={style.background}>
      <img
        style={style.img}
        src="https://images.unsplash.com/photo-1559842623-b82d2e1228a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        height="300px"
        alt="cocktail"
      />
      <h1 style={style.header}>Welcome to the Cocktail Database!</h1>
    </div>
  );
}

export default Splash;
