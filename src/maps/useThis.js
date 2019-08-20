import { getCurrentVm } from './current'

export function useThis() {
   return getCurrentVm()
}
