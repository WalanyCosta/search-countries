import { MagnifyingGlass, Moon } from '@phosphor-icons/react'
import styles from './home.module.scss'

function Home() {
  return (
    <div className={styles.homeContainer}>
      <nav>
        <h2>Where is the world</h2>
        <button type='button'>
          <Moon className={styles.iconMoon} size={24}/>
          Dark Mode
        </button>
      </nav>

      <div className={styles.filterContainer}>
        <label htmlFor="search">
         <MagnifyingGlass 
            className='searchIcon'
          />

          <input 
            type="search"
            id="search"
            placeholder='Search for a country' 
          />
        </label>

        <select>
          <option selected>Filter by Region</option>
          <option value="af">Africa</option>
          <option value="am">America</option>
          <option value="as">Asia</option>
          <option value="eu">Europe</option>
          <option value="oc">Oceania</option>
        </select>
      </div>

      <div className={styles.countryContainer}>
        <div className={styles.country}>
          <img src="https://flagcdn.com/w320/de.png"/>
          <div className={styles.infoCountry}>
            <h3>Germany</h3>
            <ul>
              <li><span>Population:</span>81.770.900</li>
              <li><span>Region:</span>Europe</li>
              <li><span>capital:</span>Berlin</li>
            </ul>
          </div>
        </div>

        <div className={styles.country}>
          <img src="https://flagcdn.com/w320/de.png"/>
          <div className={styles.infoCountry}>
            <h3>Germany</h3>
            <ul>
              <li><span>Population:</span>81.770.900</li>
              <li><span>Region:</span>Europe</li>
              <li><span>capital:</span>Berlin</li>
            </ul>
          </div>
        </div>

        <div className={styles.country}>
          <img src="https://flagcdn.com/w320/de.png"/>
          <div className={styles.infoCountry}>
            <h3>Germany</h3>
            <ul>
              <li><span>Population:</span>81.770.900</li>
              <li><span>Region:</span>Europe</li>
              <li><span>capital:</span>Berlin</li>
            </ul>
          </div>
        </div>

        <div className={styles.country}>
          <img src="https://flagcdn.com/w320/de.png"/>
          <div className={styles.infoCountry}>
            <h3>Germany</h3>
            <ul>
              <li><span>Population:</span>81.770.900</li>
              <li><span>Region:</span>Europe</li>
              <li><span>capital:</span>Berlin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home