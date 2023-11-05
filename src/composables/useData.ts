import { ref } from 'vue'
import type { Data } from '@/include/Data'
import { exampleData } from '@/include/exampleData'

/**
 * This data list will be the same for every component
 */
const data = ref<Data[]>(exampleData);

/** 
 * Usage:
 * 
 * ```
 * import { useData } from '@/composables/useData'
 * const { data } = useData()
 * ```
 */
export const useData = () => {
	return {
		data
	}
}
