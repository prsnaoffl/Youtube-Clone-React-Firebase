import React from 'react'
import styles from "./Body.module.css";
import Catagories from "./Catagories/Catagories";
import data from "./data.json";
import {Grid} from "@material-ui/core";

const Body = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topList} >
               <p className={styles.all}> All </p>
               <p>Live</p>
               <p>Computer Programming</p>
               <p>Sales</p>
               <p>Gaming</p>
               <p>CSS</p>
               <p>PC buiding</p>
               <p>Motivation</p>
            </div>
            <Grid xs={12} container item justifyContent='center' className={styles.grid}>
                {data.map((item,index)=>{
                    return(
                       <Catagories
                         key={index}
                          name={item.name}
                          channelName={item.channelName}
                          duration={item.duration}
                          image={item.image}
                          avatar={item.avatar}
                          views={item.views}
                          time={item.time} />
                    )
                    })} 
                    </Grid>
        </div>
    )
}

export default Body
