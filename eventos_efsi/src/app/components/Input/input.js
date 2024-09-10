"use cliente"

import styles from './input.module.css'; 


const Input = ({children}) => {
    return(
        <input
            type="text"
            placeholder={children}
            className={styles.inputField}
            required
        />
    );
}

export default Input;