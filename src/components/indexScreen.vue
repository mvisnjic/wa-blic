<template>
    <div v-if="error">Oops! Error encountered: {{ error.message }}</div>

    <div v-else-if="data">
        <div
            v-for="book in data"
            :key="book.id"
            class="mb-12 w-[300px] mx-auto"
        >
            <router-link
                :to="{
                    name: 'details',
                    params: {
                        id: book.id,
                    },
                }"
            >
                <pre class="card cursor-pointer">{{ book.name }}</pre>
            </router-link>
        </div>
    </div>

    <div v-else>Loading...</div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'

const data = ref(null)
const error = ref(null)

axios
    .get('https://www.anapioficeandfire.com/api/books')
    .then((res) => {
        console.log(res.data)
        data.value = res.data
    })
    .catch((e) => (error.value = e))
</script>

<script>
export default {
    name: 'indexScreen',
    data() {
        return {
            data: [],
        }
    },
}
</script>
