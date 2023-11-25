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
  messageError: '',
  loading: boolean
}

function Home() {
  const [state, setState] = useState<StateProps>({
    countries: [],
    searchCountry: '',
    region: '',
    messageError: '',
    loading: false
  })

  function findCountriesByUrl(url: string){
    setState({...state, loading: true})
    fetch(url)
    .then((data)=> data.json())
    .then((data)=> {
      const newcontries: CountryModel[] = data?.map((country: any) =>{
          return {
            ...country,
            name: country.name.common,
            region: country.continents as string,
            flags: country.flags,
            alpha3Code: country.ccn3,
          }   
      })
      setState({ ...state, countries: newcontries, loading: false})
      
    })
    .catch((error) => {
      setState({...state, messageError: error, loading: false})}
    )
  }
  
  useEffect(()=> {
    findCountriesByUrl('https://restcountries.com/v3.1/all')
  },[])

  useEffect(()=> {
    
    if(state.searchCountry) {
      findCountriesByUrl(`https://restcountries.com/v3.1/name/${state.searchCountry}`)
    }

    if(state.region) {
      findCountriesByUrl(`https://restcountries.com/v3.1/region/${state.region}`)
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
          {state.loading && (<div className={styles.loading}>Aguardar ...</div>)}
          {state.messageError && <Error />}
          {!state.loading && state.countries.length === 0 && <NotFound />}
          {!state.loading && !state.messageError && state.countries.length !== 0 && 
            state.countries.map((data, index) => <Country key={index} country={data}/>) 
          }
      </div>
    </div>
  )
}

export default Home