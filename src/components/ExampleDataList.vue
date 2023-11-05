<template>
	<ul>
		<li
			v-for="item in data"
			:key="item.example"
			class="datalist__example"
		>
			{{ item.example }}	
		</li>
	</ul>
</template>

<script setup lang="ts">
import { useData } from '@/composables/useData';
const { data } = useData()
</script>

<style scoped lang="scss">
.datalist {
	&__example {
		color: green;
	}
}
</style>