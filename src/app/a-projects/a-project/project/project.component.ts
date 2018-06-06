import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../projects.service';
import { AppService } from '../../../app.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project:any

  constructor(private projectsService:ProjectsService, private appService:AppService) { 
    this.project = this.projectsService.getProject();
  }

  ngOnInit() {
    
  }

}
