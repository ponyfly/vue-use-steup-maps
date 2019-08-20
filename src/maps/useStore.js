import { computed } from "vue-function-api"
import { getCurrentVm } from './current'

export function useStore () {
  const vm = getCurrentVm()
  const store = computed(() => vm.$store)
  return store
}
