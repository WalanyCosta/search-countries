import styles from './border-countries.module.scss'
import { CountryModel } from '../../../../model/country-model'

type Props = {
    country: CountryModel | null,
    setBorder: (value: string) => void
}

function BorderCountries({country, setBorder}: Props) {
  return (
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
  )
}

export default BorderCountries