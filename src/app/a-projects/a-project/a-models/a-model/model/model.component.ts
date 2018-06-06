import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../../projects.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  model:Observable<any>
  constructor(private projectsService:ProjectsService) { 
    this.model = this.projectsService.getModel()
  }

  ngOnInit() {
  }

}
