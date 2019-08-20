import { computed } from "vue-function-api"
import { getCurrentVm } from './current'

export function useRouter () {
  const vm = getCurrentVm()
  const router = computed(() => vm.$router)
  return router
}
