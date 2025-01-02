<script setup>
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { faStar, faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
    <div class="container mx-auto  py-20 lg:py-40 z-20 relative text-center">
        <h2 class="text-xl md:font-bold text-slate-600">Anmeldelser</h2>
        <div class="flex justify-center">
            <p class="md:text-3xl text-lg font-black mt-5 max-w-[52rem]">Vi bestræber os på at give den bedste service, hver gang. Se hvad vores tidligere kunder mener</p>
        </div>
        
        <div class="px-5">
            <Carousel
                class="relative w-full pt-10 lg:pt-20"
                :opts="{
                align: 'start',
                loop: true,
                }"
            >
                <CarouselContent>
                    <CarouselItem v-for="(_, index) in 5" :key="index" class="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <div class="p-1">
                            <Card class="text-center">
                                <CardHeader class="mt-3">
                                    <CardTitle>
                                        <font-awesome :icon="faStarSolid" class="text-yellow-500 text-sm" />
                                        <font-awesome :icon="faStarSolid" class="text-yellow-500 text-sm" />
                                        <font-awesome :icon="faStarSolid" class="text-yellow-500 text-sm" />
                                        <font-awesome :icon="faStarRegular" class="text-yellow-500 text-sm" />
                                        <font-awesome :icon="faStarRegular" class="text-yellow-500 text-sm" />
                                        <div class="mt-5">Fantastisk service</div>
                                    </CardTitle>
                                    <CardDescription>John Doe</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <span class="">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            </Carousel>
        </div>
    </div>
</template>