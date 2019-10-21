import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authToken = localStorage.getItem('token');
        if (!authToken) {
            authToken = undefined;
        }
        const authRequest = request.clone({
            headers: request.headers.set('Authorization','Bearer ' + authToken)
        })
        return next.handle(authRequest);
    }
}
