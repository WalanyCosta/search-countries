export type CountryModel = {
    alpha3Code: string,
    name: string,
    flags: {
      png: string
    },
    population: number,
    region: string,
    capital: string,
    nativeName: string,
    subRegion: string,
    topLevelDomain: string,
    currencies: Array<{name: string}>,
    languages: Array<{name: string}>,
    borders: Array<string>
}