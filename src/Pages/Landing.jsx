import React from "react";
import { Link } from "react-router-dom";
import golden from "../assets/golden.png";
import { Card } from "react-bootstrap";
import settingimg from "../assets/setting.png";
import categoryimg from "../assets/setting2.png";
import historyimg from "../assets/setting3.png";

function Landing() {
  return (
    <>
      <div className="landingsection container">
        <div className="row align-items-center mt-5">
          <div className="col-lg-6">
            <h3>
              Welcome to <span className="text-warning">Media Player</span>
            </h3>
            <p style={{ textAlign: "justify" }}>
              Media Player App will will allow add remove their uploaded videos
              from youtube and also arrange them in different categories by drag
              and drop.Usercan also have the provision to manage their watch
              history as well.What are you waiting for, let starts exploring our
              site!!!
            </p>
            <Link to={"/home"} className="btn btn-warning">
              Get Started
            </Link>
          </div>
          <div className="col-lg-6">
            <img className="w-50" src={golden} alt="landing page" />
          </div>
        </div>
        {/* features */}
        <div className="Features my-5">
          <h3 className="text-center">Features</h3>
          <div className="row">
            <div className="col-lg-4">
              <Card style={{ width: "22rem", height: "400px" }}>
                <Card.Img
                  variant="top"
                  style={{ padding: "10px", width: "70%", margin: "0px auto" }}
                  src={settingimg}
                />
                <Card.Body className="text-center">
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text>
                    User can upload, view and remove the videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card style={{ width: "22rem", height: "400px" }}>
                <Card.Img
                  variant="top"
                  style={{ padding: "10px", width: "70%", margin: "0px auto" }}
                  src={categoryimg}
                />
                <Card.Body className="text-center">
                  <Card.Title>Categorise Videos</Card.Title>
                  <Card.Text>
                    User can categorise the videos by drag and drop feature
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card style={{ width: "22rem", height: "400px" }}>
                <Card.Img
                  variant="top"
                  style={{ padding: "10px", width: "70%", margin: "0px auto" }}
                  src={historyimg}
                />
                <Card.Body className="text-center">
                  <Card.Title>Mnaging History</Card.Title>
                  <Card.Text>
                    User can manage the watch history of all videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="my-5 row border rounded p-5">
          <div className="col-lg-5">
            <h3 className="text-warning">Simple, Fast and Powerful</h3>
            <p style={{ textAlign: "justify" }}>
              <span className="fs-5">Play Everything</span>: Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Minus non error fugit iste Lorem ipsum 
            </p>
            <p style={{ textAlign: "justify" }}>
              <span className="fs-5">Categorise Videos</span>: Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Minus non error fugit iste Lorem ipsum
            </p>
            <p style={{ textAlign: "justify" }}>
              <span className="fs-5">Managing History</span>: Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Minus non error fugit iste Lorem ipsum
            </p>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
            <iframe
              width="100%"
              height="387"
              src="https://www.youtube.com/embed/Po3jStA673E"
              title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
