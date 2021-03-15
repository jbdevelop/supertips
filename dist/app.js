"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
class App {
    constructor() {
        this.express = express_1.default();
    }
    middlewares() {
        this.express.use(express_1.default.json());
        this.express.use(cors_1.default());
    }
    database() {
        mongoose_1.default.connect('mongodb+srv://admin:rRimjy6F8c1EYYl4@cluster0.kwono.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
    }
    routes() {
        this.express.get('/', (request, response) => {
            return response.send('First Route');
        });
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map