import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Subscriber } from './models/subscriber.interface';

const SUBSCRIBER_API: string = '/api/subscribers';

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

    updateSubscriber(subscriber: Subscriber): Observable<Subscriber> {
        
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let options = new RequestOptions({
            headers : headers
        });

        return this.http
            .put(`${SUBSCRIBER_API}/${subscriber.id}`, subscriber, options)
            .map((response: Response)=> response.json())
            .catch((error: any)=> Observable.throw(error.json()));
    }

    deleteSubscriber(subscriber: Subscriber): Observable<Subscriber> {
        return this.http
            .delete(`${SUBSCRIBER_API}/${subscriber.id}`)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }

    createSubscriber(subscriber: Subscriber): Observable<Subscriber>{
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let options = new RequestOptions({
            headers : headers
        });

        return this.http    
            .post(`${SUBSCRIBER_API}`, subscriber, options)
            .map((response: Response) => response.json())
            .catch((error: any) => Observable.throw(error.json()));
    }
    
    //To export data into php file
    exportCSV(): Observable<Subscriber[]> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        let options = new RequestOptions({
            headers : headers
        });

        const obj = { name: 'gabriel', age: 20 };
        const body = 'data=' + JSON.stringify(obj);

        return this.http
            .get('http://localhost:9000/csv.php')
            .map((response:Response) => response.json())
            .catch((error: any)=> Observable.throw(error.json()));
    }
}