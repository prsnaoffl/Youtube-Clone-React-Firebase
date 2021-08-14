import React from 'react';
import styles from "./Catagories.module.css";
import {Avatar} from "@material-ui/core";
import {FiberManualRecord} from '@material-ui/icons'

const Catagories = ({image,time,avatar,name,channelName,views,duration}) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.main}
                     src={image}
                     alt="img" />
                <p className={styles.time}>{time}</p>     
            </div>

            <div className={styles.firstLine}>
                <Avatar src={avatar} />
                <p>{name}</p>
            </div>

            <div className={styles.date}>
                <p>{channelName}</p>
            <div className={styles.lastLine}>    
                <p>{views}</p>
        <p>{<FiberManualRecord className={styles.dot} ></FiberManualRecord>}</p>
                <p className={styles.lastChild}>{duration}</p>
            </div>
            </div>
        </div>
    )
}

export default Catagories
