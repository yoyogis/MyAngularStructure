import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectComponent } from './a-project/project.component';
import { DatasetsComponent } from './a-project/a-datasets/datasets.component';
import { DatasetListComponent } from './a-project/a-datasets/dataset-list/dataset-list.component';
// tslint:disable-next-line:max-line-length
import { DatasetOverviewComponent } from './a-project/a-datasets/a-dataset/a-overview/dataset-overview.component';
import { DatasetScriptComponent } from './a-project/a-datasets/a-dataset/a-script/dataset-script.component';
import { DatasetIOComponent } from './a-project/a-datasets/a-dataset/a-io/dataset-io.component';
import { ProjectsComponent } from './projects.component';
import { DatasetComponent } from './a-project/a-datasets/a-dataset/dataset.component';
import { ModelsComponent } from './a-project/a-models/models.component';
import { ModelComponent } from './a-project/a-models/a-model/model.component';
import { ModelOverviewComponent } from './a-project/a-models/a-model/a-overview/model-overview.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: ':projectId',
    component: ProjectComponent, // 包含一个Header，供它的子路有共享: datasets&dataset&models&model
    children: [
      {
        path: 'datasets',
        component: DatasetsComponent
      },
      {
        path: 'datasets/:datasetId',
        component: DatasetComponent, // 包含一个tab，它的子路由共享
        children: [
          {
            path: 'overview',
            component: DatasetOverviewComponent
          },
          {
            path: 'io',
            component: DatasetIOComponent
          },
          {
            path: 'script',
            component: DatasetScriptComponent
          }
        ]
      },
      {
        path: 'models',
        component: ModelsComponent
      },
      {
        path: 'models/:modelId',
        component: ModelComponent, // 包含一个tab，它的子路由共享
        children: [
          {
            path: 'overview',
            component: ModelOverviewComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    DatasetsComponent,
    DatasetListComponent,
    DatasetOverviewComponent,
    DatasetScriptComponent,
    DatasetIOComponent,
    ModelComponent,
    ModelsComponent,
    ModelOverviewComponent,
    DatasetComponent
  ]
})
export class ProjectsModule { }
