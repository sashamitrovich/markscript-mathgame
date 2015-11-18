var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var markscript_basic_build_1 = require('markscript-basic-build');
var MathGameDatabase = (function () {
    function MathGameDatabase(name, port, host) {
        this.name = name;
        this.host = host;
        this.port = port;
    }
    Object.defineProperty(MathGameDatabase.prototype, "server", {
        get: function () {
            return {
                name: this.name,
                host: this.host,
                port: this.port
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MathGameDatabase.prototype, "contentDatabase", {
        get: function () {
            return {
                name: this.name + '-content',
                triples: true
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MathGameDatabase.prototype, "triggersDatabase", {
        get: function () {
            return {
                name: this.name + '-triggers'
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MathGameDatabase.prototype, "modulesDatabase", {
        get: function () {
            return {
                name: this.name + '-modules'
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MathGameDatabase.prototype, "schemaDatabase", {
        get: function () {
            return {
                name: this.name + '-schema'
            };
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        markscript_basic_build_1.contentDatabase(),
        __metadata('design:type', Object)
    ], MathGameDatabase.prototype, "contentDatabase", null);
    __decorate([
        markscript_basic_build_1.triggersDatabase(),
        __metadata('design:type', Object)
    ], MathGameDatabase.prototype, "triggersDatabase", null);
    __decorate([
        markscript_basic_build_1.modulesDatabase(),
        __metadata('design:type', Object)
    ], MathGameDatabase.prototype, "modulesDatabase", null);
    __decorate([
        markscript_basic_build_1.schemaDatabase(),
        __metadata('design:type', Object)
    ], MathGameDatabase.prototype, "schemaDatabase", null);
    MathGameDatabase = __decorate([
        markscript_basic_build_1.mlDeploy(),
        __metadata('design:paramtypes', [String, Number, String])
    ], MathGameDatabase);
    return MathGameDatabase;
})();
exports.MathGameDatabase = MathGameDatabase;
