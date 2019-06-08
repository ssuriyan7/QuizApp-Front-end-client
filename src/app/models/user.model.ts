import {Deserializable} from './deserializable.model';

export class User implements Deserializable{
    public userId: string;
    public password: string;
    constructor() {

    }
    deserialize(input: any): this {
        return Object.assign(this,input);
    }
    getUserId(): string {
      return this.userId;
    }
}
