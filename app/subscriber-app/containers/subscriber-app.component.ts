import { Component } from '@angular/core';
import { Subscriber } from '../models/subscriber.interface';

@Component({
    selector: 'subscriber-app',
    styleUrls: ['subscriber-app.component.scss'],
    template:`
    <form>
        <input type="text" name="name" placeholder="name" required>
        <input type="text" name="email" placeholder="email" required>
        <button>Add</button>
        <button>Export</button>
    </form>
    <div>
        <div *ngFor="let subscriber of subscribers">
            <div>
                {{ subscriber.name }} 
            </div>
            <div>
                {{ subscriber.email }}
            </div>
        </div>
    </div>
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
}