import { Moon } from '@phosphor-icons/react'
import styles from './header.module.scss'

function Header() {
  return (
    <nav>
        <h2>Where is the world?</h2>
        <button type='button'>
        <Moon className={styles.iconMoon} size={24}/>
            Dark Mode
        </button>
    </nav>
  )
}

export default Header