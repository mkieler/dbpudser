


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
</template>