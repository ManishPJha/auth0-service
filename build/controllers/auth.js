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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleUserPostCreation = exports.resendVerificationEmail = void 0;
const prisma_client_1 = require("../utils/prisma-client");
const resendVerificationEmail = (req, res, next) => {
    try {
        return res.status(200).json({
            success: true,
            message: "Verification email resent successfully",
            requestBody: req.body
        });
    }
    catch (error) {
        next(error);
    }
};
exports.resendVerificationEmail = resendVerificationEmail;
const handleUserPostCreation = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const isExist = yield prisma_client_1.prisma.user.findFirst({ where: {
                id: data.user_id
            } });
        if (isExist)
            return;
        // const user = await prisma.user.update({ data: {
        //   email: data.user_email,
        //   id: data.user_id,
        //   is_confirmed: data.is_email_verified,
        // }, where: { 
        //   id: data.user_id,
        // }})
        // if (user) {
        //   console.log("🚀 ~ handleUserPostCreation ~ user:", user)
        //   return res.status(200).json({
        //     success: true,
        //     message: "User created successfully",
        //     requestBody: req.body
        //   })
        // }
        return res.status(200).json({
            success: true,
            message: "User created successfully",
            requestBody: req.body
        });
    }
    catch (error) {
        next(error);
    }
});
exports.handleUserPostCreation = handleUserPostCreation;
