import { CountryModel } from "../model/country-model"

function mapObject(object: any){
    const elements = []
    for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            const element = object[key]            
            elements.push(element)
        }
    }
    return elements
}

function getValuesApiInString(data: any, key?: any){
    const elements = mapObject(data)
    const valueInString = elements?.reduce((accumulator, element) => {
        const comma = elements.indexOf(element) !== 0 ? ',' : ''
        const value = key ? element[key] : element
        accumulator += comma + ' ' + value
        return accumulator
    }, '')

    return valueInString
}

export function map(data: any): CountryModel {
    return data && {
        name: data.name.common,
        region: data.continents as string,
        flags: data.flags,
        alpha3Code: data.ccn3,
        population: data.population,
        capital: data.capital,
        subRegion: data.subregion,
        borders: data.borders,
        languages: getValuesApiInString(data.languages),
        currencies: getValuesApiInString(data.currencies, 'name'),
        nativeName: getValuesApiInString(data.name.nativeName, 'common')
    } 
}