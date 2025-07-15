import {MenuItemType} from "@/types/menu.types";

class Menus{
    HOME:string = '/'
    SCHEDULE:string =  `${this.HOME}#schedule`
    SPEAKERS:string =  `${this.HOME}#speakers`
    TICKETS:string =  `${this.HOME}#tickets`
    VENUE:string =  `${this.HOME}#venue`
    SPONSORS:string =  `${this.HOME}#sponsors`
}

const menu = new Menus();

export const Menu:{[key: string]: MenuItemType} = {
    HOME:{
        title: 'Home',
        path: menu.HOME
    },
    SCHEDULE:{
        title: 'Schedule',
        path: menu.SCHEDULE
    },
    SPEAKERS:{
        title: 'Speakers',
        path: menu.SPEAKERS
    },
    TICKETS:{
        title: 'Tickets',
        path: menu.TICKETS
    },
    VENUE:{
        title: 'Venue',
        path: menu.VENUE
    },
    SPONSORS:{
        title: 'Sponsors',
        path: menu.SPONSORS
    },
}