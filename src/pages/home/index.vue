<template>
    <div class="page-home">
        <Header></Header>

        <main>
            <h1>
                {{ $t('home') }}
            </h1>

            <blockquote>
                {{ message }}
            </blockquote>

            <hr />

            <router-link to="/about">
                {{ $t('about') }}
            </router-link>
        </main>
    </div>
</template>

<script>
import header from '@/components/header/index.vue'

export default {
    components: {
        Header: header
    },
    data() {
        return {
            message: 'Hello Vue!'
        }
    },
    created() {
        this.$store.dispatch('fetchJoke').then(res =>{
            this.message = res.value
        })
    }
}
</script>
