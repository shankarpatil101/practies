import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class ConfigService {

  // configUrl = 'assets/config.json';
  configUrl = 'src/app/pages/http-client/configs.json';

  constructor(private http: HttpClient) { }

  getConfig(): Observable<HttpResponse<Config>>  {
    return this.http.get<Config>(this.configUrl, { observe: 'response' });
  }

}