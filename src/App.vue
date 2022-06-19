<template>
    <div>
        {{ count }}
        <button @click="add">Add</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        add() {
            this.count++
        }
    }
}
</script>

<style lang="scss">
button {
    background-color: #fff;
    border: 1px solid #000;
    padding: 5px 10px;
    color: gold;
}
</style>