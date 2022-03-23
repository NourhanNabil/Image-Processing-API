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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../index"));
const request = (0, supertest_1.default)(index_1.default);
describe('Testing endpointas', () => {
    it('getting endpoint without the imageName parameter', () => __awaiter(void 0, void 0, void 0, function* () {
        request.get('/images').expect(400);
    }));
    it('getting endpoint with a non-existent image', () => __awaiter(void 0, void 0, void 0, function* () {
        request.get('/images?imageName=abc').expect(404);
    }));
    it('getting endpoint with a valid image', () => __awaiter(void 0, void 0, void 0, function* () {
        yield request.get('/images?imageName=fjord').expect(200);
    }));
});
describe('Testing images resize', () => {
    it('getting image without the height parameter', () => __awaiter(void 0, void 0, void 0, function* () {
        request.get('/images?imageName=fjord&width=200').expect(400);
    }));
    it('getting image without the width parameter', () => __awaiter(void 0, void 0, void 0, function* () {
        request.get('/images?imageName=fjord&height=200').expect(400);
    }));
    it('getting image with null values for width and height', () => __awaiter(void 0, void 0, void 0, function* () {
        request.get('/images?imageName=fjord&width=&height=').expect(400);
    }));
});
