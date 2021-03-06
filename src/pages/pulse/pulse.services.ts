import { AuthService } from './../../providers/auth.service';
// import { Headers } from '@angular/http';
import { Pulse } from './../../models/pulse';
import { AuthHttp } from 'angular2-jwt';
import { CONFIGURATION } from './../../providers/app.constants';
import { Injectable } from '@angular/core';
import { Surgery } from "../../models/Surgery";


@Injectable()
export class  PulseService {
  pulses: any;
  //  constructor() { }
  // get(): Observable<string[]> {
  //   return this.http.get('/assets/data.json')
  //                   .map((res: Response) => res.json())
  //                   .catch(this.handleError);
  // }

  //private headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(private authHttp: AuthHttp, private auth:AuthService)
  {

  }
  getAll(): Promise<Surgery[]>
  {

    console.log('URL:', this.auth);
    var url='http://surgipal.com/api/api.php/surgery/?transform=1&filter=doctor_id,eq,' + + this.auth.fosId;


// var url=CONFIGURATION.baseUrls.apiUrl +'surgeries/past/12';
    console.log('URL:',url);
    console.log('getAll surgeries()');
   // return this.authHttp.get(url, { headers: this.headers })
    return this.authHttp.get(url)
      .toPromise()
      .then(response => response.json().surgery as Surgery[])
      .catch(this.handleError);
  }


  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error('handleError in Pulse Servicess', errMsg); // log to console instead
    return errMsg;
  }
}
  // getAll(): Promise<GownSizes[]> {
  //   return this.http.get(this.url)
  //     .toPromise()
  //     .then(response => response.json().data as PulseItem[])
  //     .catch(this.handleError);

  // }
  // get(id: number): Promise<GownSize> {
  //   const url = `${this.url}/${id}`;
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(response => response.json().data as GownSize)
  //     .catch(this.handleError);
  // }
  // delete(id: number): Promise<void> {
  //   console.log('delete' + id);
  //   const url = `${this.url}/${id}`;
  // //  return this.http.delete(url, { headers: this.headers })
  //   return this.http.delete(url)
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError);
  // }
  // create(name: string): Promise<GownSize> {
  //   console.log('create' + name);
  //   return this.http
  //   //  .post(this.url, JSON.stringify({ name: name }), { headers: this.headers })
  //    .post(this.url, JSON.stringify({ name: name }))
  //     .toPromise()
  //     .then(res => res.json().data)
  //     .catch(this.handleError);
  // }
  // update(hero: GownSize): Promise<GownSize> {
  //   console.log('heroserv', hero);
  //   const url = `${this.url}/${hero.id}`;
  //   console.log('url', url);
  //   return this.http
  //     // .put(url, JSON.stringify(hero), { headers: this.headers })
  //     .put(url, JSON.stringify(hero))
  //     .toPromise()
  //     .then(() => hero)
  //     .catch(this.handleError);
  // }



