import { Deserializable } from './deserializable.model';
import { Option } from './option.model';

export class Question implements Deserializable {
    public id;
    public questionText;
    public quizId;
    public quiz;
    
    deserialize(input: any): this {
        return Object.assign(this,input);
    }
}
