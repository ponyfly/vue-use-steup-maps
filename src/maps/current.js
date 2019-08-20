let currentVm = null
export function setCurrentVm (vue) {
  const vm = this || vue
  if (typeof vm.$options.setup === 'function') {
    currentVm = vm
  }
}
export function getCurrentVm () {
  if (currentVm) return currentVm
  throw new ReferenceError('Can Not found vm.')
}
