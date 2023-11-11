export function verifyStartsWithSameLetter(value:string, search: string): boolean {
    const valueLowerCase = value.toLowerCase()
    const searchLowerCase = search.toLowerCase()

    return valueLowerCase.toLowerCase().startsWith(searchLowerCase)
}