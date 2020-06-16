import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Url} from '../../enums/urls.enum' 
import {Observable} from 'rxjs'
import {QueryParams} from '../xhr/queryParams.interface';

@Injectable({
  providedIn: 'root'
})
export class XhrService {

  private readonly END_POINT: string; 
  constructor(private http: HttpClient) {
    this.END_POINT = Url.fake;
  }

  /**
   *
   * * the user here can pass the return type
   *      e.g : this.serviec.get<_TYPE_>(....)
   * * if the user dose not provide an id this will just get all
   * resources for a specific route
   * * this will work on get and delete request with query params filtering
   */
  get<returnType>(
    id: number | null,
    route: string,
    qp: QueryParams = {},
    method: 'get' | 'delete' = 'get'
  ): Observable<returnType> {
    const formattedParams = this.formatParams(qp);
    return this.http[method](
      `${this.END_POINT}/${route}${id ? '/' + id : ''}${formattedParams}`
    ) as Observable<returnType>;
  }

  /**
   * this method will patch or post to any route
   * you choose
   */
  post<returnType>(
    route: string,
    data: any,
    id: number = null,
    method: 'post' | 'patch' = 'post',
    qp: QueryParams = {}
  ): Observable<returnType> {
    const formattedParams = this.formatParams(qp);
    return this.http[method](
      `${this.END_POINT}/${route}${id ? '/' + id : ''}${formattedParams}`,
      data
    ) as Observable<returnType>;
  }

  /**
   * In the return we will attach the '?' if the user provides a query params
   * and if the user provides a null we do not need to map the array to
   * anything, we just simply returns ''.
   * if there qp dose has some keys an values
   * e.g
   * const z = {userId: 1, name: 'John'} then
   * this method will return ["userId=1", "name=rowad"]
   */
  private formatParams(qp: QueryParams): string {
    if (qp == null) {
      return '';
    }
    const qpAsStr = this.mapQueryParamsToUrl(qp);
    return qpAsStr.length === 0 ? '' : `?${qpAsStr.join('&')}`;
  }

  /**
   * e.g :
   * const z = {userId: 1, name: 'John'} then
   * this method will return ["userId=1", "name=rowad"]
   */
  private mapQueryParamsToUrl(qp: QueryParams): Array<string> {
    return Object.keys(qp).map((key: string) => {
      return `${key}=${qp[key]}`;
    });
  }
}
