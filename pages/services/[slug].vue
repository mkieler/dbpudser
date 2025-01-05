<script setup>
const route = useRoute()
const { getServiceItem, serviceItems } = useServices();
const serviceItem = getServiceItem(route.params.slug)
</script>

<template>
    <Hero :bg="serviceItem.image">
        <div class="container mx-auto z-10 relative flex items-center justify-center h-full">
            <h1 class="text-3xl md:text-5xl font-black">{{ serviceItem.name }}</h1>
        </div>
    </Hero>


    <div class="flex container gap-10 py-10 items-start">
        <Card class="w-[20rem]">
            <CardHeader>
                <p class="text-lg font-bold">Andre services</p>
            </CardHeader>
            <CardContent>
                <ul>
                    <li v-for="service in serviceItems" :key="service.slug">
                        <Button variant="link" as-child>
                            <nuxt-link :to="`/services/${service.slug}`">{{ service.name }}</nuxt-link>
                        </Button>
                    </li>
                </ul>
            </CardContent>
        </Card>

        <div class="flex-1">
            <p class="text-2xl font-bold">Beskrivelse</p>
            <p class="p-10">
                {{ serviceItem.description }}
            </p>
        </div>

    </div>


    
</template>