import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../projects.service';
import { RouterService } from '../../../router.service';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {

  models: Array<any>;

  constructor(private projectsService: ProjectsService, private routerService: RouterService) { }

  ngOnInit() {
    this.projectsService.getModels(this.routerService.routerParameters.projectId).subscribe((p) => this.models = p);
  }

}
