import { MagnifyingGlass, Moon } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'
import styles from './home.module.scss'

type Country = {
  numericCode: string,
  name: string,
  flags: {
    png: string
  },
  population: string,
  region: string,
  capital: string,
}


function Home() {
  const [filterCountry, setFilterCountry] = useState<Country[]>([])
  const [countries, setCountries] = useState<Country[]>([])
  const [searchCountry, setsearchCountry] = useState('')
  const [region, setRegion] = useState('')
  
  useEffect(()=> {
    fetch('http://localhost:3000/countries')
      .then((data)=> data.json())
      .then((data)=> {
        setCountries(data)
        setFilterCountry(data)
      })
  },[])

  useEffect(()=> {
    handleFindByCountryAndRegion()
  },[region, searchCountry])


  function handleFindByCountryAndRegion (){
    const searchLowerCase = searchCountry.toLowerCase()
    let regionLowerCase = region.toLowerCase()

    if(regionLowerCase === 'filter by region') regionLowerCase = ''

    const newCountries = filterCountry.filter(u => u.name.toLowerCase().startsWith(searchLowerCase)
    && u.region.toLocaleLowerCase().startsWith(regionLowerCase))
    setCountries(newCountries)
  }

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
            onChange={(e)=> setsearchCountry(e.target.value)} 
          />
        </label>

        <select onChange={(e)=> setRegion(e.target.value)}>
          <option selected>Filter by Region</option>
          <option >Africa</option>
          <option >America</option>
          <option >Asia</option>
          <option >Europe</option>
          <option >Oceania</option>
        </select>
      </div>

      <div className={styles.countryContainer}>
        {
          countries.length !== 0 ? countries.map(country => (
            <div className={styles.country} key={country.numericCode}>
              <img src={country.flags.png} />
              <div className={styles.infoCountry}>
                <h3>{country.name}</h3>
                <ul>
                  <li><span>Population:</span>{country.population}</li>
                  <li><span>Region:</span>{country.region}</li>
                  <li><span>capital:</span>{country.capital}</li>
                </ul>
              </div>
            </div>
          )) : (
            <div className={styles.notFoundMessage}>
              Country não encontrado
            </div>
          )
        }
        
      </div>
    </div>
  )
}

export default Home