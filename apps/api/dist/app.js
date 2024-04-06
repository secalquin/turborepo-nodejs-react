"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./config/server"));
const environments_1 = __importDefault(require("./config/environments"));
const { environment, server_port } = environments_1.default;
const server = new server_1.default({ environment, server_port });
server.start(() => {
    console.log(`⚡️[server]: Server is running at port ${server_port} in ${environment} mode`);
});
