import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Home from './Components/users/Home';
import Posts from './Components/users/Posts';
import AboutUs from './Components/users/AboutUs';
import Footer from './Components/auth/Footer';
import Post from './Components/users/Post'; 
import Add from './Components/users/Add';
import Admin from './Components/users/Admin';
import Login from './Components/users/Login';



import UpdateInfo from './Components/users/UpdateInfo';


class App extends Component {
  render() {
    return (
      <Router>
    
      <div className="app">
        <div className="home">
                
                &emsp; 
                <img alt="slide" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Noun_Project_house_icon_475319_cc.svg/1073px-Noun_Project_house_icon_475319_cc.svg.png" />
                <a href="/gioithieu">101B Le Huu Trac Son Tra Da Nang</a>
                &emsp;
                <img alt="slide" src="https://icons-for-free.com/iconfiles/png/512/contact+mobile+phone+telephone+icon-1320186209312314268.png" />
                <a href="/gioithieu">Call me: 0982514742</a>
                &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; &emsp;
                <img alt="slide" src="https://pngimage.net/wp-content/uploads/2019/05/icone-circular-facebook-png-.png" />
                &emsp; 
                <img alt="slide" src="https://img.icons8.com/all/500/zalo.png" />
                &emsp; 
                <img alt="slide" src="https://popup.noge-printing.jp/rt/wp-content/uploads/2019/03/insticon-1-300x300.png" />
                &emsp; 
                <a href="https://www.youtube.com/channel/UCWvwjfgeuf-BVpCkS-v80aw"><img alt="slide" src="https://icons.iconarchive.com/icons/iconsmind/outline/512/Youtube-icon.png" /></a>

            </div >
          <ul>
           
            <li>
            <img className="logo" alt="slide" src="https://cdn3.iconfinder.com/data/icons/animal-40/128/Animal_Duck_Baby_Chick-512.png" />
            </li>
            <li><Link to="/">Trang chủ</Link></li>
            {/* <li><a href="/gioithieu">GIỚI THIỆU</a></li> */}
            <li><Link to="/gioithieu">Giới thiệu</Link></li>
          
            <li><Link to="/posts">Tin tức</Link></li>
            <li><Link to="/login">Đăng nhập</Link></li>
            <li><Link to="/add">Đăng kí</Link></li>
            <li><Link to="/admin">Hồ Sơ</Link></li>
            
          </ul>
          
        
       
      </div>
      <Switch>
            <Route path="/" exact><Home /> <Footer /></Route>
            <Route path="/gioithieu"> <AboutUs /><Footer /></Route>

            <Route path="/posts" exact>
                  <Posts />
              </Route>

              <Route path={"/posts/:id"}>
                  <Post /><Footer />
              </Route>
            
            <Route path="/add" exact><Add /></Route>
            <Route path="/login"> <Login /></Route>
            <Route path="/admin"> <Admin /><Footer /></Route>
            <Route path="/update/:id"> <UpdateInfo /><Footer /></Route>
            
          </Switch>
      </Router>
    )
  }
}
export default App;