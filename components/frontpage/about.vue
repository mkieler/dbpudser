<script setup>
import { Button } from '@/components/ui/button'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
</script>

<template>
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
</template>