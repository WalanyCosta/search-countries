import styles from './detail.module.scss'
import { CountryModel } from '../../../../model/country-model'
import BorderCountries from '../border'
import { getValuePopulationWithComma } from '../../../../utils/get-value-population'

type Props = {
    country: CountryModel | null
    setBorder: (value: string) => void
}

function Detail({country, setBorder}: Props) {
  return (
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
              <p>{getValuePopulationWithComma(country?.population)}</p>
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
              <p >{country?.currencies}</p> 
            </li>
            <li>
              <strong>Languages:</strong>
              <p>{country?.languages}</p>   
            </li>
          </ul>
      </div>
      <BorderCountries country={country} setBorder={setBorder} />
    </div>
</div>
  )
}

export default Detail