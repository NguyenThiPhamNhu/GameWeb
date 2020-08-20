import React, { Component } from 'react';
import './Profile.css';
import {Link } from 'react-router-dom';
// import UpdateInfo from './UpdateInfo';

class Profile extends Component {
    constructor(props) {
        super(props);
        let user_id = localStorage.getItem("user_id");
        this.state = {
            user: []
        }
        this.getUser(user_id);
    }

    getUser(id) {
        fetch('http://127.0.0.1:8000/api/profile/', {
            method: "get",
            headers: {
                "Authorization": id
            },
        })
            .then(response => {
                response.json().then((data) => {
                    this.updateUI(data);
                });
            }); 
    }
    updateUI(data) {
        this.setState({
            user: data.user
        })
    }

    render() {
        return (
            <div className="text">
                <div className="imgs">
                    <img src={'http://127.0.0.1:8000' + this.state.user.image} alt="" width="400px" height="400px" />
                </div>
                <div className="info">
                    <h1>Xin chào {this.state.user.name}</h1>
                    {/* <p top={200}>ID: {this.state.user.id}</p> */}
                    {/* <p>username: {this.state.user.username}</p> */}
                    <p>Name: {this.state.user.name}</p>
                    <p>Email: {this.state.user.email}</p>
                    <p>Password: {this.state.user.password}</p>
                    
                    <button><Link to={"/update/" + this.state.user.id} exact >Edit</Link></button>
                    
                </div>
            </div>
        )
    }
}
export default Profile;