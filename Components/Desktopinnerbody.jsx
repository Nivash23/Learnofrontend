import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import v1 from "../images/Courses/selected/Introvideo.mp4";
import Reactimg from "../images/Courses/selected/reactjs.avif";
import aiimg from "../images/Courses/selected/ai (3).avif";
import javaimg from "../images/Courses/selected/java (2).avif";
import sqlimg from "../images/Courses/selected/Sql (2).avif";
import Nodejsimg from "../images/Courses/selected/node js (2).avif";
import mongodbimg from "../images/Courses/mongodbimg.avif";
import Digitalimg from "../images/Courses/selected/dm (5).avif";
import pythonimg from "../images/Courses/selected/python.avif";
import Datascienceimg from "../images/Courses/selected/ds (2).avif";
import UpdatedSubscription from "./UpdatedSubscription";
import Datas from "../Utils/Datas";
import Footer from "./Footer";

function Desktopinnerbody({
  setPagelangmenubutstate,
  setCoursemenubutstate,
  setMenulinemenudisplay,
}) {
  const navigate = useNavigate();
  const { t, selectedcourse, setSelectedcourse } = useOutletContext();

  return (
    <div onClick={() => {
          setPagelangmenubutstate("PLmbutinactive");
          setCoursemenubutstate("Cmbutinactive");
          setMenulinemenudisplay("none");
        }}>
      <div
        id="innercontainer"
        
      >
        {/* <img src={bannerimage}></img> */}
        <video src={v1} autoPlay loop muted />
      </div>
      <div id="innerbody">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background:
              "linear-gradient(to bottom right,rgb(206, 206, 206),white)",
          }}
        >
          <div class="freecourses">
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                  fontWeight: "bold",
                  gap: "6px",
                  fontSize: "24px",
                  margin: "20px 0px 40px 0px",
                }}
              >
                Learn <span style={{ color: "GrayText" }}> AI/ML</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  // textAlign:"initial"
                }}
              >
                <div className="coursepoints">{t("a1")}</div>
                <div className="coursepoints">{t("a2")}</div>
                <div className="coursepoints">{t("a3")}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button
                  type="button"
                  style={{
                    backgroundColor: "lightseagreen",
                    color: "white",
                    padding: "6px 15px 6px 15px",
                    borderRadius: "7px",
                  }}
                  onClick={() => {
                    setSelectedcourse("AI");
                    navigate("/courses/Googleform");
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
            <div
              className="courseimg"
              onClick={() => {
                setSelectedcourse("AI");
                navigate("/courses/Googleform");
              }}
            >
              <img
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                src={aiimg}
              ></img>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div class="freecourses">
            <div
              className="courseimg"
              onClick={() => {
                setSelectedcourse("Python");
                navigate("/courses/Googleform");
              }}
            >
              <img src={pythonimg}></img>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                  fontWeight: "bold",
                  gap: "6px",
                  fontSize: "24px",
                  margin: "20px 0px 40px 0px",
                }}
              >
                Learn <span style={{ color: "GrayText" }}> Python</span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="coursepoints">{t("p1")}</div>
                <div className="coursepoints">{t("p2")}</div>
                <div className="coursepoints">{t("p3")}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button
                  type="button"
                  style={{
                    backgroundColor: "lightseagreen",
                    color: "white",
                    padding: "6px 15px 6px 15px",
                    borderRadius: "7px",
                  }}
                  onClick={() => {
                    setSelectedcourse("Python");
                    navigate("/courses/Googleform");
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background:
              "linear-gradient(to bottom right,rgb(185, 220, 231),white)",
          }}
        >
          <div class="freecourses">
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                  fontWeight: "bold",
                  gap: "6px",
                  fontSize: "24px",
                  margin: "20px 0px 40px 0px",
                }}
              >
                Learn <span style={{ color: "GrayText" }}> ReactJS</span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="coursepoints">{t("r1")}</div>
                <div className="coursepoints">{t("r2")}</div>
                <div className="coursepoints">{t("r3")}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button
                  type="button"
                  style={{
                    backgroundColor: "lightseagreen",
                    color: "white",
                    padding: "6px 15px 6px 15px",
                    borderRadius: "7px",
                  }}
                  onClick={() => {
                    setSelectedcourse("ReactJS");
                    navigate("/courses/Googleform");
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
            <div
              className="courseimg"
              onClick={() => {
                setSelectedcourse("ReactJS");
                navigate("/courses/Googleform");
              }}
            >
              <img src={Reactimg}></img>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div class="freecourses">
            <div
              className="courseimg"
              onClick={() => {
                setSelectedcourse("NodeJS");
                navigate("/courses/Googleform");
              }}
            >
              <img src={Nodejsimg}></img>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                  fontWeight: "bold",
                  gap: "6px",
                  fontSize: "24px",
                  margin: "20px 0px 40px 0px",
                }}
              >
                Learn <span style={{ color: "GrayText" }}> NodeJS</span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="coursepoints">{t("N1")}</div>
                <div className="coursepoints">{t("N2")}</div>
                <div className="coursepoints">{t("N3")}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button
                  type="button"
                  style={{
                    backgroundColor: "lightseagreen",
                    color: "white",
                    padding: "6px 15px 6px 15px",
                    borderRadius: "7px",
                  }}
                  onClick={() => {
                    setSelectedcourse("NodeJS");
                    navigate("/courses/Googleform");
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: "linear-gradient(to bottom right,#F8E7F6,white)",
          }}
        >
          <div class="freecourses">
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                  fontWeight: "bold",
                  gap: "6px",
                  fontSize: "24px",
                  margin: "20px 0px 40px 0px",
                }}
              >
                Learn <span style={{ color: "GrayText" }}> JAVA</span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div class="coursepoints">💼 Industry-standard for backend</div>
                <div class="coursepoints">🔐 Secure and object-oriented</div>
                <div class="coursepoints">
                  🤖 Used in banking, automation, Android
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button
                  type="button"
                  style={{
                    backgroundColor: "lightseagreen",
                    color: "white",
                    padding: "6px 15px 6px 15px",
                    borderRadius: "7px",
                  }}
                  onClick={() => {
                    setSelectedcourse("Java");
                    navigate("/courses/Googleform");
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
            <div
              className="courseimg"
              onClick={() => {
                setSelectedcourse("Java");
                navigate("/courses/Googleform");
              }}
            >
              <img src={javaimg}></img>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div class="freecourses">
            <div
              className="courseimg"
              onClick={() => {
                setSelectedcourse("SQL");
                navigate("/courses/Googleform");
              }}
            >
              <img src={sqlimg}></img>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                  fontWeight: "bold",
                  gap: "6px",
                  fontSize: "24px",
                  margin: "20px 0px 40px 0px",
                }}
              >
                Learn <span style={{ color: "GrayText" }}> SQL</span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div class="coursepoints">🧮 Write complex SQL queries</div>
                <div class="coursepoints">
                  🔄 Perform CRUD operations and joins
                </div>
                <div class="coursepoints">
                  📊 Use SQL for analytics and reporting
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button
                  type="button"
                  style={{
                    backgroundColor: "lightseagreen",
                    color: "white",
                    padding: "6px 15px 6px 15px",
                    borderRadius: "7px",
                  }}
                  onClick={() => {
                    setSelectedcourse("SQL");
                    navigate("/courses/Googleform");
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: "linear-gradient(to right,orange,white)",
          }}
        >
          <div class="freecourses">
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                  fontWeight: "bold",
                  gap: "6px",
                  fontSize: "24px",
                  margin: "20px 0px 40px 0px",
                }}
              >
                Learn <span style={{ color: "GrayText" }}> MongoDB</span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="coursepoints">{t("m1")}</div>
                <div className="coursepoints">{t("m2")}</div>
                <div className="coursepoints">{t("m3")}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button
                  type="button"
                  style={{
                    backgroundColor: "lightseagreen",
                    color: "white",
                    padding: "6px 15px 6px 15px",
                    borderRadius: "7px",
                  }}
                  onClick={() => {
                    setSelectedcourse("MongoDB");
                    navigate("/courses/Googleform");
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
            <div
              className="courseimg"
              onClick={() => {
                setSelectedcourse("MongoDB");
                navigate("/courses/Googleform");
              }}
            >
              <img src={mongodbimg}></img>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div class="freecourses">
            <div
              className="courseimg"
              onClick={() => {
                setSelectedcourse("Digital Marketting");
                navigate("/courses/Googleform");
              }}
            >
              <img src={Digitalimg}></img>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                  fontWeight: "bold",
                  gap: "6px",
                  fontSize: "24px",
                  margin: "20px 0px 40px 0px",
                }}
              >
                Learn{" "}
                <span style={{ color: "GrayText" }}> DigitalMarketing</span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div class="coursepoints">📢 Learn SEO, SEM, and Analytics</div>
                <div class="coursepoints">
                  📱 Run real campaigns across platforms
                </div>
                <div class="coursepoints">
                  💼 Build your digital marketing portfolio
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button
                  type="button"
                  style={{
                    backgroundColor: "lightseagreen",
                    color: "white",
                    padding: "6px 15px 6px 15px",
                    borderRadius: "7px",
                  }}
                  onClick={() => {
                    setSelectedcourse("Digital Marketting");
                    navigate("/courses/Googleform");
                  }}

                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: "linear-gradient(to right,pink,white)",
          }}
        >
          <div class="freecourses">
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "red",
                  fontWeight: "bold",
                  gap: "6px",
                  fontSize: "24px",
                  margin: "20px 0px 40px 0px",
                }}
              >
                Learn <span style={{ color: "GrayText" }}> DataScience</span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="coursepoints">
                  📊 Data wrangling, analysis, and visualization
                </div>
                <div className="coursepoints">
                  🤖 Machine Learning & AI foundations
                </div>
                <div className="coursepoints">
                  📈 Real-world datasets and projects
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <button
                  type="button"
                  style={{
                    backgroundColor: "lightseagreen",
                    color: "white",
                    padding: "6px 15px 6px 15px",
                    borderRadius: "7px",
                  }}
                  onClick={() => {
                    setSelectedcourse("DataScience");
                    navigate("/courses/Googleform");
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
            <div
              className="courseimg"
              onClick={() => {
                setSelectedcourse("DataScience");
                navigate("/courses/Googleform");
              }}
            >
              <img src={Datascienceimg}></img>
            </div>
          </div>
        </div>
      </div>

      <div>
        <UpdatedSubscription />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Desktopinnerbody;
