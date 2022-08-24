export interface Customer {
    address: Address;
    id?: string;
    name: string;
}

export interface Address {
    city: string;
    country: string;
    street: string;
}