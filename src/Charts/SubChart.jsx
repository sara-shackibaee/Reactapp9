// import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { DataGrid } from '@material-ui/data-grid';

// import Grid from '@material-ui/core/Grid';
// import  CardData from './CardData'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {CardData }  from './CardData'
import { Drawer } from '@material-ui/core';
import Container from 'react-bootstrap/Container';
import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Row from 'react-bootstrap/Row';
const useStyles = makeStyles({
    root: {
      maxWidth: 700,
      margin:7,
      width:250,
      height:150,
      
    },
  });
  
  export default function SubChart() {
    const classes = useStyles();
    return (
        <div>
            
            <Container>
                <Row >
                     {CardData.map((item)=>{return(


                    <Card className={classes.root}>
                        <Avatar>W</Avatar>

                        <CardActionArea>
                            
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {item.des}
                                </Typography>
                                <Drawer></Drawer>
                            </CardContent>
                        </CardActionArea>
 
                    </Card>



                    )})}
                </Row>
            </Container>

                    

                



        </div>
    )
}






