import { Farm } from "../modules/shared/models/farm";

export class User {
    id: number;
    firstname: string;
    lastname: string;
    farm: Farm;
    auth0id: string;

    constructor(id: number, firstName: string, lastName: string, farm: Farm, auth0id: string) {
        this.id = id;
        this.firstname = firstName;
        this.lastname = lastName;
        this.farm = farm;
        this.auth0id = auth0id;
    }
}