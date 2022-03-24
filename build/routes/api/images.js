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
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const resize_1 = __importDefault(require("./resize"));
const imagesRoutes = (0, express_1.Router)();
// images names avaiable to use in the query params(imageName)
const images = [
    'encenadaport',
    'fjord',
    'icelandwaterfall',
    'palmtunnel',
    'santamonica',
];
imagesRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const imageName = req.query.imageName;
    const height = req.query.height;
    const width = req.query.width;
    // full image
    const fullImagesPath = path_1.default.resolve('./') + `/images/fullImages/${imageName}.jpg`;
    //  resize images
    const resizeImagesPath = path_1.default.resolve('./') +
        `/images/resizeImages/${imageName}_${width}_${height}.jpg`;
    const image = images.includes(imageName);
    if (imageName === undefined) {
        return res
            .status(400)
            .send('Bad request, query parameter imageName is missing.');
    }
    if (image === false) {
        return res.status(404).send('This image does not exist!');
    }
    if (height === undefined && width) {
        return res
            .status(400)
            .send('Bad request, query parameter height is missing.');
    }
    if (width === undefined && height) {
        return res
            .status(400)
            .send('Bad request, query parameter width is missing.');
    }
    if (width === '' || height === '') {
        return res
            .status(400)
            .send('Bad request, neither query parameter width nor height can be equal null.');
    }
    if (height && width) {
        yield (0, resize_1.default)(fullImagesPath, parseInt(width), parseInt(height), resizeImagesPath);
        return res.sendFile(resizeImagesPath);
    }
    res.sendFile(fullImagesPath);
}));
exports.default = imagesRoutes;
