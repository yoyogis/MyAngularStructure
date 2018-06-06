import { Injectable } from '@angular/core';
import {
  Router, ChildActivationStart, Event, ParamMap, ActivationStart,
  ResolveEnd, ActivationEnd, ChildActivationEnd, NavigationEnd, Params, NavigationStart
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private routeParams: Params = {};

  constructor(private router: Router) {

  }

  public updateRouteParams(params) {
    this.routeParams = params;
  }

  public getRouteParam(name: string) {
    return this.routeParams[name];
  }

}
