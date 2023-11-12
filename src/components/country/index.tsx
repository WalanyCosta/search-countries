import { CountryProps } from '../../pages/home'
import styles from './country.module.scss'

type Props = {
  country: CountryProps
}

function Country({country}: Props) {
  return (
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
  )
}

export default Country