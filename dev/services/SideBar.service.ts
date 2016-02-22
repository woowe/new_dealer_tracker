import {Injectable} from 'angular2/core';
import {implementsInterface} from "../utils/utils";

interface SidebarItem {
    name: string,
    icon: string,
    link: string,
    component: any
}

const SidebarItem_scheme = {
    name: "string",
    icon: "string",
    link: "string",
    component: "object"
}

@Injectable()
export class SideBarService {
    __SIDEBAR_BUTTONS: Object[] = [
        {
            name: "Dashboard",
            icon: "data_usage",
            link: "./Dashboard"
        },
        {
            name: "Projects",
            icon: "queue",
            link: "./Projects"
        },
    ];

    selected: SidebarItem;
    register(obj) {
        if (implementsInterface(SidebarItem_scheme, obj))
            this.__SIDEBAR_BUTTONS.push(obj);
    }
}
