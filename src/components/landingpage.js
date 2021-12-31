import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProfileImage from '../Images/ProfilePicture.jpg'


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={ProfileImage}
              alt="avatar"
              className="avatar-img"
              style={{borderRadius:'29%'}}
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express | MongoDB | AWS</p>

        <div className="social-links">

          <a href="https://github.com/johnbatista1223" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/john-batista/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          <a href="https://www.instagram.com/johnnybatista/" rel="noopener noreferrer" target="_blank">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
