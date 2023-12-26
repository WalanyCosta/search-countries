import React, { createContext, useEffect, useState } from 'react'
import styles from './theme.module.scss'


export type Props = {
  children: React.ReactNode
}
export type ThemeProps = {
  changeTheme: boolean,
  handleChangeTheme: () => void
}

export const ThemeContext = createContext({
  changeTheme: false
} as ThemeProps)

function ThemeProvider(props: Props) {
  const [changeTheme, setChangeTheme] = useState(false)

  function handleChangeTheme() {
    setChangeTheme(!changeTheme)
    localStorage.setItem('theme', changeTheme ? 'dark' : 'light')
  }

  useEffect(()=>{
    const convertValueInStringToBoolean = localStorage.getItem('theme') === 'dark' ? false : true 
    setChangeTheme(convertValueInStringToBoolean)
  }, [])

  return (
    <ThemeContext.Provider value={{changeTheme, handleChangeTheme}}>
      <main className={changeTheme ? styles.darkTheme : ''}>
        { props.children }
      </main>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider