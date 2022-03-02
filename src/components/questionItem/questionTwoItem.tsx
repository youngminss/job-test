import RadioButton from '@src/shared/components/radioButton';
import { QuestionTwoItems } from '@pages/testPage/types';
const QuestionTwoItem = ({ item }: { item: QuestionTwoItems }) => {
  const { qitemNo, question, answer01, answer02, answerScore01, answerScore02 } = item;
  return (
    <div>
      <h3>
        {qitemNo}.{question}
      </h3>

      <div>
        <RadioButton
          data-qitemno={qitemNo}
          id={`question-${answerScore01}`}
          name={`question-item-${qitemNo}`}
          value={answerScore01}
          labelText={answer01}
        />
        <RadioButton
          data-qitemno={qitemNo}
          id={`question-${answerScore02}`}
          name={`question-item-${qitemNo}`}
          value={answerScore02}
          labelText={answer02}
        />
      </div>
    </div>
  );
};

export default QuestionTwoItem;
