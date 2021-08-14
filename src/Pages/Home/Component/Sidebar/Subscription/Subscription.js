import React from 'react';
import {Avatar} from "@material-ui/core";
import styles from "./Subscription.module.css";


export const Subscription = ({image,name,dot}) => {
    return (
        <div className={styles.container}>
            <Avatar src={image} className={styles.avatar} />
            <p>{name}</p>
            <p className={styles.dot}> {dot} </p>
        </div> 
    )
}

// export default Subcription 
