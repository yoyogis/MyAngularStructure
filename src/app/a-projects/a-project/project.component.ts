import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { RouterService } from '../../router.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project: any;

  constructor(private projectsService: ProjectsService, private routerService: RouterService) {
    this.projectsService.getProject(this.routerService.routerParameters.projectId).subscribe((p) => this.project = p);
  }

  ngOnInit() {

  }

}
