


import React, { Component } from 'react'
import {Line}  from 'react-chartjs-2'



export default class LineChart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             chartdata:{
                lables:['Jan','Feb','Mar','Apr','May'],
                datasets:[
                    {
                        lable:'sales for 2020',
                        data:[3,4,4,1,5],
                        borderColor:['rgba(255,206,86,0.2)'],
                        backgroundColor:['rgba(255,206,86,0.2)'],
                        pointBackgroundColor:['rgba(255,206,86,0.2)'],
                        pointBorderColor:['rgba(255,206,86,0.2)']
            
                    }
                ]
             }
            }}
    
  render() {
    return (
      <div >

          
                    <Line
                        data={this.state.chartdata}
                        
                    />
                    
      </div>
    )
  }
}
