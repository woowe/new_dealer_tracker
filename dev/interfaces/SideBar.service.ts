import {Injectable} from 'angular2/core';


@Injectable()
export class SideBarService {
  __SIDEBAR_BUTTONS: Object[] = [
    {
      name: "Dashboard",
      icon: "data_usage",
      onClick: 'onDashboardClick',
      subitems: []
    },
    {
      name: "Projects",
      icon: "queue",
      onClick: 'onProjectsClick',
      subitems: []
    },
  ]
  register(obj, func) {

  }
}
