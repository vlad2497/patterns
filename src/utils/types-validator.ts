export const typesValidator = {
  isBoolean(value: boolean): boolean {
    return typeof value === 'boolean'
  },

  isNumber(value: number): boolean {
    return typeof value === 'number'
  },

  isString(value: string): boolean {
    return typeof value === 'string'
  },

  isArray(value: Array<unknown>): boolean {
    return Array.isArray(value)
  },
}
