import { Deserializable } from './deserializable.model';

export class Option implements Deserializable{
    public id: number;
    public optionText:string;
    public correct:boolean;
    public questionId:number;
    public selected:boolean;
    public question;

    deserialize(input: any): this {
        return Object.assign(this,input);
    }
}
