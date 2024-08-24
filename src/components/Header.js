// components/Header.js
import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Image src="/images/header-image.png" alt="Header Image" width={100} height={100} />
            <h1>Conversor de Números entre Bases</h1>
            <p>Convierte números entre diferentes bases: Binario, Octal, Decimal y Hexadecimal.</p>
        </header>
    );
};

export default Header;
