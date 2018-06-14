import { Component, OnInit, Input } from '@angular/core';
import { RouterService } from 'src/app/router.service';
import { ProjectsService } from 'src/app/a-projects/projects.service';

@Component({
  selector: 'app-dataset-list',
  templateUrl: './dataset-list.component.html',
  styleUrls: ['./dataset-list.component.css']
})
export class DatasetListComponent implements OnInit {

  @Input() projectId: string;
  datasets: Array<any>;


  constructor(private projectService: ProjectsService, private routerService: RouterService) { }

  ngOnInit() {
    this.projectService.getDatasets(this.routerService.routerParameters.projectId).subscribe(ds => this.datasets = ds);
  }

}
