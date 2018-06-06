import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectComponent } from './a-project/project/project.component';
import { DatasetsComponent } from './a-project/a-datasets/datasets/datasets.component';
import { DatasetListComponent } from './a-project/a-datasets/dataset-list/dataset-list.component';
// tslint:disable-next-line:max-line-length
import { DatasetOverviewComponent } from './a-project/a-datasets/a-dataset/a-overview/dataset-overview/dataset-overview.component';
import { DatasetScriptComponent } from './a-project/a-datasets/a-dataset/a-script/dataset-script/dataset-script.component';
import { DatasetIOComponent } from './a-project/a-datasets/a-dataset/a-io/dataset-io/dataset-io.component';
import { ModelListComponent } from './a-project/a-models/model-list/model-list.component';
import { ModelOverviewComponent } from './a-project/a-models/a-model/a-overview/model-overview/model-overview.component';
import { ProjectsComponent } from './projects/projects.component';
import { DatasetComponent } from './a-project/a-datasets/a-dataset/dataset/dataset.component';
import { ModelsComponent } from './a-project/a-models/models/models.component';
import { ModelComponent } from './a-project/a-models/a-model/model/model.component';

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
       path: 'datasets/:id',
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
       path: 'models/:id',
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
    ProjectListComponent,
    ProjectComponent,
    DatasetsComponent,
    DatasetListComponent,
    DatasetOverviewComponent,
    DatasetScriptComponent,
    DatasetIOComponent,
    ModelComponent,
    ModelsComponent,
    ModelListComponent,
    ModelOverviewComponent,
    DatasetComponent
  ]
})
export class ProjectsModule { }
