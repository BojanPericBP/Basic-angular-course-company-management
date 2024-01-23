import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  protected httpClient = inject(HttpClient);
  public url = environment.apiURL;

  constructor() {}
}
