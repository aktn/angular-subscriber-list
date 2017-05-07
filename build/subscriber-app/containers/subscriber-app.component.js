"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SubscriberAppComponent = (function () {
    //Dependecy Injected Services
    function SubscriberAppComponent(subscriberService) {
        this.subscriberService = subscriberService;
        this.subscribers = [];
    }
    //Subscribing data from the service
    SubscriberAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriberService.getSubscribers().subscribe(function (data) { return _this.subscribers = data; });
    };
    SubscriberAppComponent.prototype.handleRemove = function (remove) {
        var _this = this;
        this.subscriberService.deleteSubscriber(remove)
            .subscribe(function (data) {
            //Filtering particular subscriber from the array of subscribers
            _this.subscribers = _this.subscribers.filter(function (subscriber) {
                //if id matches
                return subscriber.id !== remove.id;
            });
        });
    };
    SubscriberAppComponent.prototype.handleEdit = function (edit) {
        var _this = this;
        this.subscriberService.updateSubscriber(edit).subscribe(function (data) {
            _this.subscribers = _this.subscribers.map(function (subscriber) {
                //Check if id identical
                if (subscriber.id === edit.id) {
                    //Overiding orignial data with the new changes
                    subscriber = Object.assign({}, subscriber, edit);
                }
                return subscriber;
            });
        });
    };
    SubscriberAppComponent.prototype.handleOnSubmit = function (create) {
        var _this = this;
        this.subscriberService.createSubscriber(create).subscribe(function (data) {
            _this.subscriberService.getSubscribers().subscribe(function (data) { return _this.subscribers = data; });
            return true;
        });
    };
    return SubscriberAppComponent;
}());
SubscriberAppComponent = __decorate([
    core_1.Component({
        selector: 'subscriber-app',
        styleUrls: ['subscriber-app.component.scss'],
        template: "\n    <subscriber-form\n        (onSubmit)=\"handleOnSubmit($event)\">\n    </subscriber-form>\n    <div class=\"count\">\n        Total Subscribers : {{ subscribers?.length }}\n    </div>\n    <subscriber-list \n        *ngFor=\"let subscriber of subscribers;\"\n        [detail]=\"subscriber\"\n        (remove)=\"handleRemove($event)\"\n        (edit)=\"handleEdit($event)\">\n    </subscriber-list>\n    "
    })
], SubscriberAppComponent);
exports.SubscriberAppComponent = SubscriberAppComponent;
