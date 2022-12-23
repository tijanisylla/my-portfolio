"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const PORT = 8000;
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname)));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Logic
const post = (req, res, next) => {
    const name = req.body;
    res.send(name);
    next();
};
app.get("/", (req, res) => {
    res.send("Hello");
});
app.post("/", post, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
}));
app.listen(PORT, () => {
    console.log(`App running on port : ${PORT}`);
});
