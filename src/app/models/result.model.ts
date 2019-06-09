import { Deserializable } from './deserializable.model';

export class Result implements Deserializable {
    public id;
    public userName;
    public score;
    public quiz;

    deserialize(input: any): this {
        return Object.assign(this,input);
    }

}
