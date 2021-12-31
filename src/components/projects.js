import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Background from '../Images/realtorApp.png'


class Projects extends Component {
  

 
  render() {
    return(
      <div className='projects-background'>
          <Grid style={{paddingTop:'40px',paddingLeft:'2px'}}>
            
            <Cell col={6}>
              {/* Project 3 */}
          <Card  shadow={8} style={{minWidth: '450', margin: 'auto',opacity:'.8',backgroundImage: `url(${Background})`,}}>
            <CardTitle style={{color: 'white', height: '200px'}} >Realtor Application</CardTitle>
            <CardActions border>
              <Button colored style={{color:'red'}} onClick={() =>{
                    window.location.href = "https://github.com/johnbatista1223/realtor-app";
              }}>GitHub</Button>
              <Button colored style={{color:'red'}} onClick={() =>{
               window.location.href = "https://homepage-realtor-app.herokuapp.com/"; 
              }}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: 'white'}}>
            </CardMenu>
          </Card>
            </Cell>
            <Cell col={14}>
              {/* Project 3 */}
          <Card shadow={8} style={{minWidth: '450', margin: 'auto',opacity:'.8',backgroundColor: 'rgb(29, 28, 28)'}}>
            <CardTitle style={{color: 'white', height: '200px'}} >React Project #3</CardTitle>
           
            <CardActions border>
              <Button colored style={{color:'red'}}>GitHub</Button>
              <Button colored style={{color:'red'}}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: 'white'}}>
            </CardMenu>
          </Card>
            </Cell>
            <Cell col={6}>
          <Card shadow={8} style={{minWidth: '450', margin: 'auto',opacity:'.8',backgroundColor: 'rgb(29, 28, 28)'}}>
            <CardTitle style={{color: 'white', height: '200px'}} >React Project #4</CardTitle>         
            <CardActions border>
              <Button colored style={{color:'red'}}>GitHub</Button>
              <Button colored style={{color:'red'}}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: 'white'}}>
            </CardMenu>
          </Card>
            </Cell>
             <Cell col={14}>
          <Card shadow={8} style={{minWidth: '450', margin: 'auto',opacity:'.8',backgroundColor: 'rgb(29, 28, 28)'}}>
            <CardTitle style={{color: 'white', height: '200px'}} >React Project #5</CardTitle>
            <CardActions border>
              <Button colored style={{color:'red'}}>GitHub</Button>
              <Button colored style={{color:'red'}}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: 'white'}}>
            </CardMenu>
          </Card>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
