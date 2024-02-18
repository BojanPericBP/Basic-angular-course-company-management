import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, first } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService<InputT extends { id: string | null }, RetT> {
  // TODO create service
  private _httpClient = inject(HttpClient);

  protected serviceUrl!: string;

  protected initService(serviceUrl: string) {
    this.serviceUrl = serviceUrl;
  }

  public getItems() {
    return this._httpClient.get<RetT[]>(
      environment.apiURL + '/' + this.serviceUrl
    );
  }

  public getItemById(id: string): Observable<RetT> {
    return this._httpClient.get<RetT>(
      environment.apiURL + '/' + this.serviceUrl + '/' + id
    );
  }

  public createNewItem(data: InputT) {
    // TODO STEP kreiranje observable objekta za kreiranje usera
    return this._httpClient
      .post<RetT>(environment.apiURL + '/' + this.serviceUrl, data)
      .pipe(first());
  }

  public editItem(data: InputT) {
    //TODO STEP editovanje usera
    return this._httpClient
      .patch<RetT>(
        environment.apiURL + '/' + this.serviceUrl + '/' + data.id,
        data
      )
      .pipe(first());
  }

  public deleteItem(id: string) {
    //TODO STEP brisanje posojeceg korisnika
    return this._httpClient
      .delete(environment.apiURL + '/' + this.serviceUrl + '/' + id)
      .pipe(first());
  }
}
