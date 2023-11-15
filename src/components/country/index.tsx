import { useNavigate } from 'react-router-dom'
import { CountryModel } from '../../model/country-model'
import styles from './country.module.scss'

type Props = {
  country: CountryModel
}


function Country({country}: Props) {
  const navigate = useNavigate()

  function handleNavigateToDetails (numericCode: string){
    navigate(`details/${numericCode}`)
  }

  return (
    <div 
      className={styles.country} 
      onClick={()=> handleNavigateToDetails(country.numericCode)}
    >
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
  )
}

export default Country