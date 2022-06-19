<template>
    <div class="page-about">
        <Header></Header>

        <main>
            <h1>
                {{ $t('about') }}
            </h1>

            <hr>

            <router-link to="/">
                {{ $t('home') }}
            </router-link>
        </main>
    </div>
</template>

<script>
import header from '@/components/header/index.vue'

export default {
    components: {
        Header: header
    }
}
</script>
