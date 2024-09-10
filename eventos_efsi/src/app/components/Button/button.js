"use cliente"
import styles from './button.module.css'; 


const Button = ({children}) => {
    return(
        <button type="submit" className={styles.submitButton}>{children}</button>
    );
};
export default Button;