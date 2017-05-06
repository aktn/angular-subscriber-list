import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Subscriber } from '../../models/subscriber.interface';

@Component({
    selector: 'subscriber-list',
    styleUrls: ['subscriber-list.component.scss'],
    template:`
        <div class="subscriber-list">
            <div class="row">
                
                <div *ngIf="editing">
                    <div class="col-md-4">
                        <input type="text" [value]="detail.name" (input)="onNameChange(name.value)" #name>
                    </div>
                    <div class="col-md-4">
                        <input type="text" [value]="detail.email" (input)="onEmailChange(email.value)" #email>
                    </div>
                </div>
                    
                <div *ngIf="!editing">
                    <div class="col-md-4">
                        {{ detail.name }} 
                    </div>
                    <div class="col-md-4">
                        {{ detail.email }}
                    </div>
                </div>

                <div class="col-md-4">
                    <button (click)="toggleEdit()">{{ editing ? 'Done' : 'Edit' }}</button>
                    <button (click)="onRemove()">Delete</button>
                </div>

            </div>
        </div>
    `
})

export class SubscriberListComponent{
    constructor(){}
    //Data input from the parent container
    @Input()
    detail: Subscriber;

    onNameChange(value: string) {
        this.detail.name = value;
    }

    onEmailChange(value: string) {
        this.detail.email = value;
    }

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