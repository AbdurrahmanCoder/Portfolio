import React, { useEffect } from 'react';

import capture from "../../src/photos/Capture.png"
import styles from '../styling/Project.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import Website from '../../src/photos/Website Maintenance.gif'

import { css, github, html, javascript, php, git, jquery, symfony, react } from '../Component/data.js';
import SkillData from '../Component/data.js'
import '../Component/data.js'
import marvelApp from '../../src/photos/marvelApp.png'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
const Project = () => {

	const datas = {};
	SkillData.map((data) => {
		datas[data.id] = { src: data.src, text: data.text };
		console.log(datas[data.id].src);
	});

	///tededde
	useEffect(() => {
		const desktopContentSections = document.querySelectorAll('.desktopContentSection:not(:first-child)');
		const desktopPhotos = document.querySelectorAll('.desktopPhoto:not(:first-child)');
		const allPhotos = document.querySelectorAll('.desktopPhoto');
		gsap.set(desktopPhotos, { yPercent: 101 });
		desktopContentSections.forEach((section, index) => {
			let animation = gsap.timeline()
				.to(desktopPhotos[index], { yPercent: 0, opacity: 1, scale: 1, stagger: 1 })
				.set(allPhotos[index], { autoAlpha: 0 });

			ScrollTrigger.create({
				trigger: section,
				start: 'top 80%',
				end: 'top 50%',

				// start: 'top 40%',
				// end: 'top 20%',
				animation: animation,
				scrub: true,
				markers: false,
			});
		});

		ScrollTrigger.create({
			trigger: '.gallery',
			start: 'top top',
			end: 'bottom bottom',
			pin: '.right',
		});

		return () => {

			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			// console.log('mobile');
		};
	}, []);

	// to dlelte 
	return (
		<>

			<div className='PortfolioCenterDiv'>

				<h1 className='PortfolioHead'> PORTFOLIO </h1>

			</div>



			<div className="gallery" id='Projet'>

				<div className="left">
					<div className="desktopContent">
						<div className="desktopContentSection">
							<h1>Car Rental</h1>
							<p>Service de location de véhicules rapide</p>
							<div className='LangueUtlise'>
								<img src={html} alt="" />
								<img src={css} alt="" />
								<img src={javascript} alt="" />
								<img src={php} alt="" />
								{/* <p>#html </p>
									<p>#css </p>
									<p>#javascript </p>
									<p>#php </p> */}

							</div>


						</div>
						<div className="desktopContentSection">
							<h1>MarvelApp</h1>
							<p>Marvel App pour rechercher personnage et comics</p>
							<div className='LangueUtlise'>
								<img src={html} alt="" />
								<img src={css} alt="" />
								<img src={react} alt="" />
							</div>		</div>

						<div className="desktopContentSection">
							<h1>site en construction </h1>
							<p>Lorem ipsum dolor sit.</p>
							<div className='LangueUtlise'>
								{/* <img src={html} alt="" />
								<img src={css} alt="" /> */}

							</div>		</div>
						<div className="desktopContentSection">
							<h1>site en construction</h1>
							<p>Lorem ipsum dolor sit.</p>
							<div className='LangueUtlise'>
								{/* <img src={html} alt="" />
								<img src={css} alt="" /> */}

							</div>			</div>
					</div>
				</div>

				<div className="right">

					<div className="mobileContent">
						<div className="mobilePhoto red">
							<img src={capture} alt="" /></div>
						<h1> car rental	</h1>
						<p>Lorem ipsum dolor sit.</p>
						<div className="mobilePhoto green"><img src={marvelApp} alt="" /></div>
						<h1>MarvelApp</h1>
						<p>Lorem ipsum dolor sit.</p>
						<div className="mobilePhoto pink"><img src={Website} alt="" /></div>
						<h1>site en construction</h1>
						<p>Lorem ipsum dolor sit.</p>
						<div className="mobilePhoto blue">
							 <img src={Website} alt="" />  </div> 
						<h1>site en construction </h1>
						<p>Lorem ipsum dolor sit.</p>		</div>




					<div className="desktopPhotos">
						<div className="desktopPhoto red imgaz1"     >
							<img src={capture} alt="" />
							<div id="spin" className="button">
								<a href='https://github.com/AbdurrahmanCoder/CarProject' target="_blank"> 		<FaGithub id='icons' /> 	GITHUB</a>
								<a href='https://carrentalprojectphp.000webhostapp.com' target="_blank" > <MdOutlineArrowOutward id='icons' /> LIVE</a>
							</div>
						</div>

						<div className="desktopPhoto green imgaz1"><img src={marvelApp} alt="" />
							<div id="spin" className="button">
								<a href='https://github.com/AbdurrahmanCoder/MarvelApp' target="_blank">  <FaGithub id='icons' /> 	GITHUB</a>
								<a href='https://marvelappepic.netlify.app/' target="_blank"> <MdOutlineArrowOutward id='icons' /> LIVE</a>
							</div>
						</div>



						<div className="desktopPhoto pink imgaz1" ><img id='SiteEnContruction' src={Website} alt="" />
							<div id="spin" className="button">
								{/* <a> 		<FaGithub /> 	GITHUB</a>
								<a> <MdOutlineArrowOutward /> LIVE</a> */}
							</div>

						</div>

						<div className="desktopPhoto blue imgaz1" ><img id='SiteEnContruction' src={Website} alt="" />
							<div id="spin" className="button">
								{/* <a> 		<FaGithub /> 	GITHUB</a>
								<a> <MdOutlineArrowOutward /> LIVE</a> */}
							</div>

						</div>
					</div>

				</div>
			</div>


		</>


	);
};
export default Project;
