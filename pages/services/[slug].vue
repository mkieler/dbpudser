<script setup>
const route = useRoute()
const { getServiceItem } = useServices();
const serviceItem = getServiceItem(route.params.slug)
</script>

<template>
    <Hero :bg="serviceItem.image">
        <div class="container mx-auto z-10 relative flex items-center justify-center h-full">
            <h1 class="text-3xl md:text-5xl font-black">{{ serviceItem.name }}</h1>
        </div>
    </Hero>

    <div class="container py-20 lg:py-40 ">
        {{ serviceItem.description }}
    </div>
</template>