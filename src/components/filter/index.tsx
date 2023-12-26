import { MagnifyingGlass } from '@phosphor-icons/react'
import styles from './filter.module.scss'
import { StateProps } from '../../pages/home';
import SelectComponents from '../select';

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
            type="text"
            placeholder='Search for a country'
            onChange={(e)=> 
                setState({...state, searchCountry: e.target.value})
            } 
        />
        </label>

            <SelectComponents 
                onValueChange={(value)=> setState({...state, region: value.toString()})}
            />    
  </div>
  )
  
}

export default Filter