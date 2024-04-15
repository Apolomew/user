import React from "react";
import "./topnav.css";
import Dropdown from "../dropdown/Dropdown";
import notifications from '../../assets/JsonData/notification.json';
import { Link } from "react-router-dom";
import user_image from '../../assets/images/buiduc.jpg'
import user_menu from '../../assets/JsonData/user_menus.json'

const curr_user = {
    display_name: 'Bui duc',
    image: user_image
}

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu =(item, index) => (
    <Link to='/' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)
const TopNav = () => {
  return (
    <div className='topnav'>
    <div className="topnav__search">
        <input type="text" placeholder='Search here...' />
        <i className='bx bx-search'></i>
    </div>
    <div className="topnav__right">
        <div className="topnav__right-item">
            {/* dropdown here */}
            <Dropdown
                customToggle={() => renderUserToggle(curr_user)}
                contentData={user_menu}
                renderItems={(item, index) => renderUserMenu(item, index)}
            />
        </div>
        <div className="topnav__right-item">
            <Dropdown
                icon='bx bx-bell'
                badge='12'
                contentData={notifications}
                renderItems={(item, index) => renderNotificationItem(item, index)}
                renderFooter={() => <Link to='/'>View All</Link>}
            />
            {/* dropdown here */}
        </div>
    </div>
</div>
  );
};

export default TopNav;
