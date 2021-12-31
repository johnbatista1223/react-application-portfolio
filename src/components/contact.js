import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import ProfileImage from '../Images/ProfilePicture.jpg'


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>John batista</h2>
            <img
              src={ProfileImage}
              alt="avatar"
              style={{height: '250px',borderRadius:'20%'}}
               />
             

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton',color:'white'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (609) 289-6244
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton',color:'white'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    Batistaj651@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton',color:'white'}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                   www.linkedin.com/in/john-batista/
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
