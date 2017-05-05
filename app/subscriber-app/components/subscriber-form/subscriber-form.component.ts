import { Component } from '@angular/core';

@Component({
    selector: 'subscriber-form',
    styleUrls: ['subscriber-form.component.scss'],
    template:`
        <form #form="ngForm" novalidate>
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

            <button>Add</button>
            <button>Export</button>
            {{ form.value | json }}
        </form>
    `
})

export class SubscriberFormComponent{
    constructor(){}
}