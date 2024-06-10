"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
// middlewares
const errorMiddleware_1 = __importDefault(require("./middlewares/errorMiddleware"));
// routes
const auth_1 = __importDefault(require("./routes/auth"));
const app = (0, express_1.default)();
const options = {
    origin: "*",
    credentials: true,
};
app.use((0, cors_1.default)(options));
app.use(body_parser_1.default.json());
app.use("/api", auth_1.default);
app.get("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Not Found",
    });
});
app.use(errorMiddleware_1.default);
exports.default = app;
