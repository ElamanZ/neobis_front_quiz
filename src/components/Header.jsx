import React from 'react';
import styles from './header.module.scss'
function Header(props) {
    return (
        <header className='container'>
            <div className={styles.header}>
                Квизум
            </div>
        </header>
    );
}

export default Header;