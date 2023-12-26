import { Moon, Sun } from '@phosphor-icons/react'
import styles from './header.module.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../context/theme-context'


function Header() {
  const {handleChangeTheme, changeTheme} = useContext(ThemeContext)
  return (
    <nav>
        <h2>Where is the world?</h2>
        <button type='button' onClick={handleChangeTheme}>
          {changeTheme ? 
          (
            <>
              <Sun size={24} className={styles.iconMoon} /> 
              Dark Mode
            </>
          ):(
            <>
              <Moon className={styles.iconMoon} size={24}/> 
              Light Mode
            </>  
          )}
        </button>
    </nav>
  )
}

export default Header