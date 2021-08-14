import React from 'react';
import styles from "./Header.module.css";
import{
    Menu,
    Search,
    Mic,
    VideoCall,
    Apps,
    Notifications,
} from "@material-ui/icons"
import {IconButton , Avatar} from "@material-ui/core"
import { useSelector } from 'react-redux';

const Header = () => {
    const user= useSelector(state=> state.user)
    return (
        <div className={styles.container}>
        <div className={styles.header_left}>
            <Menu/>
            <img className={styles.logo}
              src="https://www.logo.wine/a/logo/YouTube/YouTube-White-Full-Color-Dark-Background-Logo.wine.svg"
              alt="logo" />
        </div>
        <div className={styles.center}>
            <div className={styles.search}>
              <input type="text" placeholder="Search" />
                 <IconButton>
                 <Search className={styles.search_bar} />  
                 </IconButton>
            </div>
              <Mic/>
        </div>
          <div className={styles.right}>
                <VideoCall/> 
                <Apps/>  
                <Notifications/>  
              <Avatar
               src={user.photoURL}              
              className={styles.avatar} > </Avatar>
          </div>
        </div>
    )
}

export default Header
