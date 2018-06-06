import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from '../../../../projects.service';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent implements OnInit {

  dataset:Observable<any>
  constructor(private projectsService:ProjectsService) { 
    this.dataset = this.projectsService.getDataset();
  }

  ngOnInit() {
  }

}
