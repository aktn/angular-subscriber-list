import { Component, Output, EventEmitter } from '@angular/core';
import { Subscriber } from '../../models/subscriber.interface';

@Component({
    selector: 'subscriber-form',
    styleUrls: ['subscriber-form.component.scss'],
    template:`
        <form #form="ngForm" (ngSubmit)="handleSubmit(form.value,form.valid)" novalidate>
            <input type="text" 
                   name="name" 
                   placeholder="name" 
                   #name="ngModel" 
                   ngModel 
                   required>
            <div *ngIf="name.errors?.required && name.dirty">Name Required</div>

            <input type="text" 
                   name="email" 
                   placeholder="email" 
                   #email="ngModel" 
                   ngModel 
                   required >
            <div *ngIf="email.errors?.required && email.dirty">Email Required</div>

            <button type="submit" [disabled]="!form.valid">Add</button>
            <button>Export</button>
            {{ form.value | json }}
        </form>
    `
})

export class SubscriberFormComponent{
    constructor(){}

    @Output()
    onSubmit: EventEmitter<Subscriber> = new EventEmitter<Subscriber>();

    handleSubmit(subscriber: Subscriber, isValid: boolean){
        if(isValid){
            this.onSubmit.emit(subscriber);
        }
    }
}