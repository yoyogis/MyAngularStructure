import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { Router, ChildActivationStart, Event, ParamMap, ActivationStart, ResolveEnd,
  ActivationEnd, ChildActivationEnd, NavigationEnd, Params, NavigationStart } from '@angular/router';
import { AppService } from './app.service';

const routes: ModuleWithProviders = RouterModule.forRoot([
  {
    path: '',
    redirectTo: 'projects',
    pathMatch: 'full'
  },
  {
    path: 'projects',
    loadChildren: './a-projects/projects.module#ProjectsModule'
  }
]);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public routeParams: Params;

  constructor(private router: Router, private appService: AppService) {
    this.router.events.subscribe((e: Event) => {
      if ((e instanceof ChildActivationStart) || (e instanceof ActivationStart)) {
        console.log((typeof e), e.snapshot.url);
        if (e.snapshot.paramMap.keys.length) {
          Object.assign(this.routeParams, e.snapshot.params);
          this.appService.updateRouteParams(this.routeParams);
        }
      } else if (e instanceof NavigationStart) {
        this.routeParams = {};
        this.appService.updateRouteParams({});
      }
    });
  }
}
