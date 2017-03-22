import { Message } from './../../models/message';
import { AuthService } from './../../providers/auth.service';
// import { Headers } from '@angular/http';

import { AuthHttp } from 'angular2-jwt';
import { CONFIGURATION } from './../../providers/app.constants';
import { Injectable } from '@angular/core';


@Injectable()
export class MessageService
{


  constructor(private authHttp: AuthHttp, private auth: AuthService)
  {

  }
  getAll(): Promise<Message[]>
  {
    var url = CONFIGURATION.baseUrls.apiUrl + 'messages/doctors/' + this.auth.surgipalId;
    console.log('Message URL:', url);
    return this.authHttp.get(url)
      .toPromise()
      .then(response => response.json() as Message[])
      .catch(this.handleError);
  }

  // getMessages()
  // {
  //   var url = CONFIGURATION.baseUrls.apiUrl + 'messages/doctors/' + this.auth.surgipalId;

  //   return this.authHttp.get(url).map((data: any) =>
  //   {
  //     return data.speakers.sort((a: any, b: any) =>
  //     {
  //       let aName = a.name.split(' ').pop();
  //       let bName = b.name.split(' ').pop();
  //       return aName.localeCompare(bName);
  //     });
  //   });
  // }



  get(id: number): Promise<Message>
  {
    const url = CONFIGURATION.baseUrls.apiUrl + 'messages/' + id;
    return this.authHttp.get(url)
      .toPromise()
      .then(response => response.json() as Message)
      .catch(this.handleError);
  }
  private handleError(error: any)
  {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error('handleError in Message Servicess', errMsg); // log to console instead
    return errMsg;
  }
}