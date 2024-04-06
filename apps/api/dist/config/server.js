"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const express_actuator_1 = __importDefault(require("express-actuator"));
const mainRoutes_1 = __importDefault(require("../routes/mainRoutes"));
class Server {
    constructor({ environment, server_port }) {
        this.app = (0, express_1.default)();
        this.port = server_port;
        this.env = environment;
        this.middlewares();
        this.logHttpMorgan();
        this.routes();
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, express_actuator_1.default)({
            basePath: "/actuator",
            infoGitMode: "full",
            infoDateFormat: "YYYY-MM-DD HH:mm:ss",
        }));
    }
    logHttpMorgan() {
        if (this.env === "development") {
            this.app.use((0, morgan_1.default)("dev"));
        }
    }
    routes() {
        this.app.use("/api", mainRoutes_1.default);
    }
    start(callback) {
        this.app.listen(this.port, callback);
    }
}
exports.default = Server;
