import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../projects.service';
import { Observable } from 'rxjs';
import { RouterService } from '../../../../router.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  model: Observable<any>;
  constructor(private projectsService: ProjectsService, private routerService: RouterService) { }

  ngOnInit() {
    this.projectsService.getModel(this.routerService.routerParameters.modelId).subscribe(m => this.model = m);
  }

}
