import { useEffect, useState } from 'react'
import Header from '../../components/header'
import { ArrowLeft } from '@phosphor-icons/react'
import { Link, useParams } from 'react-router-dom'
import { CountryModel } from '../../model/country-model'
import Detail from './components/detail/detail'
import './details-country.module.scss'
import { map } from '../../utils/map'

function DetailsCountry() {
    const params = useParams()
    const [country, setCountry] = useState<CountryModel | null>(null)
    const [border, setBorder] = useState<string | null>(null)

    useEffect(()=> {
      fetch(`https://restcountries.com/v3.1/alpha/${border ? border : params.alpha3Code}`)
      .then(data => data.json())
      .then(([data]) => {
        const newCountry = map(data)
        setCountry(newCountry)
      }).catch(error=> console.log(error))
    }, [border])

    return (
    <>
      <Header />
      
      <Link to='/'>
        <ArrowLeft size={24} weight="thin" />
        Back
      </Link>

      <Detail 
        key={country?.name}
        country={country} 
        setBorder={setBorder} 
      />
    </>
  )
}

export default DetailsCountry