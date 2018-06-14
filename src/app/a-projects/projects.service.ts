import { Injectable } from '@angular/core';
import { Observable, of, Observer } from 'rxjs';
import { ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private routerParamMap: ParamMap;

  private mockData = {
    'project': [
      {
        id: 'AABB',
        name: 'project-A'
      }, {
        id: 'BBCC',
        name: 'project-B'
      }, {
        id: 'CCDD',
        name: 'project-C'
      }
    ],
    model: [
      {
        id: 'md1',
        name: 'model-1',
        projectId: 'AABB'
      }, {
        id: 'md2',
        name: 'model-2',
        projectId: 'AABB'
      }, {
        id: 'md3',
        name: 'model-3',
        projectId: 'AABB'
      },
      {
        id: 'PB-md1',
        name: 'PB-model-1',
        projectId: 'BBCC'
      }, {
        id: 'PB-md2',
        name: 'PB-model-2',
        projectId: 'BBCC'
      }, {
        id: 'PB-md3',
        name: 'PB-model-3',
        projectId: 'BBCC'
      },
      {
        id: 'PC-md1',
        name: 'PC-model-1',
        projectId: 'CCDD'
      }, {
        id: 'PC-md2',
        name: 'PC-model-2',
        projectId: 'CCDD'
      }, {
        id: 'PC-md3',
        name: 'PC-model-3',
        projectId: 'CCDD'
      }
    ],
    dataset: [
      {
        id: 'ds1',
        name: 'dataset-1',
        projectId: 'AABB'
      }, {
        id: 'ds2',
        name: 'dataset-2',
        projectId: 'AABB'
      }, {
        id: 'ds3',
        name: 'dataset-3',
        projectId: 'AABB'
      },
      {
        id: 'PB-ds1',
        name: 'PB-dataset-1',
        projectId: 'BBCC'
      }, {
        id: 'PB-ds2',
        name: 'PB-dataset-2',
        projectId: 'BBCC'
      }, {
        id: 'PB-ds3',
        name: 'PB-dataset-3',
        projectId: 'BBCC'
      },
      {
        id: 'PC-ds1',
        name: 'dataset-1',
        projectId: 'CCDD'
      }, {
        id: 'PC-ds2',
        name: 'dataset-2',
        projectId: 'CCDD'
      }, {
        id: 'PC-ds3',
        name: 'dataset-3',
        projectId: 'CCDD'
      }
    ]
  };

  constructor() { }

  public getProjects(): Observable<Array<any>> {
    return Observable.create((observe: Observer<Array<any>>) => {
      observe.next(this.mockData.project);
    });
  }

  public getProject(projectId: string): Observable<any> {
    return Observable.create((observe: Observer<any>) => {
      observe.next(this.mockData.project.filter(p => p.id === projectId)[0]);
    });
  }

  public getDatasets(projectId: string): Observable<any> {
    return Observable.create((observe: Observer<any>) => {
      observe.next(this.mockData.dataset.filter(d => d.projectId === projectId));
    });
  }

  public getDataset(datasetId: string): Observable<any> {
    return Observable.create((observe: Observer<any>) => {
      observe.next(this.mockData.dataset.filter(d => d.id === datasetId)[0]);
    });
  }

  public getModels(projectId: string): Observable<any> {
    return Observable.create((observe: Observer<any>) => {
      observe.next(this.mockData.model.filter(d => d.projectId === projectId));
    });
  }

  public getModel(modelId: string): Observable<any> {
    return Observable.create((observe: Observer<any>) => {
      observe.next(this.mockData.model.filter(d => d.id === modelId)[0]);
    });
  }


}
