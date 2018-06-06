import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects:Observable<Array<any>>;

  constructor(private projectsService:ProjectsService) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
  }

}
