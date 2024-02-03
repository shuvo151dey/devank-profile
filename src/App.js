import React from "react";
import "./App.css";
import { FaExternalLinkAlt } from "react-icons/fa";
function App() {
  return (
    <React.Fragment>
      <header className="header">
        <div className="name">Devank Thawre</div>
        <div className="college">IIT KHARAGPUR</div>
        <div className="details">
          {" "}
          MANUFACTURING SCIENCE AND ENGINEERING (B.Tech)
        </div>
        <div className="details">
          {" "}
          INDUSTRIAL AND SYSTEMS ENGINEERING (M.Tech)
        </div>
        <div className="details">[DUAL DEGREE]</div>
        <div className="details"> Graduated May 2023</div>
        <img
          className="header_image-1"
          src={require("./Assets/pc1.jpg")}
          alt="image1"
        />
        <img
          className="header_image-2"
          src={require("./Assets/Pc5.jpg")}
          alt="image2"
        />
        <img
          className="header_image-3"
          src={require("./Assets/diff mount.jpg")}
          alt="image2"
        />
        <img
          className="header_image-4"
          src={require("./Assets/hand aux.jpg")}
          alt="image2"
        />

        <video autoPlay loop muted>
          <source src={require("./Assets/Tap.mp4")} type="video/mp4" />
          Browser does not support mp4
        </video>
      </header>
      <div className="content">
        <h3>COURSEWORK</h3>
        <div className="flex-box">
          <div className="flexcard_half">
            <h4>University</h4>
            <ul className="course_list">
              <li>Kinematics of Machines</li>
              <li>Dynamics </li>
              <li>Robotics and Computer Controlled Machines</li>
              <li>Programming and data structures</li>
              <li>Basic electronics</li>
            </ul>
          </div>
          <div className="flexcard_half">
            <h4>Certification</h4>
            <ul className="course_list">
              <li>Embedding sensors and motors specialization </li>
              <li>(University of Colorado Boulder)</li>
            </ul>
          </div>
        </div>
        <h3>SKILLS</h3>
        <div className="flex-box">
          <div className="flexcard_quarter">
            <h4>CAD CAE</h4>
            <p>SolidWorks | OnShape | Ansys (Structural, Fluent)</p>
          </div>
          <div className="flexcard_quarter">
            <h4>MS OFFICE</h4>
            <p>Word | PowerPoint | Excel</p>
          </div>
          <div className="flexcard_quarter">
            <h4>MEDIA EDIITING</h4>
            <p> Adobe Photoshop </p>
          </div>
          <div className="flexcard_quarter">
            <h4>OTHERS</h4>
            <p>Arduino | MATLAB</p>
          </div>
        </div>
        <h3>EXPERIENCE</h3>
        <div className="content-box">
          <h4>
            <span>RESEARCH INTERN</span> | <span>New York University</span>
          </h4>
          <p>PROJECT MANAGER: Prof. Vikram Kapila | Mechanical Engineering | New York University</p>
          <p>May 2022 – August 2022</p>
          <p>
            Title: Development of an autonomous mobile manipulator for dialysis
            machine
          </p>
          <p>
            Conceptualized and designed a mobile manipulator assembly for
            autonomous operation of a hospital ward dialysis machine. Developed
            comprehensive CAD models for the main bodies,manipulator, and mobile
            robot components. Engineered the internal circuit to govern the
            mobile manipulator, encompassing microcontrollers, sensors and power
            management. Utilized Ansys for assembly simulation, optimizing
            designparameters, calculating stress, deformation, and ensuring
            cost-effectiveness.Conducted dynamic simulations of the designed
            robot in Gazebo, evaluating its performance in realistic
            environments.Integrated Lidar mapping into the simulation, enhancing
            the robot'sability to perceive and navigate real-world conditions
            autonomously
          </p>
        </div>
        <div className="content-box">
          <h4>
            <span>RESEARCH INTERN</span> | <span>ROBEL, CALFORNIA, USA</span>
          </h4>
          <p>
            PROJECT MANAGER: Dr. Vikash Kumar | Adjunct Professor | Carnegie Mellon
            University
          </p>
          <p>June 2020 – August 2020 | San Francisco</p>
          <p>
            Engineered a cost-effective anthropomorphic hand model
            (<a href="https://sites.google.com/view/roboticsbenchmarks/platforms/dmanus" target="_blank"><u>D’Manus</u> <FaExternalLinkAlt /></a>)capable of performing diverse day-to-day
            tasks. Conceptualized a design featuring a 10 degrees of freedom
            (DOF)robotic hand operating on an R-R-R chain link, employing
            high-performance motors for enhanced functionality.Modeled the
            entire system in a physics engine, facilitating simulationand
            in-depth study of its dexterity in handling forty plus
            differentshapes and sizes of tools.
          </p>
        </div>
        <div className="content-box">
          <h4>
            <span>
              <a href="https://teamkart.org/" target="_blank">
                TeamKART Formula SAE <FaExternalLinkAlt />
              </a>
            </span>{" "}
            | <span>POWERTRAIN TEAM MEMBER</span>
          </h4>
          <p>
            SUPERVISOR: Dr. Dhananjay Kumar Srivastava | Mechanical Engineering
            Department
          </p>
          <p>September 2018 – January 2020 | IIT Kharagpur</p>
          <p>
            One of the 4 members working towards application of an IC engine
            informula student vehicle.Developed a rule-compliant powertrain with
            improved efficiency forFormula Bharat 2020.Studied the intake
            manifold design of IC engine by simulating thetransient flow inside
            the geometry.Designed an engine jig for safe operation and testing
            purposes of theengine and its related components.
          </p>
        </div>

        <h3>PROJECTS</h3>
        <div className="content-box">
          <h4>
            <span>WALL CLIMBING ROBOT</span>
          </h4>
          <p>
            SUPERVISOR: Dr. Dilip Kumar Pratihar | Mechanical Engineering
            Department
          </p>
          <p>August 2021 – May 2023 | IIT Kharagpur</p>
          <p>
            Designed and developed a wall-climbing quadruple robot for
            industrial inspections on walls and pipelines. Generated
            comprehensive CAD models to precisely represent the robot's
            structure, designing it completely from beginning. Conducted motion
            analysis to evaluate and optimize the robot's gait movement for
            efficient wall climbing. Utilized Ansys for dynamic analysis in the
            simulation phase to ensure structural integrity and performance.
            Implemented ROS (Robot Operating System) for simulation in Gazebo,
            providing a realistic virtual environment. Constructed a functional
            prototype of the robot, employing suction as the primary mechanism
            for climbing walls and surfaces. The prototype aimed to address
            industrial maintenance needs, showcasing the practical application
            of the designed technology.
          </p>
        </div>
        <div className="content-box">
          <h4>
            <span>AUTOMATED BATTERY CHANGING BOT</span>
          </h4>
          <p>
            October 2019 – March 2020 | General Championship | IIT Kharagpur
          </p>
          <p>
            Developed a battery changing bot for changing discharged batteries
            of automated and controlled flying drones in general championship.
            Developed the bot’s mechanical framework to withstand more weight
            and stress with less deformation.Using ansys structural, performed
            framework’s FEA for optimizing its strength to withstand load of
            heavier drones. Worked on the controls portion of the bot for
            perfect execution of the required tasks usingArduino.
          </p>
        </div>
        <div className="content-box">
          <h4>
            <span>AUXILIA</span> | <span>Brain Controlled Prosthetic Arm</span>
          </h4>
          <p>
            November 2018 – February 2019 | General Championship | IIT Kharagpur
          </p>
          <p>
            Auxilia features intelligent control algorithms and autonomy by
            incorporating advanced image processing techniques. Proposed design
            for the flexion of thumb applying the positive drive system for full
            actuation of thumb with single servo. Designed fingers of the hand
            using 4 bar linkage mechanism for each joint in order to replicate
            natural movement of human fingers. Performed stress analysis on the
            hand for strength optimization within material’s limits. Employed
            Arduino to ensure the effective coordination of the entire hand,
            enhancing its capability to adapt and grip objects with accuracy.{" "}
            <a
              href="https://drive.google.com/file/d/1Lsa1lI3pPr7f0bubkaYEJXlVyQ0mK5ci/view?usp=sharing"
              target="_blank"
            >
              <i>
                <u>Link to project.</u>
              </i>{" "}
              <FaExternalLinkAlt />
            </a>{" "}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
