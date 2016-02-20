import {bootstrap} from 'angular2/platform/browser';
import {bind} from 'angular2/core';
import {AppComponent} from "./app.component";
import {APP_BASE_HREF, ROUTER_BINDINGS} from 'angular2/router';

import {SalesforceService} from './services/Salesforce.service';
import {ProjectService} from './services/Project.service';

//noinspection TypeScriptValidateTypes
bootstrap(AppComponent, [
    ROUTER_BINDINGS,
    bind(APP_BASE_HREF).toValue(location.pathname),
    ProjectService,
    SalesforceService
]);
