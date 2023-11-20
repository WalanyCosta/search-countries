import { useEffect, useState } from 'react'
import Header from '../../components/header'
import { ArrowLeft } from '@phosphor-icons/react'
import { Link, useParams } from 'react-router-dom'
import { CountryModel } from '../../model/country-model'
import Detail from './components/detail/detail'
import './details-country.module.scss'

function DetailsCountry() {
    const params = useParams()
    const [country, setCountry] = useState<CountryModel | null>(null)
    const [border, setBorder] = useState<string | null>(null)
    useEffect(()=> {
      fetch(`http://localhost:3000/countries?alpha3Code=${border ? border : params.alpha3Code}`)
      .then(data => data.json())
      .then(data => {
        setCountry(data[0])
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