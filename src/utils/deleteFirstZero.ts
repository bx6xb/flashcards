export const deleteFirstZero = (value: number | string) => value.toString().replace(/^0+/, '') || 0
