import React from 'react';
import styles from './header.module.scss'
import {Link} from "react-router-dom";
function Header(props) {
    return (
        <header className='container'>
            <div className={styles.header}>
                <Link to={'/main'}>
                    Квизум
                </Link>
            </div>
        </header>
    );
}

export default Header;