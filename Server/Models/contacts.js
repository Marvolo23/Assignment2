"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema; // alias for mongoose Schema
const ContactsSchema = new Schema({
    name: String,
    number: String,
    email: String,
   
}, {
    collection: "contacts"
});
const Model = mongoose_1.default.model("Contacts", ContactsSchema);
exports.default = Model;
//# sourceMappingURL=contacts.js.map