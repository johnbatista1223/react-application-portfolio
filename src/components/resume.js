import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import JohnsPicture from '../Images/ProfilePicture.jpg'


class Resume extends Component {
  render() {
    return(
      <div className='resume-background'>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={JohnsPicture}
                alt="avatar"
                style={{height: '400px',width:'300px',borderRadius:'30%', opacity:'0.9'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em',color:'white',fontSize:'40px'}}>John Batista</h2>
            <h4 style={{color: 'rgb(184, 181, 181)',fontSize:'35px'}}>Full Stack Developer</h4>
            <hr style={{borderTop: '3px solid white', width: '50%',}}/>
            <p style={{color:'white',fontSize:'18px'}}>Im John Batista i graduated from Penn LPS Coding Boot Camp in august of 2020 to start off my devloper career. I found  a job with an amazing company RediMinds Inc ,the team is filled with great people who love what they do, i have experience in react , mongoDb , html, css, NodeJS ,express, git , javascript, postGres, and a little of Aws. Im always up for learning more !! </p>
            <hr style={{borderTop: '3px solid white', width: '50%'}}/>
            <h5 style={{color:'white',fontSize:'35px'}}>Phone</h5>
            <p style={{color:'white',fontSize:'25px'}}>(609) 289-6244</p>
            <h5 style={{color:'white',fontSize:'35px'}}>Email</h5>
            <p style={{color:'white',fontSize:'25px'}}> Batistaj651@gmail.com</p>
            <hr style={{borderTop: '3px solid white', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Penn LPS Coding Boot Camp"
              schoolDescription="Web development is a fast-growing career track, and the Penn LPS Coding Boot Camp teaches you the specialized skills you need to tap into this rewarding industry. Through a fast-paced, immersive curriculum, you’ll learn the full stack of skills needed to become proficient in front end and back end technologies, programming languages, and frameworks."
               />
                <hr style={{borderTop: '3px solid white'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2020}
              jobName="Full Stack Developer @ RediMinds Inc"
              jobDescription=" Collaborating with management, departments and customers to identify end-user requirements and specifications, Troubleshooting, debugging, maintaining and improving existing code ,Producing efficient and elegant code based on requirements"
              />
              <hr style={{borderTop: '3px solid white'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={70}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="MongoDB"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={80}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
