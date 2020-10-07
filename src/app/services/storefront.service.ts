import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule, HttpErrorResponse, HttpHeaders, HttpRequest, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Storefront } from '../storefront/storefront';
import { StorefrontImage } from '../storefront/storefront-image';
import { of } from 'rxjs/internal/observable/of';


@Injectable({
  providedIn: 'root'
})
export class StorefrontService {

  private storefrontUrl: string = "https://openapi.etsy.com/v2/listings/active.js?callback=callback&keywords=mars%20space&limit=8&api_key=m8ud7nm45drvcvdc7geg3tod";

  callback = 'callback';

  //This really should be kept in an environmental variable/otherwise put in .gitignore because it's private info
  private apiKey: string = "m8ud7nm45drvcvdc7geg3tod";

  private baseImageUrl: string = "https://openapi.etsy.com/v2/listings/";

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', }),
  };

  constructor(private http: HttpClient, private jsonp: HttpClientJsonpModule) {

  }

  getAllMarsProducts(callback = 'callback'): Observable<Storefront[]> {
    console.log(this.http.jsonp(this.storefrontUrl, callback).pipe(map(result => result['results'])))
    return this.http.jsonp(this.storefrontUrl, callback).pipe(map(result => result['results']));
  }

  getMarsProductImage(storefront: Storefront): Observable<StorefrontImage[]> {
    console.log(this.http.jsonp(this.baseImageUrl + storefront.listing_id + "/images.js?callback=callback&api_key=" + this.apiKey, this.callback).pipe(map(data => data['results'])))
    return this.http.jsonp(this.baseImageUrl + storefront.listing_id + "/images.js?callback=callback&api_key=" + this.apiKey, this.callback).pipe(map(data => data['results']));
  }


  postStorefrontItemUrl: string = "http://3.131.26.213:8080/spacegeecks/store";
  postStorefrontItem(newStorefront: Storefront): Observable<Storefront> {

    return this.http.post<Storefront>(this.postStorefrontItemUrl, newStorefront).pipe(map((data: Storefront) => {
      return data;
    }), catchError(this.handleError<Storefront>('getAllCartItems',))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      window.alert("My fault fam we are having some trouble ")
      return of(result as T);
    };
  }
}