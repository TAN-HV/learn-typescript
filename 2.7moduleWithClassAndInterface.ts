import { HasPrint } from "./2.5InterfaceForClass";
import { Invoice, Payment } from "./2.6ClassImplementsInterface";

const documentOne: HasPrint = new Invoice('Vinamilk', 'drink milk', 3000000)
const documentTwo: HasPrint = new Payment('Vietnam Airlines', 'fly', 15000000)

const allDocuments : HasPrint[] = []
allDocuments.push(documentOne)
allDocuments.push(documentTwo)

console.log(allDocuments);
