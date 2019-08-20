import { computed } from "vue-function-api"
import { getCurrentVm } from './current'

export function useRoute () {
  const vm = getCurrentVm()
  const route = computed(() => vm.$route)
  return route
}
