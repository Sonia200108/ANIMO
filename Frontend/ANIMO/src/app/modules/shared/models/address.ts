export class Address {
    id: number;
    street: string;
    number: string;
    zipCode: string;
    city: string;
    country: string;
  
    constructor(id: number, street: string, number: string, zipCode: string, city: string, country: string) {
      this.id = id;
      this.street = street;
      this.number = number;
      this.zipCode = zipCode;
      this.city = city;
        this.country = country;
    }
  }
