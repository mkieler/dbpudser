<script setup>
    const { serviceItems } = useServices();
</script>


<template>
    <div class="container mx-auto  py-20 lg:py-40 z-20 relative">
        <h2 class="text-xl md:font-bold text-slate-600">Vores services</h2>
        <p class="md:text-3xl text-lg font-black mt-5 max-w-[60rem]">Med et bredt felt af ydelser indenfor vinduespolering og rengøring får vi dig til at stå kniv skarpt, hver gang!</p>
        
        <div class="px-5">
            <Carousel
                class="relative w-full pt-10 lg:pt-20"
                :opts="{
                align: 'start',
                loop: true,
                }"
            >
                <CarouselContent>
                    <CarouselItem v-for="serviceItem in serviceItems" class="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <Card>
                            <CardHeader>
                                <CardTitle>{{ serviceItem.name }}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {{ serviceItem.shortDescription }}
                            </CardContent>
                            <CardFooter>
                                <Button class="w-full">
                                    <a :href="`services/${serviceItem.slug}`">Læs mere</a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                </CarouselContent>

                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    </div>
</template>