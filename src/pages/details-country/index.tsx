import { useEffect, useState } from 'react'
import Header from '../../components/header'
import { ArrowLeft } from '@phosphor-icons/react'
import styles from './details-country.module.scss'
import { Link, useParams } from 'react-router-dom'
import { CountryModel } from '../../model/country-model'

function DetailsCountry() {
    let comma: string
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

    <div className={styles.detailsContainer}>
        <img src={country?.flags.png} />
        <div className={styles.detailsCountry}>
          <h3>{country?.name}</h3>
          <div className={styles.infoCountry}>
              <ul>
                <li>
                  <strong>Native Name:</strong>
                  <p>{country?.nativeName}</p>
                </li>
                <li>
                  <strong>population:</strong>
                  <p>{country?.population}</p>
                </li>
                <li>
                  <strong>Region:</strong>
                  <p>{country?.region}</p>
                </li>
                <li>
                  <strong>sub region:</strong>
                  <p>{country?.subRegion}</p>
                </li>
                <li>
                  <strong>capital:</strong>
                  <p>{country?.capital}</p>
                </li>
              </ul>
              <ul>
                <li>
                  <strong>top level:</strong>
                  <p>{country?.topLevelDomain}</p>
                </li>
                <li>
                  <strong>currencies:</strong>
                  
                  {country?.currencies && country?.currencies.map(currency => {
                    comma = country.currencies.indexOf(currency) !== 0 ? ',' : ''
                    return (
                      <>
                      {comma}
                      <p key={currency.name}>{currency.name}</p>
                      </>
                    )
                  })}
                  
                </li>
                <li>
                  <strong>Languages:</strong>
                  {country?.languages && country?.languages.map(language => {
                    comma = country.languages.indexOf(language) !== 0 ? ',' : ''
                    return (
                      <>
                        {comma}
                        <p key={language.name}>{language.name}</p>
                      </>
                      )
                  })}
                </li>
              </ul>
          </div>
          <div className={styles.borderCountries}>
            <strong>Border Countries:</strong>
            <div>
                  {country?.borders && country?.borders.map(borderCountry => (
                      <button key={borderCountry} onClick={()=> setBorder(borderCountry)}>
                        {borderCountry}
                      </button>
                  ))}
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default DetailsCountry