import React from 'react'
import '../styling/skill.css'

import SkillData from '../Component/data.js'


const Skills = () => {
 
    return (
        <div className='Skills_Hero ' id='Skills' >

            <div className="container">
                <div className='PortfolioCenterDiv'>
                    <h1 className='SkillsHead'>  Skills</h1>
                </div>


                <div className='skills-list'>


                    {/* <a href="https://soliditylang.org/" target="_blank" rel="noreferrer">
                        <div class="skill">
                            <img src={html} alt="Skill logo image" />
                        </div>
                        <p>HTML</p>
                    </a> */}

{SkillData.map((skill) => (
        <a
          key={skill.id}
          href={skill.href}
          target="_blank"
          rel="noreferrer"
        >
          <div className="skill">
            <img src={skill.src} alt={skill.alt} />
          </div>
          <p>{skill.text}</p>
        </a>
      ))}


                </div>

            </div>

        </div>
    )

}

export default Skills;

// <img src={html} alt="ssss" className='img_skills' /> 
// <img  src={css} alt="ssss" className='img_skills' /> 
// <img  src={javascript} alt="ssss" className='img_skills' /> 
// <img  src={react} alt="ssss" className='img_skills' /> 
// <img  src={github} alt="ssss" className='img_skills' />  