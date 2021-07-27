import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class UniqueServiceId {

    private numberOfGereneteIds = 0;

    private validId = /^[A-Za-z]+[\w\-\:\.]*$/;
    public generateUniqueIdWithprefix(prefix: string): string {
        if(!prefix || !this.validId.test(prefix)){
            throw Error('prefix can not be empty');
        }
        const uniqueId = this.generateUniqueId();
        this.numberOfGereneteIds++;
        return `${prefix}-${uniqueId}`;

    }

    public getNumberOfGeneratedUniqueIds(): number{
        return this.numberOfGereneteIds;
    }
    private  generateUniqueId(): string {
        return uuidv4();
    }

}