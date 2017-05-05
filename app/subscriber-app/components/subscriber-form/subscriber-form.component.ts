import { Component } from '@angular/core';

@Component({
    selector: 'subscriber-form',
    styleUrls: ['subscriber-form.component.scss'],
    template:`
        <form>
            <input type="text" name="name" placeholder="name" required>
            <input type="text" name="email" placeholder="email" required>
            <button>Add</button>
            <button>Export</button>
        </form>
    `
})

export class SubscriberFormComponent{
    constructor(){}
}