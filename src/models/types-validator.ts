export class TypesValidator {
  static isBoolean(value: boolean): boolean {
    return typeof value === 'boolean'
  }

  static isNumber(value: number): boolean {
    return typeof value === 'number'
  }

  static isString(value: string): boolean {
    return typeof value === 'string'
  }

  static isArray(value: Array<unknown>): boolean {
    return Array.isArray(value)
  }
}

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
