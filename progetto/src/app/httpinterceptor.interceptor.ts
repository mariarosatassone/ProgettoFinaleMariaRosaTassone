import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpinterceptorInterceptor implements HttpInterceptor {

  tenantID = 'fe_0621';
  bearerToken = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY0NDM5OTk2MywiZXhwIjoxNjQ1MjYzOTYzfQ.auM1vWmWHdWAXgJ7Y3HmqynCPRzF6hs3991S7CmbWJil92tdsAauJf7Ceh-BrKvMtOeYHb-J1HvsInGa5iP_Og'
  

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let myRequest: HttpRequest<any> = request;
    myRequest = request.clone(
      {headers: request.headers.set("Authorization", this.bearerToken)
                               .set("X-TENANT-ID", this.tenantID)
    }
    ) 



    return next.handle(myRequest);
  }
}
