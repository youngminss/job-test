import RadioButton from '@src/shared/components/radioButton';
import { QuestionTwoItems } from '@pages/testPage/types';
const QuestionTwoItem = ({ item }: { item: QuestionTwoItems }) => {
  const { qitemNo, question, answer01, answer02, answerScore01, answerScore02 } = item;
  const radioItems = [
    { answer: answer01, answerScore: answerScore01 },
    { answer: answer02, answerScore: answerScore02 },
  ];
  return (
    <div>
      <h3>
        {qitemNo}.{question}
      </h3>

      <div>
        {radioItems.map((radioItem) => {
          return (
            <RadioButton
              key={qitemNo}
              data-qitemno={qitemNo}
              id={`question-${qitemNo + radioItem.answer}`}
              name={`question-item-${qitemNo}`}
              value={radioItem.answerScore}
              labelText={radioItem.answer}
            />
          );
        })}
      </div>
    </div>
  );
};

export default QuestionTwoItem;
