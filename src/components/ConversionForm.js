// components/ConversionForm.js
import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import axios from 'axios';

const ConversionForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [fromBase, setFromBase] = useState('decimal');
    const [toBase, setToBase] = useState('binary');
    const [result, setResult] = useState('');

    const handleConvert = async () => {
        try {
            const response = await fetch('https://conversornumerico-production.up.railway.app', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    from: fromBase,
                    to: toBase,
                    value: inputValue,
                }),
            });

            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }

            const data = await response.text(); // Si la respuesta es un string
            console.log('Respuesta recibida:', data);
            setResult(data);
        } catch (error) {
            console.error('Error al realizar la conversión:', error);
            setResult('Error en la conversión. Verifique los valores.');
        }
    };


    return (
        <div className={styles.formContainer}>
            <h2>Conversión de Bases</h2>
            <div className={styles.inputGroup}>
                <label htmlFor="fromBase">De:</label>
                <select
                    id="fromBase"
                    value={fromBase}
                    onChange={(e) => setFromBase(e.target.value)}
                >
                    <option value="binary">Binario</option>
                    <option value="octal">Octal</option>
                    <option value="decimal">Decimal</option>
                    <option value="hexadecimal">Hexadecimal</option>
                </select>
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="toBase">A:</label>
                <select
                    id="toBase"
                    value={toBase}
                    onChange={(e) => setToBase(e.target.value)}
                >
                    <option value="binary">Binario</option>
                    <option value="octal">Octal</option>
                    <option value="decimal">Decimal</option>
                    <option value="hexadecimal">Hexadecimal</option>
                </select>
            </div>

            <div className={styles.inputGroup}>
                <input
                    type="text"
                    placeholder="Ingrese el número"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>

            <button onClick={handleConvert}>Convertir</button>

            {result && <div className={styles.result}>Resultado: {result}</div>}
        </div>
    );
};

export default ConversionForm;
