import React from 'react';
import styles from "./List.module.css";
import cn from "classnames";

const List = ({image,name}) => {
    return (
        <div className={cn(styles.container, styles.className )}>
            <div className={styles.item}>
               <span className={styles.image}> {image} </span>
               <p className={styles.name}> {name} </p>
            </div>
        </div>
    )
}

export default List
