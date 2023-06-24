import "./Philosophie.scss"
import React from 'react'
import img1 from "../../images/bike.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/exercise-4.jpg"
import AnchorLink from "react-anchor-link-smooth-scroll-v2"
import { BsArrowDownCircleFill } from "react-icons/bs"


export default function Philosophie() {


	return (
		<div className="philosophie" id="philosophie">
			<div className="moto-container">
				<h1>MY PHILOSOPHY
					HOLISTICALLY HEALTHY.
					STRONG IN LIFE.</h1>
			</div>

			<div className="tex-container">
				<p>It is an interplay that is as fascinating as it is complex: muscles, joints and the spine keep us flexible and do everything we want to. Almost as if by itself. But if something gets "messed up" in this system, it can have painful and even chronic effects on the entire body. Often also on our entire life. As a coach, it is my job to minimize these effects or, at best, to prevent them entirely through targeted prevention.</p>
			</div>

			<div className="image-container">
				<div className="foto"><img className="img" src={img1} alt="image 1" /></div>
				<div className="foto"><img className="img" src={img2} alt="image 1" /></div>
				<div className="foto foto3">
					<img className="img" src={img3} alt="image 1" />
					<AnchorLink href="#exercise"><BsArrowDownCircleFill /></AnchorLink>
				</div>

				{/* <img className="img2 foto" src={img2} alt="image 2" />
				<img className="img3 foto" src={img3} alt="image 3" /> */}
			</div>
		</div>
	)
}