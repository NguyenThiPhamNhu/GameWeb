import React, { Component } from 'react';
// import './Profile.css';
import { Link } from 'react-router-dom';
// import UpdateInfo from './UpdateInfo';

class Admin extends Component {
    constructor(props) {
        super(props);
        let user_id = localStorage.getItem("user_id");
        this.state = {
            user: []
        }
        this.getUser(user_id);
    }

    getUser(id) {
        fetch('http://127.0.0.1:8000/api/profile', {
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
            <div className="showAvatar">

                <div >
                    &nbsp;&nbsp;&nbsp;
                    <img className="Avatar" src={'http://127.0.0.1:8000/storage/' + this.state.user.image} alt="" width="400px" height="400px" />
                </div>
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <div className="info">
                    <h1>Chào :{this.state.user.name}</h1>
                    <p>Tên đăng nhập là: </p>
                    <h4>{this.state.user.name}</h4>
                    <p>Email ni đúng không: </p>
                    <h5>{this.state.user.email}</h5>

                    <h4>{this.state.user.name} muốn sửa gì không hè ?</h4>
                    <button className="editbut"><Link to={"/update/" + this.state.user.id} exact >Cập nhật</Link></button>

                    <h2>Theo đuổi đam mê nhưng vẫn có tiền</h2>
                    <div className="show">


                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                    <div>
                            <p>Tư duy của streamer không chăm chăm vào việc mỗi tháng kiếm được bao nhiêu tiền.
                            Thay vào đó, trước hết họ nỗ lực theo đuổi đam mê của mình, có chỗ đứng nhất định để được nhiều người quan tâm theo dõi.
                            Từ đó, họ làm ra tiền từ đam mê của mình.
                        </p>
                            <p> Nghề streamer không hề đơn giản như bạn nghĩ.
                            Nếu bạn chỉ quan tâm tới số tiền mình sẽ kiếm được thì bạn rất dễ nản chí, từ bỏ trong giai đoạn mới bắt đầu.
                            Chỉ có đam mê mới có thể khơi dậy tính sáng tạo, kiên trì và sự bền bỉ trong công việc của bạn.
                        </p>
                            
                        </div>
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                    <div>
                            <img className="DetailImage" src="https://cdn.oneesports.gg/wp-content/uploads/sites/4/2020/06/twitch-streamer-summit1g.jpg" alt="" />
                        </div>

                    </div>
                </div>

            </div>

        )
    }
}
export default Admin;