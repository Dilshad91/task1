import React, { Component } from 'react'

class RestaurantCreate extends Component {
    constructor(){
        super();
        this.state={name:null,address:null,email:null,rating:null}
        console.log("constructor")
    }
    create(){
        console.log("create")
        fetch("http://localhost:3000/restaurant",{
            method:"post",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurant has been added")
            })
        })
        
    }
    render() {
        console.log("render")
        return (
            <div>
                <h1>RestaurantCreate</h1>
                <div>
                    <input onChange={(event)=>{this.setState({name:event.target.value})}}
                     placeholder="Restaurant Name"/><br></br><br></br>
                     <input onChange={(event)=>{this.setState({address:event.target.value})}}
                     placeholder="Restaurant Address"/><br></br><br></br>
                     <input onChange={(event)=>{this.setState({rating:event.target.value})}}
                     placeholder="Restaurant Rating"/><br></br><br></br>
                     <input onChange={(event)=>{this.setState({email:event.target.value})}}
                     placeholder="Restaurant email"/><br></br><br></br>
                     <button onClick={()=>{this.create()}}>Add Restaurant</button>
                </div>
            </div>
        )
    }
}

export default RestaurantCreate;
