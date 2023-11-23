export function getValuePopulationWithComma (value: number = 0): string{
    if(value === 0) return ''
    const valueFormated = new Intl.NumberFormat().format(value)
    const valuewithComma = valueFormated.replaceAll('.', ',')
    return valuewithComma
}
