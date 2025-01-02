<script setup>
import { Button } from '@/components/ui/button'
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import { Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle } from '@/components/ui/card'
import { Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious } from '@/components/ui/carousel'


useSeoMeta({
    title: 'My Amazing Site',
    ogTitle: 'My Amazing Site',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})




</script>

<template>
    <div class="relative text-white  h-[35rem] md:h-[95vh] md:max-h-[80rem]">
        <video 
            src="/videos/intro.mp4" 
            preload="metadata" 
            playsinline="true" 
            data-videotype="4" 
            autoplay="true" 
            loop="true" 
            muted="true" 
            data-cmp-ab="2" 
            data-cmp-info="10" 
            class="w-full h-full object-cover absolute top-0 left-0 z-0" 
            />
        
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-0"></div>

        <div class="container max-w-screen-md mx-auto flex flex-col items-center justify-center h-full z-10 relative text-center ">
            <p class="text-sm md:text-base text-slate-400">Professionel vinduespolering og rengøring</p>
            <h1 class="text-3xl md:text-6xl font-bold mt-2">Glasklart perfektion</h1>
            <p class="text-sm md:text-lg my-5 text-slate-400">
                Hos [Din Virksomhedsnavn] tilbyder vi professionel vinduespudsning, skånsom solcellevask og miljøvenlig rengøring. Få skinnende resultater i [Dit Område]. Kontakt os i dag for et gratis tilbud og oplev forskellen!
            </p>
            <div class="flex gap-4">
                <Button class="mt-4 md:p-6 md:text-lg">Kontakt os</Button>
                <Button variant="secondary" class="mt-4 md:p-6 md:text-lg">Læs mere</Button>
            </div>

            <div class="absolute bottom-20 left-0 w-full max-w-screen-md gap-5 text-white hidden md:flex">
                <div class="flex items-center text-lg gap-2">
                    <font-awesome :icon="faCheck"  />
                    <p >Professionel service</p>
                </div>
                <div class="flex items-center text-lg gap-2">
                    <font-awesome :icon="faCheck" />
                    <p >Miljøvenlige produkter</p>
                </div>
                <div class="flex items-center text-lg gap-2">
                    <font-awesome :icon="faCheck"/>
                    <p>Danske medarbejdere</p>
                </div>
                <div class="flex items-center text-lg gap-2">
                    <font-awesome :icon="faCheck"/>
                    <p>Loyalitet</p>
                </div>

            </div>
        </div>
    </div>


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
                    <CarouselItem class="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Vinduespolering</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </CardContent>
                            <CardFooter>
                                <Button class="w-full">Læs mere</Button>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem class="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Rengøring</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </CardContent>
                            <CardFooter>
                                <Button class="w-full">Læs mere</Button>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem class="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Algebehandling</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </CardContent>
                            <CardFooter>
                                <Button class="w-full">Læs mere</Button>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem class="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Noget andet</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </CardContent>
                            <CardFooter>
                                <Button class="w-full">Læs mere</Button>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                    <CarouselItem class="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <Card>
                            <CardHeader>
                                <CardTitle>Noget andet</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </CardContent>
                            <CardFooter>
                                <Button class="w-full">Læs mere</Button>
                            </CardFooter>
                        </Card>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    </div>


    <div class="mx-auto  py-20 lg:py-40 z-20 bg-slate-200">
        <div class="container">
            <div class="grid lg:grid-cols-2 grid-cols-1">
                <div class="order-2 lg:order-1">
                    <h2 class="text-xl md:font-bold text-slate-600">Lidt om os</h2>
                    <p class="text-lg md:text-3xl font-black mt-5">Vi er et team af danske medarbejdere som bestreber os på at levere de bedste hver gang</p>
                    <p class="py-5 text-slate-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. miljø.
                    </p>
                    <ul class="flex gap-4 flex-col md:flex-row md:py-5">
                        <li class="flex items-center gap-2 mt-2">
                            <div class="inline-flex items-center justify-center bg-primary text-white rounded-full p-1 w-7 h-7">
                                <font-awesome :icon="faCheck" />
                            </div>
                            <p>Næsten 20 års erfaring</p>
                        </li>
                        <li class="flex items-center gap-2  mt-2">
                            <div class="inline-flex items-center justify-center bg-primary text-white rounded-full p-1 w-7 h-7">
                                <font-awesome :icon="faCheck" />
                            </div>
                            <p>Professionelle medarbejdere</p>
                        </li>
                        <li class="flex items-center gap-2  mt-2">
                            <div class="inline-flex items-center justify-center bg-primary text-white rounded-full p-1 w-7 h-7">
                                <font-awesome :icon="faCheck" />
                            </div>
                            <p>Miljøvenlige produkter</p>
                                
                        </li>
                    </ul>
                    <Button class="mt-10 p-6 text-xl">Læs mere</Button>
                </div>

                <div class="pb-10 lg:pb-0 lg:pl-20 order-1 lg:order-2 flex flex-wrap gap-4 basis-2">
                    <img src="/img/windowcleaner.jpg" alt="windowcleaner" class="w-10 h-48 lg:h-1/2 grow rounded-xl object-cover"/>
                    <img src="/img/windowcleaner.jpg" alt="windowcleaner" class="w-10 h-48 lg:h-1/2 grow rounded-xl object-cover"/>
                    <img src="/img/om-os.jpg" alt="windowcleaner" class="w-full h-64 lg:h-1/2 rounded-xl object-cover"/>
                </div>
            </div>
        </div>
    </div>

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
                                        <font-awesome :icon="faStar" class="text-yellow-500 text-sm" />
                                        <font-awesome :icon="faStar" class="text-yellow-500 text-sm" />
                                        <font-awesome :icon="faStar" class="text-yellow-500 text-sm" />
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

