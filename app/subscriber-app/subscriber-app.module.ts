import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Containers
import { SubscriberAppComponent } from './containers/subscriber-app.component';

@NgModule({
    declarations:[
        SubscriberAppComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        HttpModule
    ],
    exports:[
        SubscriberAppComponent
    ]
})

export class SubscriberAppModule{}