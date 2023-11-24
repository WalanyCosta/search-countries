export function map(object: any, subKey: string) {
    for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            const element = object[key];
            return element[subKey]
        }
    }
}
