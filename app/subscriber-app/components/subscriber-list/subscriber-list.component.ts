import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Subscriber } from '../../models/subscriber.interface';

@Component({
    selector: 'subscriber-list',
    styleUrls: ['subscriber-list.component.scss'],
    template:`
        <div>
            <div *ngIf="editing">
                <div>
                    <input type="text" [value]="detail.name" (input)="onNameChange(name.value)" #name>
                </div>
                <div>
                    <input type="text" [value]="detail.email" (input)="onNameChange(email.value)" #email>
                </div>
            </div>
            <div *ngIf="!editing">
                <div>
                    {{ detail.name }} 
                </div>
                <div>
                    {{ detail.email }}
                </div>
            </div>
            <button (click)="toggleEdit()">{{ editing ? 'Done' : 'Edit' }}</button>
            <button (click)="onRemove()">Remove</button>
        </div>
    `
})

export class SubscriberListComponent{
    constructor(){}
    //Data input from the parent container
    @Input()
    detail: Subscriber;

    //Editing subscriber details
    //Text form should be displayed when in edit mode
    editing: boolean = false; 

    //Emitting the changed data back to the parent container
    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    toggleEdit(){
        if(this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    //Removing subscriber
    //Emitting the selected data back to the parent container
    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    onRemove(){
        this.remove.emit(this.detail);
    }

}