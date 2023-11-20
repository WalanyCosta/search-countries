import styles from './detail.module.scss'
import { CountryModel } from '../../../../model/country-model'
import BorderCountries from '../border'

type Props = {
    country: CountryModel | null
    setBorder: (value: string) => void
}

function Detail({country, setBorder}: Props) {
 let comma

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
      <BorderCountries country={country} setBorder={setBorder} />
    </div>
</div>
  )
}

export default Detail