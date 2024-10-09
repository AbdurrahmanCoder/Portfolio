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


             
{SkillData.map((skill) => (
        
          <div className="skill">
            <img src={skill.src} alt={skill.alt} />
          </div>
          <p>{skill.text}</p>
       ))}


                </div>

            </div>

        </div>
    )

}

export default Skills;

