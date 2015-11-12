/// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts"/>
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var MyElement = (function (_super) {
    __extends(MyElement, _super);
    function MyElement() {
        _super.apply(this, arguments);
        this.greet = "Hello";
        this.test = "";
    }
    MyElement.prototype.greetChanged = function (newValue, oldValue) {
        console.log("greet has changed from " + oldValue + " to " + newValue);
    };
    MyElement.prototype.greetAll = function (test) {
        return this.test + " to all";
    };
    // event handler
    MyElement.prototype.handleClick = function (e) {
        this.greet = "Holà";
        this.fire("greet-event");
    };
    MyElement.prototype.onButtonWasClicked = function (e) {
        console.log('event "greet-event" received');
    };
    // lifecycle methods
    MyElement.prototype.ready = function () {
        console.log(this['is'], "ready!");
    };
    MyElement.prototype.created = function () { };
    MyElement.prototype.attached = function () { };
    MyElement.prototype.detached = function () { };
    __decorate([
        property({ type: String })
    ], MyElement.prototype, "greet");
    __decorate([
        property({ type: String })
    ], MyElement.prototype, "test");
    Object.defineProperty(MyElement.prototype, "greetChanged",
        __decorate([
            observe("greet")
        ], MyElement.prototype, "greetChanged", Object.getOwnPropertyDescriptor(MyElement.prototype, "greetChanged")));
    Object.defineProperty(MyElement.prototype, "greetAll",
        __decorate([
            computed()
        ], MyElement.prototype, "greetAll", Object.getOwnPropertyDescriptor(MyElement.prototype, "greetAll")));
    Object.defineProperty(MyElement.prototype, "onButtonWasClicked",
        __decorate([
            listen("greet-event")
        ], MyElement.prototype, "onButtonWasClicked", Object.getOwnPropertyDescriptor(MyElement.prototype, "onButtonWasClicked")));
    MyElement = __decorate([
        /// <reference path="../../bower_components/polymer-ts/polymer-ts.d.ts"/>
        component('my-element')
    ], MyElement);
    return MyElement;
})(polymer.Base);
MyElement.register();
