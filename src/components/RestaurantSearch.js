import React, { Component } from 'react'
import { Table,Form,Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class RestaurantSearch extends Component {
    constructor(){
        super();
        this.state={searchData:null,noData:false,lastsearch:""}
    }
    search(key){
        this.setState({lastsearch:key})
        fetch("http://localhost:3000/restaurant?q="+key).then((data)=>{
            data.json().then((result)=>{
                console.warn(result)
                if(result.length>0){
                    this.setState({searchData:result,noData:false})
                }else{
                    this.setState({noData:true,searchData:null})
                }
                
            })
        })
        // console.warn(key)
    }
    delete(id){
        fetch("http://localhost:3000/restaurant/"+id,{
            method:"DELETE",
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurant has been deleted")
                this.search(this.state.lastsearch)
            })
        })
        // alert("delete");
    }
    render() {
        return (
            <Container>
                <h1>Restaurant Search</h1>
                {/* <input onChange={(event)=>this.search(event.target.value)}/> */}
                <Form.Control onChange={(event)=>this.search(event.target.value)} type="text" placeholder="Search Restaurant" />
                <div>
                    {this.state.searchData?
                    <div>
                        <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>Rating</th>
                                        <th>Email</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                        {
                        this.state.searchData.map((item)=>
                        <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.address}</td>
                                        <td>{item.rating}</td>
                                        <td>{item.email}</td>
                                        <td><Link to={"/Update/"+item.id}>Edit</Link>
                                        <button onClick={()=>this.delete(item.id)}>Delete</button></td>
                                    </tr>)}
                                    </tbody>
                            </Table>
                        )
                    </div>:""
                    }
                    {
                        this.state.noData?<h3>No data found</h3>:null
                    }
                </div>
            </Container>
        )
    }
}
export default RestaurantSearch;
