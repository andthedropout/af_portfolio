import React from 'react';
import Project from './project';
import Projects from './data';
import Project2 from './data2'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Chat } from '../../images';
import { Github2 } from '../../images';
import './Portfolio.scss';

export default function Portfolio() {
	const item = {
		hidden: { opacity: 0 },
		show: { opacity: 1 },
	};

	return (
		<div className="Portfolio">
			<img src={Github2} alt="Github"></img>
			<h1><br></br>Here's some of the websites I've had a big part of building:</h1>
			<Link className="backButton" to="/chat/start/completed">
				<img src={Chat} alt="Chat" /> Go back to chatting.
			</Link>
			<motion.div className="grid" initial="hidden" animate="show">
				{Projects.map((project) => {
					return (
						<motion.div variants={item}>
							<Project data={project} />
						</motion.div>
					);
				})}
			</motion.div>
			<h1><br></br>Here are the companies I've worked with:<br></br></h1>
			<motion.div className="grid" initial="hidden" animate="show">
				{Project2.map((project) => {
					return (
						<motion.div variants={item}>
							<Project data={project} />
						</motion.div>
					);
				})}
			</motion.div>
			{/* <h1><br></br>I've worked some odd jobs in my life!</h1>
			<p>I've had my worldview shaped by every job I've taken on my way to becoming a web developer:</p>
			<motion.div className="grid" initial="hidden" animate="show">
				{Projects2.map((project) => {
					return (
						<motion.div variants={item}>
							<Project data={project} />
						</motion.div>
					);
				})}
			</motion.div> */}
		</div>
	);
}
