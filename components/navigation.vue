<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { faBars } from '@fortawesome/free-solid-svg-icons'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const { serviceItems } = useServices();

const menuItems = [
  { title: 'Forside', href: '/' },
  { title: 'Services',
    items: serviceItems.map((service) => {
        return {
            title: service.name,
            href: `/services/${service.slug}`,
        }
    }),
  },
  { title: 'Om os', href: '/om-os' },
  { title: 'Kontakt', href: '/kontakt' },
]
</script>


<template>
    <Sheet>
        <SheetTrigger class="bg-transparent md:hidden">
            <font-awesome :icon="faBars" class="text-2xl text-white" />
        </SheetTrigger>
        <SheetContent>
            <ul class="text-slate-700 font-bold flex flex-col gap-5 mt-5">
                <li v-for="item in menuItems" :key="`mobile-${item.title}`">
                    <Accordion v-if="item.items" type="single" collapsible >
                        <AccordionItem value="item-1" class="border-0">
                            <AccordionTrigger class="p-0 font-bold">Services</AccordionTrigger>
                            <AccordionContent class="font-normal ml-3 mt-4">
                                <ul class="flex flex-col gap-3">
                                    <li v-for="subItem in item.items" :key="`mobile-sub-${item.title}`">
                                        <SheetTrigger as-child>
                                            <NuxtLink :to="subItem.href">{{ subItem.title }}</NuxtLink>
                                        </SheetTrigger>
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <SheetTrigger as-child v-else>
                        <NuxtLink :href="item.href" class="[&.router-link-active]:text-primary">{{ item.title }}</NuxtLink>
                    </SheetTrigger>
                </li>
            </ul>
        </SheetContent>
  </Sheet>

    <NavigationMenu class="hidden md:flex text-base text-slate-500 group-[.transparent]:text-slate-300">
        <NavigationMenuList>
            <NavigationMenuItem v-for="item in menuItems" :key="item.title">
                <template v-if="item.items">
                    <NavigationMenuTrigger class='desktop-nav-link font-normal [&.router-link-active]:font-bold'>Services</NavigationMenuTrigger>
                    <NavigationMenuContent class="bg-white text-black">
                        <ul>
                            <li v-for="subItem in item.items">
                                <NavigationMenuLink :href="subItem.href" class="block p-4 min-w-40 hover:text-primary">{{ subItem.title }}</NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </template>

                <NuxtLink 
                    v-else 
                    :to="item.href" 
                    :class="[
                        'desktop-nav-link',
                        'p-4',
                        'font-normal',
                        'bg-transparent', 
                        'hover:bg-transparent', 
                        'hover:text-white',
                    ]"
                    >
                    {{ item.title }}
                </NuxtLink>
                
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Button as-child>
                    <a href="/tilbud" class="">Få et tilbud</a>
                </Button>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
</template>

<style>
    .desktop-nav-link{
        &:hover{
            color: black;
        }
    
        &.router-link-active{
            color: black;
            font-weight: bold;
        }
    }

    .transparent{
        & .desktop-nav-link {
            &:hover{
                color: white;
            }
        
            &.router-link-active{
                color: white;
            }
        }
    }
</style>