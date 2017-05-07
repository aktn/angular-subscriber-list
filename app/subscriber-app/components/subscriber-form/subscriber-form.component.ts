import { Component, Output, EventEmitter } from '@angular/core';
import { Subscriber } from '../../models/subscriber.interface';

@Component({
    selector: 'subscriber-form',
    styleUrls: ['subscriber-form.component.scss'],
    template:`
        <form #form="ngForm" (ngSubmit)="handleSubmit(form.value,form.valid); form.reset()" novalidate>
            <input type="text" 
                   name="name" 
                   placeholder="name" 
                   #name="ngModel" 
                   ngModel 
                   required>
            

            <input type="text" 
                   name="email" 
                   placeholder="email" 
                   #email="ngModel" 
                   ngModel 
                   required
                   pattern="[^ @]*@[^ @]*">
            

            <button type="submit" [disabled]="!form.valid">Add</button>
            <button (click)="exportCSV()">Export</button>

            <div>
                <div *ngIf="name.errors?.required && name.dirty" class="error">Name Required</div>
                <div>
                    <div *ngIf="email.errors?.required && email.dirty" class="error">Email Required></div>
                    <div *ngIf="email.errors?.pattern && email.touched" class="error">Invalid Email Format</div>
                </div> 
            </div>
            
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
       // this.form.reset();
    }

    @Output()
    export = new EventEmitter<any>();
    
    exportCSV(){
        this.export.emit(event);
    }
}