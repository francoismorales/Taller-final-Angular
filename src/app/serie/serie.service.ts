import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Serie } from './serie';
import { SerieDetail } from './serieDetail';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private apiUrl: string = environment.baseUrl + 'series';

  constructor(private http: HttpClient) { }

  getSeries(): Observable<SerieDetail[]> {
    return this.http.get<SerieDetail[]>(this.apiUrl);
  }

  getSerie(id: string): Observable<SerieDetail>{
    return this.http.get<SerieDetail>(this.apiUrl+"/"+id)
  }

}
