import { Injectable } from '@angular/core';
import { Observable, of, Observer } from 'rxjs';
import { ActivatedRoute, ParamMap, Router, Event, NavigationStart, ChildActivationStart } from '@angular/router';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private routerParamMap: ParamMap;

  constructor(private appService: AppService) { }

  public getProjects(): Observable<Array<any>> {
    return Observable.create((observe: Observer<Array<any>>) => {
      setTimeout(function () {
        observe.next([100, 200, 300, 400]);
      }, 1000);
    });
  }

  public getProject(): Observable<any> {
    return Observable.create((observe: Observer<any>) => {
      observe.next(this.appService.getRouteParam('projectId'));
    });
  }

  public getDataset(): Observable<any> {
    return Observable.create((observe: Observer<any>) => {
      observe.next(this.appService.getRouteParam('id'));
    });
  }

  public getModel(): Observable<any> {
    return Observable.create((observe: Observer<any>) => {
      observe.next(this.appService.getRouteParam('id'));
    });
  }


}
