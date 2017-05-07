"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SubscriberFormComponent = (function () {
    function SubscriberFormComponent() {
        this.onSubmit = new core_1.EventEmitter();
    }
    SubscriberFormComponent.prototype.handleSubmit = function (subscriber, isValid) {
        if (isValid) {
            this.onSubmit.emit(subscriber);
        }
        // this.form.reset();
    };
    return SubscriberFormComponent;
}());
__decorate([
    core_1.Output()
], SubscriberFormComponent.prototype, "onSubmit");
SubscriberFormComponent = __decorate([
    core_1.Component({
        selector: 'subscriber-form',
        styleUrls: ['subscriber-form.component.scss'],
        template: "\n        <form #form=\"ngForm\" (ngSubmit)=\"handleSubmit(form.value,form.valid); form.reset()\" novalidate>\n            <input type=\"text\" \n                   name=\"name\" \n                   placeholder=\"name\" \n                   #name=\"ngModel\" \n                   ngModel \n                   required>\n            \n\n            <input type=\"text\" \n                   name=\"email\" \n                   placeholder=\"email\" \n                   #email=\"ngModel\" \n                   ngModel \n                   required\n                   pattern=\"[^ @]*@[^ @]*\">\n            \n\n            <button type=\"submit\" [disabled]=\"!form.valid\">Add</button>\n            <button>Export</button>\n\n            <div>\n                <div *ngIf=\"name.errors?.required && name.dirty\" class=\"error\">Name Required</div>\n                <div>\n                    <div *ngIf=\"email.errors?.required && email.dirty\" class=\"error\">Email Required></div>\n                    <div *ngIf=\"email.errors?.pattern && email.touched\" class=\"error\">Invalid Email Format</div>\n                </div> \n            </div>\n            \n        </form>\n       \n    "
    })
], SubscriberFormComponent);
exports.SubscriberFormComponent = SubscriberFormComponent;
