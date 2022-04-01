<template>
    <div>
        <div>
            <button
                @click="goBack"
                class="rounded-full bg-black text-white p-2 mb-8"
            >
                Go back
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'secondScreen',
    methods: {
        goBack() {
            this.$router.go(-1)
        },
    },
}
</script>
