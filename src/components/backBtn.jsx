import React from 'react';
import styles from "../pages/styles.module.scss";
import backBtn from "../assets/images/arrow_left_icon.svg";
import {useNavigate} from "react-router-dom";

function BackBtn(props) {
    const navigate = useNavigate()
    const path = props.path || '/main';
    const handleClickBackBtn = () => {
        return navigate(path)
    }
    return (
        <div className={styles.back_btn}>
            <img src={backBtn} alt="backBtn" onClick={handleClickBackBtn}/>
        </div>
    );
}

export default BackBtn;