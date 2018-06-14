import { Injectable } from '@angular/core';
import { Router, ChildActivationStart, ActivationStart, ActivationEnd, ChildActivationEnd, NavigationStart } from '@angular/router';

@Injectable()
export class RouterService {
  private _routerParameters: any;

  constructor(private router: Router) {
    this.router.events.subscribe(evt => {
      if (evt instanceof ChildActivationStart || evt instanceof ActivationStart || evt instanceof ActivationEnd ||
        evt instanceof ChildActivationEnd) {
        Object.assign(this._routerParameters, evt.snapshot.params);
      } else if (evt instanceof NavigationStart) {
        this._routerParameters = {};
      }
    });
  }

  get routerParameters() {
    return this._routerParameters;
  }

}
