import { Injectable } from '@angular/core';
import { Team, TeamInput } from 'src/app/core/models/core-types';
import { BaseService } from 'src/app/core/services/base-service.service';

@Injectable({
  providedIn: 'root',
})
export class TeamsService extends BaseService<TeamInput, Team> {
  constructor() {
    super();
    this.initService('teams');
  }
}
