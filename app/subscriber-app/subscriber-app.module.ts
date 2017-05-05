import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Containers
import { SubscriberAppComponent } from './containers/subscriber-app.component';
import { SubscriberListComponent } from './components/subscriber-list/subscriber-list.component';
import { SubscriberFormComponent } from './components/subscriber-form/subscriber-form.component';

@NgModule({
    declarations:[
        SubscriberAppComponent,
        SubscriberListComponent,
        SubscriberFormComponent
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