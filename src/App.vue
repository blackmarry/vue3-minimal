<template>
	<h1>{{ text }}</h1>
	<ExampleDataListVue />
	<ExampleDataFormVue />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ExampleDataListVue from './components/ExampleDataList.vue'
import ExampleDataFormVue from './components/ExampleDataForm.vue';

const text = ref('Hello World')
</script>
