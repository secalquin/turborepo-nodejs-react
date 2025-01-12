"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const environments = {
    environment: process.env.ENVIRONMENT || "development",
    server_port: process.env.SERVER_PORT || 3000,
};
exports.default = environments;
