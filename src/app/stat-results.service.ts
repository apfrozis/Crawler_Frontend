import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Game } from './models/game';

import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})


export class StatResultsService {
  httpOptions = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Headers": "Content-Type"
    })
 };

  constructor(private http: HttpClient) {
   }

  getListaJogosAnalisados(data_pesquisa): Observable<any> {
    const url = environment.apiUrl;
    this.httpOptions['params'] = new HttpParams().set('search', data_pesquisa)
    return this.http.get<any>(url, this.httpOptions).pipe(
      tap(_ => this.log(`fetched hero id=`)),
      catchError(this.handleError<any>(`getHero id=`))
    );

  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  }


}
