import { Component } from '@angular/core';
import { Subscriber } from '../models/subscriber.interface';

@Component({
    selector: 'subscriber-app',
    styleUrls: ['subscriber-app.component.scss'],
    template:`
    <subscriber-form></subscriber-form>
    <subscriber-list 
        *ngFor="let subscriber of subscribers;"
        [detail]="subscriber"
        (remove)="handleRemove($event)"
        (edit)="handleEmit($event)">
    </subscriber-list>
    `
})

export class SubscriberAppComponent{
    subscribers: Subscriber[] = [{
        name: "Joe",
        email: "joe@yahoo.com"
    },{
        name: "Michael",
        email:"michael.gmail.com"
    }];   

    handleRemove(subscriber) {
        console.log(subscriber);
    }

    handleEmit(subscriber){
        console.log(subscriber);
    }
}