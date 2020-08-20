import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: []
        }
        let id = this.props.match.params.id;
        this.getData(id);
    }
    getData(id) {
        fetch("http://127.0.0.1:8000/api/posts/" + id)
            .then(response => {
                response.json().then((data) => {
                    console.log(data);
                    this.updateIU(data);
                })
            })
    }
    updateIU(data) {
        this.setState({
            post: data
        })
    }
    render() {
        return (



            <div >


                <div className="show">
                    {this.state.post.map((item) =>
                        <div className="show">
                            &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;

                            <div class="thumbnail">
                                <input type="text" className="search" placeholder="Search.." />
                                

                                <h3 className="BVMN">Bài Viết Mới Nhất</h3>
                                <hr />
                                <div className="Menu">
                                <p><img
                                    src={"http://127.0.0.1:8000/storage/" + item.image}
                                    alt=""
                                    width={400}
                                    height={400}
                                /><Link className="link" to="/">Trang chủ</Link></p>
                                <hr />
                                <p><img
                                    src={"http://127.0.0.1:8000/storage/" + item.image}
                                    alt=""
                                    width={400}
                                    height={400}
                                /><Link className="link" to="/gioithieu">Giới thiệu</Link></p>
                                <hr />
                                <p><img
                                    src={"http://127.0.0.1:8000/storage/" + item.image}
                                    alt=""
                                    width={400}
                                    height={400}
                                /><Link className="link" to="/gioithieu">Hot Youtuber</Link></p>
                                <hr />
                                <p><img
                                    src={"http://127.0.0.1:8000/storage/" + item.image}
                                    alt=""
                                    width={400}
                                    height={400}
                                /><Link className="link" to="/posts">Game đỉnh kout</Link></p>
                                <hr />
                                <p><img
                                    src={"http://127.0.0.1:8000/storage/" + item.image}
                                    alt=""
                                    width={400}
                                    height={400}
                                /><Link className="link" to="/posts">Streamer có hot?</Link></p>
                                <hr />
                                <p><img
                                    src={"http://127.0.0.1:8000/storage/" + item.image}
                                    alt=""
                                    width={400}
                                    height={400}
                                /><Link className="link" to="/admin">Hồ sơ của bạn</Link></p>
                                <hr />
                                </div>

                            </div>

                                 &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;
                                <div class="thumbnail">
                                <img className="Image" src="https://media.nu.nl/m/laqxn8laan0c_wd1280.jpg/epic-games-gaat-bots-toevoegen-aan-battle-royalespel-fortnite.jpg" alt="" />

                                <h3>{item.name}</h3>
                                <p>
                                    <p>{item.detail}</p>

                                    <p>Game Tập Kích là một trong những game “đón đầu”
                                    trào lưu game FPS Mobile tại Việt Nam.
                                    Khác với Garena mang bối cảnh lịch sử,
                                    Tập Kích mang concept chiến đấu kiểu súng đạn với những loại vũ khí vô cùng hot như Dual Desert Eagle VIII,
                                    Dragon AWP V hay Death Knight…
                                    Các người chơi có thể kiềm tiền từ game online bằng cách tham dự giải đấu chuyên nghiệp VPL
                                        Tập Kích – một trong những giải đấu Mobile eSports lớn nhất tại Việt Nam hiện tại.</p>
                                </p>
                                <p>
                                    <a class="btn btn-success" href="" role="button">Like</a>
                                </p>

                            </div>

                            <div class="caption">
                                <h4>Đăng bởi</h4>
                                <p>Như Anh</p>

                                <h4>Địa chỉ:</h4>
                                <p>Quảng Nam</p>
                                <h4>Comment:</h4>
                                <p>{item.comment}</p>

                            </div>

                        </div>
                    )}
                </div>

                <h2>Những điều cần biết về kênh Như Như Official</h2>
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <div className="show">
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                    <div>
                        <img className="Anh" src="https://media.nu.nl/m/laqxn8laan0c_wd1280.jpg/epic-games-gaat-bots-toevoegen-aan-battle-royalespel-fortnite.jpg" alt="" />
                    </div>
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <div>
                        <img className="Anh" src="https://media.nu.nl/m/laqxn8laan0c_wd1280.jpg/epic-games-gaat-bots-toevoegen-aan-battle-royalespel-fortnite.jpg" alt="" />
                    </div>
                </div>
                <p>
                    Live-stream hay streaming là tính năng phát sóng trực tiếp thông qua các trang web hoặc mạng xã hội (Twitter, Facebook, Youtube…).
                    Chỉ cần bạn ngồi trước webcam hoặc camera điện thoại, bật chế độ phát sóng trực tiếp là bạn đã trở thành một streamer.
                    Tuy nhiên, để trở thành một nghề nghiệp thì đòi hỏi bạn phải có khả năng thu hút nhiều người xem bản phát sóng trực tiếp của bạn và kiếm ra tiền từ đó.
                </p>

                <h2>Như Như Official là ai, tại sao giới trẻ lại có sức hút với giới trẻ?</h2>
                <div className="show">
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                    <div>
                        <img className="DetailImage" src="https://newsmd1fr.keeng.net/tiin/archive/imageslead/351/201811/20181109/thumb00_064603206130955.jpg" alt="" />
                    </div>

                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                    <div>
                        <p>Hiện nay tại Việt Nam đang có các streamer nổi tiếng như Pew Pew, Viruss, Missthy, Xuka, Yuri…
                        Họ vẫn làm việc khoảng 8 tiếng một ngày như những ngành ngh
                        Đó là khoảng thời gian họ ngồi trước máy tính để nghĩ ra những đề tài, soạn lời chia sẻ và thực hiện streaming phục vụ người xem và các fan của họ.
                        </p>
                        <p>Với năng lượng tuổi trẻ đầy nhiệt huyết Như Như với nghệ danh là VIT đã làm nên một hiện tượng trong cộng đồng streamer
                        Một trong những kênh youtube đạt được lượt view kinh khủng khiếp đến khó tin
                        Kênh youtube đầu tiên của Việt Nam lập được cả năm trời mà vẫn chưa đủ 100 views.
                        </p>
                    </div>

                </div>

                <form onSubmit={this.onAddSubmit} method="POST" class="form-inline" role="form">
                    <div class="form-group">

                        <p>
                            <label>Comment</label>
                        </p>
                        <p>
                            <input type="text" name="comment" class="form-control" id="" placeholder="Input coment" />
                        </p>
                        <p> <label>Evaluate</label></p>

                        <p>
                            <input type="text" name="evaluate" class="form-control" id="" placeholder="Input coment" />
                        </p>


                        <p>
                            <button type="submit" class="btn btn-info">Bình luận</button>
                        </p>

                    </div>



                </form>


            </div>
        )
    }
}
export default withRouter(Post);