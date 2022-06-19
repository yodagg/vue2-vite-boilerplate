<template>
    <header>
        <toy></toy>
        <languages></languages>
    </header>
</template>

<script>
import toy from '@/components/toy/index.vue'
import languages from '@/components/languages/index.vue'

export default {
    components: {
        toy,
        languages
    }
}
</script>

<style lang="scss">
header {
    padding: 5px 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>