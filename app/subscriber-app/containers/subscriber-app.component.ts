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
        (edit)="handleEdit($event)">
    </subscriber-list>
    `
})

export class SubscriberAppComponent{
    subscribers: Subscriber[] = [{
        id: 1,
        name: "Joe",
        email: "joe@yahoo.com"
    },{
        id: 2,
        name: "Michael",
        email:"michael.gmail.com"
    }];   

    handleRemove(remove: Subscriber) {
        //Filtering particular subscriber from the array of subscribers
         this.subscribers = this.subscribers.filter((subscriber: Subscriber)=>{
             //if id matches
            return subscriber.id !== remove.id; 
        })
    }

    handleEdit(edit: Subscriber){
       this.subscribers = this.subscribers.map((subscriber: Subscriber)=>{
        //Check if id identical
        if(subscriber.id === edit.id){
            //Overiding orignial data with the new changes
            subscriber = Object.assign({}, subscriber, edit);
        }
        return subscriber;
       });
       
    }
}