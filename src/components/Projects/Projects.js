import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import n from "../../Assets/Projects/Screenshot 2024-07-06 232705.png";
import job from "../../Assets/Projects/Screenshot 2024-07-06 230102.png";
import hos from "../../Assets/Projects/Screenshot 2024-07-06 231516.png";
import we from "../../Assets/Projects/Screenshot 2024-07-06 231850.png";
import crud from "../../Assets/Projects/download.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
  <ProjectCard
    imgPath={chatify}
    overlayImgPath={job}
    isBlog={false}
    title="JobZee"
    description="Comprehensive job-seeking platform with dual roles for employers and job seekers. Built with React, Node.js, Express.js, and MongoDB. Employers can post, edit, and manage job listings, and track applicants. Job seekers can browse, apply for, and manage job applications. Features user authentication, RESTful APIs, and state management. Enhanced with responsive design and intuitive UI/UX for seamless interaction between users."
    ghLink="https://github.com/syedjamal12/JOB_SEEKING_BACKEND/tree/main"
    demoLink="https://job-seeking-application-syed.netlify.app/login"
  />
</Col>



<Col md={4} className="project-card">
  <ProjectCard
    imgPath={chatify}
    overlayImgPath={hos}
    isBlog={false}
    title="ZeeCare"
    description="Hospital Management System built with the MERN stack (React.js, Node.js, Express.js, MongoDB). Features user and admin panels. Users can schedule appointments and communicate with the hospital, while admins manage doctors and oversee appointments. Implemented user authentication with JWT and managed database operations with MongoDB."
    ghLink="https://github.com/syedjamal12/HMS_BACKEND/tree/main"
    demoLink="https://hospital-managment-system-user.netlify.app/"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={chatify}
    overlayImgPath={n}
    isBlog={false}
    title="N-Queens puzzle"
    description="N-Queens puzzle solver to place N queens on an N×N chessboard so that no two queens threaten each other. Ensures no two queens share the same row, column, or diagonal, providing a valid solution to the classic problem.

"
    ghLink="https://github.com/syedjamal12/N_Queen_Visualiser?tab=readme-ov-file"
    demoLink="https://nqueen.netlify.app/"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={chatify}
    overlayImgPath={we}
    isBlog={false}
    title="Weather App"
    description="Weather app built with HTML, CSS, and JavaScript providing real-time weather data. Features geolocation to detect the user's current location and API integration for fetching weather details like humidity, wind speed, and temperature. Users can also search for weather information by city names or coordinates."
    ghLink="https://github.com/syedjamal12/Weather-App"
    demoLink="https://weather-app-syedjamal.vercel.app/"
  />
</Col>

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={chatify}
    overlayImgPath={crud}
    isBlog={false}
    title="Employee Management System"
    description="Secure Employee Management System built with Java (Swing and AWT) and MySQL. Features include user authentication, permission-based access, and CRUD operations. Provides an intuitive interface for managing employee data seamlessly, with a secure login system praised for its reliability."
    ghLink="https://github.com/syedjamal12/Employee-Management-System"
   
  />
</Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
