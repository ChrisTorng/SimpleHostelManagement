import { CustomerInterface } from './interfaces/customerInterface';

export class Customer implements CustomerInterface {
    customer_id: string;
    name: string;
    title: string;
    mobile: string;
    notes: string;

    constructor(customer_id: string, name: string, title: string, mobile: string, notes: string) {
        this.customer_id = customer_id;
        this.name = name;
        this.title = title;
        this.mobile = mobile;
        this.notes = notes;
    }

    updateCustomerInfo(name: string, title: string, mobile: string, notes: string) {
        this.name = name;
        this.title = title;
        this.mobile = mobile;
        this.notes = notes;
    }
}