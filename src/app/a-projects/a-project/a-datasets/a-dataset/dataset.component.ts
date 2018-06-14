import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from '../../../projects.service';
import { RouterService } from '../../../../router.service';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent implements OnInit {

  dataset: Observable<any>;
  constructor(private projectsService: ProjectsService, private routerService: RouterService) {
  }

  ngOnInit() {
    this.projectsService.getDataset(this.routerService.routerParameters.datasetId).subscribe(ds => this.dataset = ds);
  }

}
