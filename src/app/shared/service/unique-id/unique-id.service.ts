import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class UniqueIdService {

    private numberOfGereneteIds = 0;

    public generateUniqueIdWithPrefix(prefix: string): string {
        if(!prefix){
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