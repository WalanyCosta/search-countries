import Header from '../../components/header'
import styles from './details-country.module.scss'
import { useParams } from 'react-router-dom'

function DetailsCountry() {
    const params = useParams()

    return (
    <>
    <Header />
      
    <a href='#'>Back</a>

    <div className={styles.detailsContainer}>
        <img src="https://flagcdn.com/w320/be.png" />
        <div className={styles.detailsCountry}>
          <h3>Belgium</h3>
          <div className={styles.infoCountry}>
              <ul>
                <li>
                  <strong>Native Name:</strong>
                  <p>Belgie</p>
                </li>
                <li>
                  <strong>poulation:</strong>
                  <p>Belgie</p>
                </li>
                <li>
                  <strong>Region:</strong>
                  <p>Europe</p>
                </li>
                <li>
                  <strong>sub region:</strong>
                  <p>Western Europe</p>
                </li>
                <li>
                  <strong>capital:</strong>
                  <p>Brussels</p>
                </li>
              </ul>
              <ul>
                <li>
                  <strong>top level:</strong>
                  <p>Belgie</p>
                </li>
                <li>
                  <strong>currencies:</strong>
                  <p>Euro</p>
                </li>
                <li>
                  <strong>Languages:</strong>
                  <p>Dutch, french, german</p>
                </li>
              </ul>
          </div>
          <div className={styles.borderCountries}>
            <strong>Border Countries:</strong>
            <p>france</p>
            <p>Germany</p>
            <p>Netherlands</p>
          </div>
        </div>
    </div>
    </>
  )
}

export default DetailsCountry