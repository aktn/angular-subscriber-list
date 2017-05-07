"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
//Containers
var subscriber_app_component_1 = require("./containers/subscriber-app.component");
var subscriber_list_component_1 = require("./components/subscriber-list/subscriber-list.component");
var subscriber_form_component_1 = require("./components/subscriber-form/subscriber-form.component");
//Services
var subscriber_app_service_1 = require("./subscriber-app.service");
var SubscriberAppModule = (function () {
    function SubscriberAppModule() {
    }
    return SubscriberAppModule;
}());
SubscriberAppModule = __decorate([
    core_1.NgModule({
        declarations: [
            subscriber_app_component_1.SubscriberAppComponent,
            subscriber_list_component_1.SubscriberListComponent,
            subscriber_form_component_1.SubscriberFormComponent
        ],
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpModule
        ],
        exports: [
            subscriber_app_component_1.SubscriberAppComponent
        ],
        providers: [
            subscriber_app_service_1.SubscriberAppService
        ]
    })
], SubscriberAppModule);
exports.SubscriberAppModule = SubscriberAppModule;
