import React, { Component } from 'react'

class RestaurantUpdate extends Component {
    constructor(){
        super();
        this.state={name:null,address:null,email:null,rating:null,id:null}
        console.log("constructor")
    }

    componentDidMount(){
        console.log("componentdidmount")
        fetch("http://localhost:3000/restaurant/"+this.props.match.params.id).then((response) => {
            response.json().then((result) => {
                console.warn(result)
                this.setState({
                    name:result.name,
                    address:result.address,
                    email:result.email,
                    rating:result.rating,
                    id:result.id
                })
            })
        })
    }
    update(){
        console.log("update")
        fetch("http://localhost:3000/restaurant/"+this.state.id,{
            method:"put",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurant has been updated")
            })
        })
    }
    render() {
        console.log("render")
        // console.warn(this.props.match.params.id)
        // console.warn(this.state)

        return (
            <div>
                <h1>RestaurantUpdate</h1>
                <div>
                    <input onChange={(event)=>{this.setState({name:event.target.value})}}
                     placeholder="Restaurant Name" value={this.state.name}/><br></br><br></br>
                     <input onChange={(event)=>{this.setState({address:event.target.value})}}
                     placeholder="Restaurant Address" value={this.state.address}/><br></br><br></br>
                     <input onChange={(event)=>{this.setState({rating:event.target.value})}}
                     placeholder="Restaurant Rating" value={this.state.rating}/><br></br><br></br>
                     <input onChange={(event)=>{this.setState({email:event.target.value})}}
                     placeholder="Restaurant email" value={this.state.email}/><br></br><br></br>
                     <button onClick={()=>{this.update()}}>Upadate Restaurant</button>
                </div>
            </div>
        )
    }
}

export default RestaurantUpdate;
