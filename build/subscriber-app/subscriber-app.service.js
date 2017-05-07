"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var SUBSCRIBER_API = '/api/subscribers';
var SubscriberAppService = (function () {
    function SubscriberAppService(http) {
        this.http = http;
    }
    SubscriberAppService.prototype.getSubscribers = function () {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var options = new http_1.RequestOptions({
            headers: headers
        });
        return this.http
            .get('/api/subscribers', options)
            .map(function (response) { return response.json(); })["catch"](function (error) { return Observable_1.Observable["throw"](error.json()); });
    };
    SubscriberAppService.prototype.updateSubscriber = function (subscriber) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var options = new http_1.RequestOptions({
            headers: headers
        });
        return this.http
            .put(SUBSCRIBER_API + "/" + subscriber.id, subscriber, options)
            .map(function (response) { return response.json(); })["catch"](function (error) { return Observable_1.Observable["throw"](error.json()); });
    };
    SubscriberAppService.prototype.deleteSubscriber = function (subscriber) {
        return this.http["delete"](SUBSCRIBER_API + "/" + subscriber.id)
            .map(function (response) { return response.json(); })["catch"](function (error) { return Observable_1.Observable["throw"](error.json()); });
    };
    SubscriberAppService.prototype.createSubscriber = function (subscriber) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        var options = new http_1.RequestOptions({
            headers: headers
        });
        return this.http
            .post("" + SUBSCRIBER_API, subscriber, options)
            .map(function (response) { return response.json(); })["catch"](function (error) { return Observable_1.Observable["throw"](error.json()); });
    };
    return SubscriberAppService;
}());
SubscriberAppService = __decorate([
    core_1.Injectable()
], SubscriberAppService);
exports.SubscriberAppService = SubscriberAppService;
