// components/Layout.js
import React from 'react';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>Columna Lateral Izquierda</div>
            <div className={styles.mainContent}>{children}</div>
            <div className={styles.sidebar}>Columna Lateral Derecha</div>
        </div>
    );
};

export default Layout;
