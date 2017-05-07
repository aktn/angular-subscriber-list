"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SubscriberListComponent = (function () {
    function SubscriberListComponent() {
        //Editing subscriber details
        //Text form should be displayed when in edit mode
        this.editing = false;
        //Emitting the changed data back to the parent container
        this.edit = new core_1.EventEmitter();
        //Removing subscriber
        //Emitting the selected data back to the parent container
        this.remove = new core_1.EventEmitter();
    }
    SubscriberListComponent.prototype.ngOnChanges = function (changes) {
        if (changes.detail) {
            this.detail = Object.assign({}, changes.detail.currentValue);
        }
    };
    SubscriberListComponent.prototype.onNameChange = function (value) {
        this.detail.name = value;
    };
    SubscriberListComponent.prototype.onEmailChange = function (value) {
        this.detail.email = value;
    };
    SubscriberListComponent.prototype.toggleEdit = function () {
        if (this.editing) {
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    };
    SubscriberListComponent.prototype.onRemove = function () {
        this.remove.emit(this.detail);
    };
    return SubscriberListComponent;
}());
__decorate([
    core_1.Input()
], SubscriberListComponent.prototype, "detail");
__decorate([
    core_1.Output()
], SubscriberListComponent.prototype, "edit");
__decorate([
    core_1.Output()
], SubscriberListComponent.prototype, "remove");
SubscriberListComponent = __decorate([
    core_1.Component({
        selector: 'subscriber-list',
        styleUrls: ['subscriber-list.component.scss'],
        template: "\n        <div class=\"subscriber-list\">\n            <div class=\"row\">\n                \n                <div *ngIf=\"editing\">\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" [value]=\"detail.name\" (input)=\"onNameChange(name.value)\" #name>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <input type=\"text\" [value]=\"detail.email\" (input)=\"onEmailChange(email.value)\" #email>\n                    </div>\n                </div>\n                    \n                <div *ngIf=\"!editing\">\n                    <div class=\"col-md-4\">\n                        {{ detail?.name }} \n                    </div>\n                    <div class=\"col-md-4\">\n                        {{ detail?.email }}\n                    </div>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <button (click)=\"toggleEdit()\">{{ editing ? 'Done' : 'Edit' }}</button>\n                    <button (click)=\"onRemove()\">Delete</button>\n                </div>\n\n            </div>\n        </div>\n    "
    })
], SubscriberListComponent);
exports.SubscriberListComponent = SubscriberListComponent;
