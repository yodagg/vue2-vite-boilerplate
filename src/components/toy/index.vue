<template>
   <img
    :src="imageSrc"
    :style="imageStyles"
    @click="changeAngle">
</template>

<script>
import toyImage from '@/assets/images/412896_large.png'

export default {
    data() {
        return {
            angle: 0
        }
    },
    computed: {
        imageSrc() {
            return toyImage
        },
        imageStyles() {
            return {
                transform: `rotateZ(${this.angle}deg)`,
                transition: `all 1s ease 0s`
            }
        }
    },
    methods: {
        changeAngle() {
            this.angle = parseInt(Math.random() * 360, 10)
        }
    }
}
</script>