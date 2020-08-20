import React, { Component } from 'react';

import { withRouter } from 'react-router';

class UpdateInfo extends Component {
    constructor(props) {
        super(props);
        let user_id = localStorage.getItem("user_id");
        this.state = {
            user: []
        }
        this.getUser(user_id);
        // this.changeValue = this.changeValue.bind(this);
        this.Update = this.Update.bind(this);
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
    // changeValue(event) {
    //     this.setState({
    //         user: event.target.value
    //     })
    // }
    Update(event) {
        // event.preventDefault();
        var name = event.target["name"].value;
        var email = event.target["email"].value;
        var image = event.target["image"].value;

    
        var info = {
            name: name,
            email: email,
            image: image,
        }
        var InfoInJson = JSON.stringify(info);
        alert(InfoInJson);

        
        var idLove = this.props.match.params.id;

        fetch("http://127.0.0.1:8000/api/profile/" + idLove, {
            method: "post",
            headers: {
              "Content-Type": "application/json"
            },
            body: InfoInJson
            
        }).then((response) =>{
                if(response.status === 200){
                    return response.json();
                }else{
                    response = null;
                    return response;
                }
            })
            .then((response) => {
                if(response !== null){
                    this.updateUI(response);
                    alert("Update Thành Công");
                }else{
                    alert("Lỗi");
                }  
            });
    }
    render() {
        let user = this.state.user;
        return (
            <div className="Update">
                <form onSubmit={this.Update}>
                    <p>Ten</p>
                    <input type="text" name="name" defaultValue = {user.name} />
                    <p>Email</p>
                    <input type="text" name="email" defaultValue = {user.email} />
                    <p>Avartar</p>
                    <p> 
                        <label for="inputAddress">Ảnh</label>
                        <input type="file" class="form-control" id="myAddress" name="image" />
                        {/* <button className="btn btn-success " onClick={this.onAddClicked} type="submit">Add</button> */}
                    </p>

                    <p>
                        <input type="submit" name="" value="Thay đổi" />
                    </p>
                </form>
            </div>
        )
    }
}
export default withRouter(UpdateInfo);