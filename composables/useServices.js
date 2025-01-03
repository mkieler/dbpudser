export function useServices() {
    const serviceItems = [
        {
            name: "Vinduespolering",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            description: "Description 1",
            slug: "vinduespolering",
            image: "/img/windowcleaner.jpg"
        },{
            name: "Rengøring",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            description: "Description 2",
            slug: "rengoring",
            image: "/img/windowcleaner.jpg"
        },{
            name: "Algebehandling",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            description: "Description 3",
            slug: "algebehandling",
            image: "/img/windowcleaner.jpg"
        },{
            name: "Fliserens",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            description: "Description 4",
            slug: "fliserens",
            image: "/img/windowcleaner.jpg"
        },{
            name: "Facadevask",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            description: "Description 5",
            slug: "facadevask",
            image: "/img/windowcleaner.jpg"
        },{
            name: "Tagrens",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            description: "Description 6",
            slug: "tagrens",
            image: "/img/windowcleaner.jpg"
        },{
            name: "Varmtvandsrensning",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            description: "Description 8",
            slug: "varmtvandsrensning",
            image: "/img/windowcleaner.jpg"
        }
    ];

    const getServiceItem = (slug) => {
        return serviceItems.find(item => item.slug === slug);
    }


    return {
        serviceItems,
        getServiceItem
    };
}