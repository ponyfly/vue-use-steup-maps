import { setCurrentVm } from './maps/current'

export { useThis } from './maps/useThis'
export { useStore } from './maps/useStore'
export { useRouter } from './maps/useRouter'
export { useRoute } from './maps/useRoute'

export default function install (Vue) {
  Vue.mixin({
    beforeCreate: setCurrentVm
  })
}
