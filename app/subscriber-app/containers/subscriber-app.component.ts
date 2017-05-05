import { Component, OnInit } from '@angular/core';
import { Subscriber } from '../models/subscriber.interface';
import { SubscriberAppService } from '../subscriber-app.service';

@Component({
    selector: 'subscriber-app',
    styleUrls: ['subscriber-app.component.scss'],
    template:`
    <subscriber-form
        (onSubmit)="handleOnSubmit($event)">
    </subscriber-form>
    <subscriber-list 
        *ngFor="let subscriber of subscribers;"
        [detail]="subscriber"
        (remove)="handleRemove($event)"
        (edit)="handleEdit($event)">
    </subscriber-list>
    `
})

export class SubscriberAppComponent implements OnInit{
    
    //Dependecy Injected Services
    constructor(private subscriberService: SubscriberAppService){}
    
    //Subscribing data from the service
    ngOnInit(){
        this.subscriberService.getSubscribers().subscribe((data:Subscriber[])=>this.subscribers=data);
    }

    subscribers: Subscriber[] = [];   

    handleRemove(remove: Subscriber) {
        this.subscriberService.deleteSubscriber(remove)
        .subscribe((data: Subscriber)=>{
            //Filtering particular subscriber from the array of subscribers
            this.subscribers = this.subscribers.filter((subscriber: Subscriber)=>{
                //if id matches
                return subscriber.id !== remove.id; 
             });
         })
    }

    handleEdit(edit: Subscriber){
        this.subscriberService.updateSubscriber(edit).subscribe((data: Subscriber)=>{
            this.subscribers = this.subscribers.map((subscriber: Subscriber)=>{
                //Check if id identical
                if(subscriber.id === edit.id){
                    //Overiding orignial data with the new changes
                    subscriber = Object.assign({}, subscriber, edit);
                }
                return subscriber;
            });
        })
    }

    handleOnSubmit(create: Subscriber){
        this.subscriberService.createSubscriber(create).subscribe((data: Subscriber)=>{
            this.subscribers.push(create);
        });
    }
}