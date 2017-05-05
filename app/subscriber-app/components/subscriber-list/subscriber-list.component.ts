import { Component, Input } from '@angular/core';
import { Subscriber } from '../../models/subscriber.interface';

@Component({
    selector: 'subscriber-list',
    styleUrls: ['subscriber-list.component.scss'],
    template:`
        <div>
            <div>
                {{ detail.name }} 
            </div>
            <div>
                {{ detail.email }}
            </div>
        </div>
    `
})

export class SubscriberListComponent{
    constructor(){}

    editing: boolean = false;

    @Input()
    detail: Subscriber;

}