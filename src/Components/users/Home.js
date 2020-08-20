
import React, { Component } from 'react';
import './Home.css';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
        this.getData();
    }
    getData() {
        fetch("http://127.0.0.1:8000/api/posts")
            .then(response => {
                response.json().then((data) => {
                    console.log(data);
                    this.updateUI(data);
                });
            });
    }
    updateUI(data) {
        this.setState({
            posts: data
        })
    }
    render() {
        return (
            <div>

                <center><h1>Game Online</h1></center>

                {this.state.posts.map((item) =>
                    <div>


                        <div className="show">

                            &nbsp;&nbsp;&nbsp;  
                            <div class="thumbnail">
                                <img className="Anhapi"
                                    src={"http://127.0.0.1:8000/storage/" + item.image}
                                    alt=""
                                    width={400}
                                    height={400}
                                />

                            </div>
                            &nbsp;&nbsp;&nbsp;

                            <div class="caption">
                                <h1>{item.name}</h1> <p>{item.detail}</p>
                                <p>

                                    <a className="detail" href={"/posts/" + item.id} role="button">Chi Tiet</a>
                                        &nbsp;
                                        <a className="comment" href={"/posts/" + item.id} role="button">Quynh gia</a>
                                </p>
                            </div>
                        </div>
                        



                    </div>



                )}


                <h2>Những điều cần biết về kênh Như Như Official</h2>
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <div className="show">
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                    <div>
                        <img className="Anh" src="https://media.nu.nl/m/laqxn8laan0c_wd1280.jpg/epic-games-gaat-bots-toevoegen-aan-battle-royalespel-fortnite.jpg" alt="" />
                    </div>
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <div>
                        <img className="Anh" src="https://gameworld.vn/wp-content/uploads/2018/07/Game-PC-hay-nh%E1%BA%A5t-hi%E1%BB%87n-nay-Ph%E1%BA%A7n-1-12.jpg" alt="" />
                    </div>
                </div>
                <p>
                    Live-stream hay streaming là tính năng phát sóng trực tiếp thông qua các trang web hoặc mạng xã hội (Twitter, Facebook, Youtube…).
                    Chỉ cần bạn ngồi trước webcam hoặc camera điện thoại, bật chế độ phát sóng trực tiếp là bạn đã trở thành một streamer.
                    Tuy nhiên, để trở thành một nghề nghiệp thì đòi hỏi bạn phải có khả năng thu hút nhiều người xem bản phát sóng trực tiếp của bạn và kiếm ra tiền từ đó.
                </p>


                <h2>Như Như Official là ai, tại sao giới trẻ lại chú ý?</h2>
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
                        <p>
                            Live-stream hay vloger là tính năng phát sóng trực tiếp thông qua các trang web hoặc mạng xã hội (Twitter, Facebook, Youtube…).
                            Chỉ cần bạn ngồi trước webcam hoặc camera điện thoại, bật chế độ phát sóng trực tiếp là bạn đã trở thành một streamer.
                            Tuy nhiên, để trở thành một nghề nghiệp thì đòi hỏi bạn phải có khả năng thu hút nhiều người xem bản phát sóng trực tiếp của bạn và kiếm ra tiền từ đó.
                            Bạn có thể tham khảo Youtuber Như Như Official để tham khảo cách bạn ấy nói chuyện và eddit các video gờ lip chuyên nghiệp nhất.
                        </p>
                    </div>

                </div>

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
                        <p>
                            Như Như Official là một kênh Youtube nổi tiếng và được các bạn trẻ hiện nay yêu thích và thu hút một trào lưu Vlog lớn bởi cô.
                            Đây là một kênh Youtube chuyên nghiệp về chia sẻ những kinh nghiệm và cách để kinh doanh online và thể hiện những tài năng của Bạn
                            thông qua những video cover những ca khúc hit hot trên thị trường âm nhạc Việt Nam. Đứng Top 1 Youtuber có lượt theo dõi kinh khủng 
                            Bạn có thể tham khảo Youtuber Như Như Official để tham khảo cách bạn ấy nói chuyện và eddit các video gờ lip chuyên nghiệp nhất.
                        </p>
                    </div>
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                    <div>
                        <img className="DetailImage" src="https://cdn.oneesports.gg/wp-content/uploads/sites/4/2020/06/twitch-streamer-summit1g.jpg" alt="" />
                    </div>

                </div>

            </div>
        )
    }
}
export default Home;