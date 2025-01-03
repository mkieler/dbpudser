<template>
    <div class="relative text-white bg-cover bg-center h-[25rem]" :style="style">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-0"></div>

        <slot />
    </div>
</template>

<script setup>

const props = defineProps({
    bg: {
        type: String,
        required: true
    }
})

const style = `background-image: url(${props.bg})`;

</script>

