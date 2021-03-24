import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss';


export function SingInButton(){
    const isActive = false;
    
    return isActive ? (
        <button type = 'button' className = {styles.singInButton}>
            <FaGithub color = "#04d361" />
            Entrar com GitHub
            <FiX color = '#737380' className = {styles.closeIcon}/>
        </button>
    ) : (
        <button type = 'button' className = {styles.singInButton}>
            <FaGithub color = "#eba417" />
            Entrar com GitHub
        </button>
    );
}