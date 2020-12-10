import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class RestaurantList extends Component {
    constructor() {
        super();
        this.state = { list: null }
    }
    // componentDidMount() {
    //     fetch("http://localhost:3000/restaurant").then((response) => {
    //         response.json().then((result) => {
    //             // console.warn(result)
    //             this.setState({ list: result })
    //         })
    //     })
    // }
    componentDidMount(){
        this.getData()
    }
    getData(){
        fetch("http://localhost:3000/restaurant").then((response) => {
            response.json().then((result) => {
                // console.warn(result)
                this.setState({ list: result })
            })
        })
    }
    delete(id){
        fetch("http://localhost:3000/restaurant/"+id,{
            method:"DELETE",
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurant has been deleted")
                this.getData()
            })
        })
        // alert("delete");
    }
    render() {
        console.warn(this.state)
        return (
            <div>
                <h1>Restaurant List</h1>
                {
                    this.state.list ?
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
                                    this.state.list.map((item, i) =>
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
                        </div>
                        : <p>Please wait...</p>
                }
            </div>
        )
    }
}
export default RestaurantList;