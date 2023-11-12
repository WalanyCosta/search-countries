import { MagnifyingGlass } from '@phosphor-icons/react'
import styles from './filter.module.scss'
import { StateProps } from '../../pages/home';

type Props = {
    state: StateProps
    setState: (values: StateProps) => void
}

function Filter({state, setState}: Props) {
  return (
    <div className={styles.filterContainer}>
        <label htmlFor="search">
        <MagnifyingGlass 
            className='searchIcon'
        />

        <input
            type="search"
            id="search"
            placeholder='Search for a country'
            onChange={(e)=> 
                setState({...state, searchCountry:e.target.value})
            } 
        />
        </label>

        <select onChange={(e)=> setState({...state, region:e.target.value})}>
            <option value='' selected>Filter by Region</option>
            <option>Africa</option>
            <option>America</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
        </select>
  </div>
  )
}

export default Filter