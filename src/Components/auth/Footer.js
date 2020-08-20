import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="banquyen">
                    <h2>VIT PRO</h2>
                    <div>
                        Vit Pro Enterntainment 2020!&nbsp;
                        Một trong những trang web cập nhật tin tức âm nhạc hàng đầu thế giới.&nbsp; 
                        Cập nhật chính xác kịp thời luôn là phương châm của tập đoàn cúng tôi.&nbsp;
                    </div>
                </div>
                <div className="chungtoi">
                    <h2>THÔNG TIN LIÊN HỆ</h2>
                    <div>
                    <img className="icon" alt="slide" src="https://www.canadianginsengfarm.com/wp-content/uploads/2018/03/Brand-Icon.png" />
                        Chi nhánh: 101B Lê Hữu Trác Sơn Trà Đà Nẵng 
                    <p>
                    <img className="icon" alt="slide" src="https://pbs.twimg.com/media/EVBTmd2UEAAedv6.png" />
                        Liên hệ: (+84) 962 973 782 
                    </p>
                    <p>
                    <img className="icon" alt="slide" src="https://images.vexels.com/media/users/3/140137/isolated/preview/d5ce03b9b26818e8020ad0972de98baa-email-round-icon-by-vexels.png" />
                        Email: vitpro@gmail.com 
                    </p>
                    </div>
                </div>
                <div className="xemthem">
                    <h2>KẾT NỐI</h2>
                    
                    <img className="icon" alt="slide" src="https://brasol.vn/public/ckeditor/uploads/tin-tuc/brasol.vn-logo-zalo-vector-logo-zalo-vector.png" />
                        Zalo: VITPRO 
                    <p>
                    <img className="icon" alt="slide" src="https://upload.wikimedia.org/wikipedia/commons/5/58/Instagram-Icon.png" />
                        Instagram: vitem.2000
                    </p>
                    <p>
                    <img className="icon" alt="slide" src="https://images.vexels.com/media/users/3/140137/isolated/preview/d5ce03b9b26818e8020ad0972de98baa-email-round-icon-by-vexels.png" />
                        Email: vitpro@gmail.com 
                    </p>
                    
                </div>
            </div>
        )
    }
}
export default Footer;