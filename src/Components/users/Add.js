import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class Add extends Component {
  constructor(props){
    super(props);
    this.onAddClicked = this.onAddClicked.bind(this);
    this.onAddSubmit = this.onAddSubmit.bind(this);
  }
  onAddSubmit(event) {
    event.preventDefault();
    let name = event.target['name'].value;
    let password = event.target['password'].value;
    let email = event.target['email'].value;
    let image = event.target["image"].files.item(0).name;
    
    let post = {
      name: name,
      email:email,
      password: password,
      image: image
      

    }

    let postInJson = JSON.stringify(post);
    console.log(postInJson);

    fetch("http://127.0.0.1:8000/api/posts", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: postInJson
    })
      .then((response) => {
        console.log(response);
        this.props.history.push("/posts"); // chuyển trang
      });
  }
  onAddClicked() {
    alert("Add successful! VIT Vipro !");
  }
  render() {
    return (
      <div>

        <link rel="stylesheet" media="screen" href="//netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />
        <script src="//code.jquery.com/jquery.js"></script>
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>


        <h2>Đăng kí </h2>

        <form onSubmit={this.onAddSubmit} method="POST" class="form-inline" role="form">
          <div class="form-group">
            <label>Tên đăng nhập</label>
            <p>
              <input type="text" class="form-control" name="name" id="" placeholder="Nhập tên đăng nhập" />
            </p>
            <label>Email</label>
            <p>
              <input type="text" class="form-control" name="email" id="" placeholder="Nhập tên đăng nhập" />
            </p>

            <p>
              <label>Mật khẩu</label>
            </p>
            <p>
              <input type="text" name="password" class="form-control" id="" placeholder="Nhập mật khẩu" />
            </p>
          

            <p>
              <label for="inputAddress">Ảnh</label>
              <input type="file" class="form-control" id="myAddress" name="image" />
              {/* <button className="btn btn-success " onClick={this.onAddClicked} type="submit">Add</button> */}
            </p>
            <p>
              <button onClick="onAddClicked" type="submit" class="btn btn-info">Đăng kí</button>
            </p>

          </div>



        </form>


      </div>

    )
  }
}
export default withRouter(Add); 