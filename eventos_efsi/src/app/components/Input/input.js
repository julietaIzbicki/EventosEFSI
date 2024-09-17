"use client";

import styles from './input.module.css'; 

const Input = ({ value, onChange, placeholder }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={styles.inputField}
            required
        />
    );
}

export default Input;