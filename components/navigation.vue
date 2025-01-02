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
</script>


<template>
    <Sheet>
        <SheetTrigger class="bg-transparent md:hidden">
            <font-awesome :icon="faBars" class="text-2xl" />
        </SheetTrigger>
        <SheetContent>
            <ul class="text-slate-700 font-bold flex flex-col gap-5 mt-5">
                <li>Forside</li>
                <li>
                    <Accordion type="single" collapsible >
                        <AccordionItem value="item-1" class="border-0">
                            <AccordionTrigger class="p-0 font-bold">Services</AccordionTrigger>
                            <AccordionContent class="font-normal ml-3 mt-4">
                                <ul class="flex flex-col gap-3">
                                    <li>Vinduespolering</li>
                                    <li>Rengøring</li>
                                    <li>Noget andet</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </li>
                <li><a href="/om-os">Om os</a></li>
                <li><a href="/kontakt">Kontakt</a></li>
            </ul>
        </SheetContent>
  </Sheet>

    <NavigationMenu class="hidden md:flex">
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuLink 
                    href="/" 
                    :class="[
                        navigationMenuTriggerStyle(), 
                        'p-4', 
                        'bg-transparent', 
                        'hover:bg-transparent', 
                        'hover:text-primary'
                    ]">
                    Forside
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger style="background: unset !important" class='hover:text-primary'>Services</NavigationMenuTrigger>
                <NavigationMenuContent class="bg-white text-black">
                    <ul>
                        <li>
                            <NavigationMenuLink href="#" class="block p-4 min-w-40">Vinduespolering</NavigationMenuLink>
                        </li>
                        <li>
                            <NavigationMenuLink href="#" class="block p-4 min-w-40">Rengøring</NavigationMenuLink>
                        </li>
                        <li>
                            <NavigationMenuLink href="#" class="block p-4 min-w-40">Noget andet</NavigationMenuLink>
                        </li>
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink href="#" :class="[navigationMenuTriggerStyle(), 'p-4', 'bg-transparent','hover:bg-transparent', 'hover:text-primary']">
                    <a href="/om-os">Om os</a>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink href="#" :class="[navigationMenuTriggerStyle(), 'p-4',' bg-transparent','hover:bg-transparent', 'hover:text-primary']">
                    <a href="/kontakt">Kontakt</a>
                </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
</template>