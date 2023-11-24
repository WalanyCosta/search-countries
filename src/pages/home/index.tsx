import { useState, useEffect } from 'react'
import styles from './home.module.scss'
import Country from '../../components/country'
import NotFound from '../../components/not-found'
import Filter from '../../components/filter'
import Error from '../../components/error'
import Header from '../../components/header'
import { CountryModel } from '../../model/country-model'

export type StateProps = {
  countries: CountryModel[];
  searchCountry: string;
  region: string,
  messageError: ''
}

function Home() {
  const [state, setState] = useState<StateProps>({
    countries: [],
    searchCountry: '',
    region: '',
    messageError: ''
  })

  function findCountriesByAnythings(url: string){
    fetch(url)
    .then((data)=> data.json())
    .then((data)=> {
      const newcontries: CountryModel[] = data?.map(country =>{
          return {
            ...country,
            name: country.name.common,
            region: country.continents+'',
            flags: country.flags
          }   
      })
      setState({ ...state, countries: newcontries})
    })
    .catch((error) => {
      setState({...state, messageError: error})}
    )
  }

  function findCountriesAll(): void{
    findCountriesByAnythings('https://restcountries.com/v3.1/all')
  }
  
  useEffect(()=> {
    findCountriesAll()
  },[])

  useEffect(()=> {
    
    if(state.searchCountry) {
      findCountriesByAnythings(`https://restcountries.com/v3.1/name/${state.searchCountry}`)
    }

    if(state.region) {
      findCountriesByAnythings(`https://restcountries.com/v3.1/region/${state.region}`)
    }
    
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