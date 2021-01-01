

import React, { Component } from 'react'
import {Bar,Line,Pie}  from 'react-chartjs-2'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default class BarChart extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             chartdata:{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [617594, 181045, 153060, 106519, 105162, 95072],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                }]
             }
        }
    }
    
  render() {
    return (
      <div >

        
                    <Bar
                        data={this.state.chartdata}
                       
                        options={{ 
                            title:{
                                display:true,
                                text:'largest city ',
                                fontSize:25
                            },
                            legend:{
                                display:true,
                                position:'right'
                            }
                        }}
                    />
                    
      </div>
    )
  }
}
