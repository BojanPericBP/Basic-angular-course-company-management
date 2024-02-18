import { Injectable } from '@angular/core';
import { Project, ProjectInput } from 'src/app/core/models/core-types';
import { BaseService } from 'src/app/core/services/base-service.service';

@Injectable({
  providedIn: 'root',
})
export class ProjectService extends BaseService<ProjectInput, Project> {
  constructor() {
    super();
    this.initService('projects');
  }
}
