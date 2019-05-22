import { Deserializable } from './deserializable.model';

export class Quiz implements Deserializable{
    public quizId: number;
    public quizName: string;

    deserialize(input: any): this {
        return Object.assign(this,input);
    }
}
