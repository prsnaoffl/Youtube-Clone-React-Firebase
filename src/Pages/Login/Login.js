import React from 'react'
import styles from "./Login.module.css";
import {Button} from "@material-ui/core";
import {useDispatch} from "react-redux";
import { addUser } from "../../Store/Action/User";
import {auth, provider} from "../../firebase/firebase";

const Login = () => {
  const dispatch = useDispatch();

  const signIn=()=>{
      auth
      .signInWithPopup(provider)
      .then((result) =>{
      dispatch(addUser(result.user))
      })
       .catch((err) => console.error(err));
  };

    return (
        <div className={styles.container}>
            <img 
              className={styles.logo}
              src="https://www.logo.wine/a/logo/YouTube/YouTube-White-Full-Color-Dark-Background-Logo.wine.svg"
              alt="logo" />
            <Button className={styles.btn} onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
