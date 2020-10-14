import React from 'react';
import './App.css';

function App() {
	return (
		<React.Fragment>
			<header className="header">
				<div className="name">Devank Thawre</div>
				<div className="college">IIT KHARAGPUR</div>
				<div className="details"> MANUFACTURING SCIENCE AND ENGINEERING (B.TECH)</div>
				<div className="details"> Dept. Of MECHANICAL ENGG.</div>
				<div className="details"> Expected April 2022</div>
				<img className="header_image-1" src={require('./Assets/pc1.jpg')} alt="image1" />
				<img className="header_image-2" src={require('./Assets/pc7.jpg')} alt="image2" />
				<video autoPlay loop>
					<source src={require('./Assets/Tap.mp4')} type="video/mp4" />
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
							<li> Heat Transfer </li>
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
						<p>Arduino</p>
					</div>
				</div>
				<h3>EXPERIENCE</h3>
				<div>
					<h4>
						<span>RESEARCH INTERN</span> | <span>ROBEL, CALFORNIA, USA</span>
					</h4>
					<p>PROJECT MANAGER: Vikash Kumar | Research Scientist | PhD UNIVERSITY OF WASHINGTON</p>
					<p>June 2020 – August 2020 | San Francisco</p>
					<p>
						Designed a dexterous model of an anthropomorphic hand able to perform multiple daily required
						tasks. Conceptualized and designed a robotic hand having 9 DOF operating on an R-R-R chain link
						using mid-range torque actuators. Successfully modelled the entire system in a physics engine to
						simulate and study its dexterity by handling various tools.
					</p>
				</div>
				<div>
					<h4>
						<span>TeamKART Formula SAE</span> | <span>POWERTRAIN TEAM MEMBER</span>
					</h4>
					<p>SUPERVISOR: Dr Dhananjay Kumar Srivastava | Mechanical Engineering Department</p>
					<p>September 2018 – January 2020 | IIT Kharagpur</p>
					<p>
						One of the 4 members working towards application of an IC engine in formula student vehicle.
						Developed a rule-compliant powertrain with improved efficiency for Formula Bharat 2020.
						Performed FEA of differential mounts and drive shafts for strength and weight optimization,
						achieving a high strength to weight ratio. Designed an engine jig for safe operation and testing
						purposes of the engine and its related components.
					</p>
				</div>
				<h3>PROJECTS</h3>
				<div>
					<h4>
						<span>AUTOMATED BATTERY CHANGING BOT</span>
					</h4>
					<p>October 2019 – March 2020 | General Championship | IIT Kharagpur</p>
					<p>
						Developed a battery changing bot for changing discharged batteries of automated and controlled
						flying drones in general championship. Developed the bot’s mechanical framework to withstand
						more weight and stress with less deformation.Using ansys structural, performed framework’s FEA
						for optimizing its strength to withstand load of heavier drones. Worked on the controls portion
						of the bot for perfect execution of the required tasks usingArduino.
					</p>
				</div>
				<div>
					<h4>
						<span>AUXILIA</span> | <span>Brain Controlled Prosthetic Arm</span>
					</h4>
					<p>November 2018 – February 2019 | General Championship | IIT Kharagpur</p>
					<p>
						Auxilia features intelligent control algorithms and autonomy by incorporating advanced image
						processing techniques. Proposed design for the flexion of thumb applying the belt-pulley
						positive drive system for full actuation of thumb with single servo.Designed fingers of the hand
						using 4 bar linkage mechanism for each joint in order to replicate natural movement of human
						fingers.Performed stress analysis on the hand for strength optimization within material’s
						limits.Developed controls of the hand using Arduino in order to orient the entire hand properly
						for perfect gripping.
					</p>
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;
