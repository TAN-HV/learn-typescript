import { HasPrint } from "./2.5InterfaceForClass";

export class Invoice implements HasPrint {
    constructor(
        readonly client :string,
        private work : string,
        public amount : number
    ) {}
    print(){
        return `${this.client} owes ${this.amount} dollar(s) for this work: ${this.work}`
    }
    // print(){
    //     return 50;
    // }
}

export class Payment implements HasPrint {
    constructor(
        readonly recipient :string,
        private job : string,
        public amt : number
    ) {}
    print(){
        return `I owes ${this.recipient} ${this.amt} dollar(s) for this work: ${this.job}`
    }
}