import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import JohnsFamily from '../Images/batista.jpg'

class About extends Component {
  render() {
    return(
      <div className='about-background'>
        <Grid>
          <Cell col={12}>
            <div style={{textAlign: 'center'}}>
              <img
                src={JohnsFamily}
                alt="avatar"
                style={{height: '400px',width:'300px',borderRadius:'30%', opacity:'0.9'}}
                 />
            </div>

           
            <h2 style={{color: 'rgb(184, 181, 181)',fontSize:'45px', textAlign:'center'}}>About Me</h2>
            <hr style={{borderTop: '3px solid white', width: '100%',}}/>
            <p style={{color:'white',fontSize:'28px',textAlign:'center',lineHeight:'1.6',textIndent:'10px'}}>  Hello !! Im john im a big family person love spending time with my family, i have two children, i live in new jersey,currently working as a full stack devloper for an amazing company called RediMinds Inc. Started my career in programming in 2021 and fell in love with it , also love to learn , natural problem solver , love working with a team ! im also a huge Green bay packers fan !! Go Pack Go! </p>
            <hr style={{borderTop: '3px solid white', width: '100%'}}/>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
