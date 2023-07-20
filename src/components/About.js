import React from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });

  let myStyle = {
    color: props.mode === "dark" ? "white" : "#042743",
    background: props.mode === "dark" ? "#042743" : "white",
  };

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion " id="accordionExample">
        <div className="accordion-item ">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
              Text Analysis
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              The Text Analysis section of TextUtil is the core feature of the application. It offers a comprehensive set of tools and functionalities to interpret and analyze paragraph sentences
              effectively. Some key features of the Text Analysis section include: .
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
              Browser Compatibility
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtil is developed with a strong emphasis on browser compatibility, allowing users to access the application from a variety of web browsers. Whether you prefer Chrome, Firefox,
              Safari, or any other popular browser, you can enjoy the seamless experience of using TextUtil without any compatibility issues. This ensures that the tool is readily accessible to a wide
              range of users across different platforms.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
              Free to Use
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              TextUtil is completely free to use, enabling users to access its powerful features without any cost. This approach ensures that anyone, regardless of their financial limitations, can
              benefit from the application's functionalities and make the most of their textual content
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
