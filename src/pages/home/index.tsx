import { useState, useEffect } from 'react'
import styles from './home.module.scss'
import { verifyStartsWithSameLetter } from '../../utils/verify-starts-with-same-letter'
import Country from '../../components/country'
import NotFound from '../../components/not-found'
import Filter from '../../components/filter'
import Error from '../../components/error'
import Header from '../../components/header'
import { CountryModel } from '../../model/country-model'

export type StateProps = {
  filterCountry: CountryModel[];
  countries: CountryModel[];
  searchCountry: string;
  region: string,
  messageError: ''
}

function Home() {
  const [state, setState] = useState<StateProps>({
    filterCountry: [],
    countries: [],
    searchCountry: '',
    region: '',
    messageError: ''
  })
  
  useEffect(()=> {
    fetch('http://localhost:3000/countries')
      .then((data)=> data.json())
      .then((data)=> {
        setState({ ...state, countries: data, filterCountry: data })
      })
      .catch((error) => {
        setState({...state, messageError: error})}
      )
  },[])

  useEffect(()=> {
    const newCountries = state.filterCountry.filter(country => 
      verifyStartsWithSameLetter(country.name, state.searchCountry)
      && verifyStartsWithSameLetter(country.region, state.region)
    )
    setState({...state, countries: newCountries})
  },[
    state.region, 
    state.searchCountry
  ])

  return (
    <div className={styles.homeContainer}>
     <Header />

     <Filter
        state={state}
        setState={setState} 
     />

      <div className={styles.countryContainer}>
          {
            state.messageError ? 
              <Error />
            : (
              state.countries.length !== 0 ? state.countries.map(data => 
              <Country key={data.alpha3Code} country={data}/>
              ) 
              : <NotFound />
            )
          }
      </div>
    </div>
  )
}

export default Home