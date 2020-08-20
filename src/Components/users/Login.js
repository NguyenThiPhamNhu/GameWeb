import React, { Component } from 'react';
//import { withRouter } from 'react-router';
import './Login.css';
import { withRouter } from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        this.onLoginSubmit = this.onLoginSubmit.bind(this);

    }


    onLoginSubmit(event) {
        event.preventDefault();

        let name = event.target["name"].value;
        let password = event.target["password"].value;

        let user = {
            name: name,
            password: password,
        };

        let userInJson = JSON.stringify(user);

        fetch("http://127.0.0.1:8000/api/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: userInJson,
        })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                this.props.history.push("/");
                localStorage.setItem("user_id", response.user_id);
                //window.location.reload();
            });
    }



    render() {
        return (
            <div className="form-login">
                &ensp;&nbsp;&nbsp;&ensp;&ensp;&ensp;&nbsp;&nbsp;&ensp;&ensp;
                &ensp;&nbsp;&nbsp;&ensp;&ensp;&ensp;&nbsp;&nbsp;&ensp;&ensp;
                &ensp;&nbsp;&nbsp;&ensp;&ensp;&ensp;&nbsp;&nbsp;&ensp;&ensp;
                &ensp;&nbsp;&nbsp;&ensp;&ensp;&ensp;&nbsp;&nbsp;&ensp;&ensp;
                <b><a href="#">Dang Nhap</a></b>
                <form onSubmit={this.onLoginSubmit} >
                    <label for="fname">Tên</label>
                    &ensp;&nbsp;&nbsp; &ensp;&nbsp;&nbsp;&ensp;&ensp;
                        <input type="text" id="fname" name="name" className="input-login" placeholder="name.." /> <br /><br />

                    <label for="password">Mật Khấu</label>&nbsp;&ensp;
                        <input type="password" id="password" name="password" className="input-login" placeholder="password.." /><br /><br />
                        &ensp;&nbsp;&nbsp;&ensp;&ensp;&ensp;&nbsp;&nbsp;&ensp;&ensp;
                        &ensp;
                    <a href="#">Forgot your password?</a><br /><br />
                    <div class="form-group">
                        &nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;&nbsp;&ensp;&ensp;&nbsp;&ensp;&ensp;&nbsp;&ensp;
                            <input type="submit" value="Login" />
                    </div><br />
                </form>
            </div>
        )
    }
}
export default withRouter(Login);