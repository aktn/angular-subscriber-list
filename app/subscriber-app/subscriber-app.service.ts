import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Subscriber } from './models/subscriber.interface';

@Injectable()
export class SubscriberAppService{
    constructor(private http:Http){}

    getSubscribers(): Observable<Subscriber[]>{
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let options = new RequestOptions({
            headers : headers
        });

        return this.http
            .get('/api/subscribers', options)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }
}