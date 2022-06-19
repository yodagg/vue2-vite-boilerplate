<template>
    <select v-model="locale">
        <option
        v-for="item in languages"
        :key="item"
        :value="item">
            {{ item }}
        </option>
    </select>
</template>

<script>
import i18n from '@/i18n'

export default {
    computed: {
        locale: {
            get() {
                return i18n.locale
            },
            set(value) {
                i18n.locale = value
            }
        },
        languages() {
            return Object.keys(i18n.messages)
        }
    }
}
</script>