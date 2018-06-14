import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RouterService } from './router.service';

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
  providers: [RouterService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private routerService: RouterService) {
  }
}
