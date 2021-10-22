import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose Schema

const ContactsSchema = new Schema
({
    name: String,
    number: String,
    email: String,
   
},
{
    collection: "Contacts"
});

const Model = mongoose.model("Contacts", ContactsSchema);
export default Model;