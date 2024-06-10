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
exports.prisma = void 0;
const client_1 = require("@prisma/client");
const prismaClientSingleton = () => {
    return new client_1.PrismaClient();
};
const isProduction = process.env.NODE_ENV === 'production';
exports.prisma = globalThis.prisma || prismaClientSingleton();
if (!isProduction)
    globalThis.prisma = exports.prisma;
function connectDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.prisma.$connect();
            console.log('🚀 Database connection established');
        }
        catch (error) {
            const err = error instanceof Error && (isProduction ? error.message : error.stack);
            console.log('Could not connect to the database:', err);
        }
        finally {
            yield exports.prisma.$disconnect();
            console.log('Database connection closed');
        }
    });
}
exports.default = connectDatabase;
