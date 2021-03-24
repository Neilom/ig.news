import { SingInButton } from '../SingInButton'
import stytes from './styles.module.scss'

export function Header(){
    return(
        /* Aqui é colocado todo o HTML do meu componente */
        <header className = {stytes.headerContainer}>
            <div className = {stytes.headerContent}>
                <img src="/images/ig.news.svg" alt="ig.news"/>
                <nav>
                    <a className = {stytes.active} href="">Home</a>
                    <a href="">Post</a>
                </nav>

                <SingInButton />
            </div>
        </header>
    )
}