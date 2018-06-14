import { TestBed, inject } from '@angular/core/testing';

import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsService]
    });
  });

  it('should be created', inject([ProjectsService], (service: ProjectsService) => {
    expect(service).toBeTruthy();
  }));

  it('should get a project list', inject([ProjectsService], (service: ProjectsService) => {
    service.getProjects().subscribe(r => {
      expect(r.length < 0).toBeTruthy();
    });
  }));
});
