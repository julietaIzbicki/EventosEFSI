"use client";

import styles from './input.module.css'; 

const InputPass = ({ value, onChange, placeholder }) => {
    return (
        <input
            type="password"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={styles.inputField}
            required
        />
    );
}
export default InputPass;