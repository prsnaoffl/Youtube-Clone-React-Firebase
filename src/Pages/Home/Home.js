import React from 'react'
import styles from "./Home.module.css";
import Sidebar from "./Component/Sidebar/Sidebar";
import Header from "./Component/Header/Header";
import Body from "./Component/Body/Body";
import Login from "../Login/Login";
import { useSelector } from 'react-redux';


const Home = () => {
   const user = useSelector((state)=> state.user)

    return (
        <div>
            {!user ?(
                <Login />
            //    <p> login it</p>
                ):( 
                  <div className={styles.main}>
                      <Header/> 
                      
                    <div clasName={styles.side_bar}> 
                       <Sidebar/>
                   </div>      
                   <div className={styles.body}>
                       <Body/>
                    </div>   

                  </div>    
                )}
            
        </div>
    )
}

export default Home
