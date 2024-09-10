"use cliente"

import styles from './input.module.css'; 


const InputPass = ({children}) => {
    return(
        <input
            type="password"
            placeholder={children}
            className={styles.inputField}
            required
        />
    );
}

export default InputPass;