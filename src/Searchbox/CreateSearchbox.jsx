import React, { Component } from 'react'
import axios from 'axios';
import Loadericon from '../Searchbox/Loadericon'
import '../Components/CSS/Searchbox.css'
import {
    Link
  } from "react-router-dom";
  
// import  Searchresult from '../Searchbox/Searchresult'
const Api_url = 'https://jsonplaceholder.typicode.com/todos/'
export default class CreateSearchbox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            query: '',
            results:[],
            loading:false
        }
        this.myRef = React.createRef();
    }

    handleInputChange =()=>{
        console.log(this.myRef.current.value)
        // console.log(this.myRef.current.value)
        this.setState({query:this.myRef.current.value,loading:true},()=>{
            if(this.state.query){this.getinformation()}
            else{this.setState({results:'',loading:false})}
        })
        
        
        

    }
    getinformation =()=>{

        // console.log(this.state.query)
        axios.get(`${Api_url}/${this.state.query}`).then((res)=>{this.setState({results:res.data,loading:false})})


    }
    
    render() {
        return (
            <div>
                <form >
                    <div class="input-container">
                        <input class="input-field"  
                                placeholder="enter a number...."
                                ref={this.myRef }
                                onChange={this.handleInputChange}
                                />
                                <i className="fa fa-search search-icon"   /> 
                                
                    </div>
                                {this.state.loading?<Loadericon/>:false}
                        

                </form>
                
            <div>
                   
                                <p style={{backgroundColor:'white'}}><Link>{this.state.results.title}</Link></p>
                    
            </div>
            </div>
        )
    }
}
