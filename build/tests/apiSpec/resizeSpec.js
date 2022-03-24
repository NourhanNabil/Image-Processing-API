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
const resize_1 = __importDefault(require("../../routes/api/resize"));
const path_1 = __importDefault(require("path"));
describe('Testing images resize', () => {
    it('to check the cached image', () => __awaiter(void 0, void 0, void 0, function* () {
        const fullImagesPath = path_1.default.resolve('./') + `/images/fullImages/fjord.jpg`;
        const resizeImagesPath = path_1.default.resolve('./') + `/images/resizeImages/fjord_200_300.jpg`;
        const height = 300;
        const width = 200;
        expect(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, resize_1.default)(fullImagesPath, width, height, resizeImagesPath);
        })).not.toThrow();
    }));
    it('check if the height parameter is missing', () => __awaiter(void 0, void 0, void 0, function* () {
        const fullImagesPath = path_1.default.resolve('./') + `/images/fullImages/fjord.jpg`;
        const resizeImagesPath = path_1.default.resolve('./') + `/images/resizeImages/fjord_200_300.jpg`;
        const height = '';
        const width = 200;
        expect(() => __awaiter(void 0, void 0, void 0, function* () {
            yield (0, resize_1.default)(fullImagesPath, width, parseInt(height), resizeImagesPath);
        })).toBeDefined();
    }));
});
