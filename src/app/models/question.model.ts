import { Deserializable } from './deserializable.model';
import { Option } from './option.model';

export class Question implements Deserializable {
    public questionId;
    public questionText;
    public quizId;
    public options:Option[];
    
    deserialize(input: any): this {
        return Object.assign(this,input);
    }
}
