import React from 'react'
import Typography from '@material-ui/core/Typography';
import SubChart from './SubChart'
import  CardData from './CardData'
import BarChart from './BarChart'
import LineChart from './LineChart'
import PieChart from './PieChart'
import { Grid, Image } from 'semantic-ui-react'
import Embedui from '../embed/Embedui'
import CreateSearchbox  from '../Searchbox/CreateSearchbox'






const ChartShow = () => (

    <React.Fragment>
        <Grid  >
        <Grid.Row> <CreateSearchbox /></Grid.Row> 
        <br></br>
        <Grid.Row> <SubChart /></Grid.Row> 
        </Grid>
        <Grid columns={3} divided >
    <Grid.Row>
        
        <Grid.Column  >
                <LineChart/>
        </Grid.Column>

        <Grid.Column>
                <BarChart/>
        </Grid.Column>

        <Grid.Column>
                <PieChart/> 
        </Grid.Column>
        
    </Grid.Row>

    
    
   
    
    
  </Grid>
    </React.Fragment>
  
)

export default ChartShow