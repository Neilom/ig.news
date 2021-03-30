import { SingInButton } from '../SingInButton'
import stytes from './styles.module.scss'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { ActiveLink } from '../ActiveLink'


export function Header() {
  const { asPath } = useRouter()

  return (
    /* Aqui é colocado todo o HTML do meu componente */
    <header className={stytes.headerContainer}>
      <div className={stytes.headerContent}>
        <a href="/">
          <img src="/images/ig.news.svg" alt="ig.news" />
        </a>
        <nav>
          <ActiveLink activeClassName={stytes.active} href="/">
            <a>Home</a>
          </ActiveLink>

          <ActiveLink activeClassName={stytes.active} href="/posts">
            <a>Post</a>
          </ActiveLink>
        </nav>

        <SingInButton />
      </div>
    </header>
  )
}