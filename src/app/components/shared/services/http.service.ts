import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(
    private http: HttpClient,
  ) {}

  get(route: string, options?: any) {

    let queryString = '';

    if (options) {
      queryString = Object.keys(options).reduce((str, key) => `${str}&${key}=${options[key].toString()}`, '');
      queryString = `?${queryString.substr(1)}`;
    }

    const url = `http://localhost:3000${route}${queryString}`;

    return this.http.get(url);
  }
}
