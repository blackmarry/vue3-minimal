<template>
	<div>
		<span>
			<input
				v-model="inputText"
				class="rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			>
			<button
				type="button"
				class="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				@click="addItem()"
			>
				<svg class="w-3.5 h-3.5 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
					<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
					<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
				</svg>
				Add
			</button>
		</span>
	</div>
</template>

<script setup lang="ts">
import { useData } from '@/composables/useData';
import { ref } from 'vue';

const inputText = ref('')
const { data } = useData()

const addItem = () => {
	data.value.push({ example: inputText.value })
	inputText.value = ''
}
</script>

<style scoped lang="scss">
</style>