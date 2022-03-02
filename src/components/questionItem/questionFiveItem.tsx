import RadioButton from '@src/shared/components/radioButton';
import { QuestionFiveItems } from '@pages/testPage/types';

const QuestionFiveItem = ({ item }: { item: QuestionFiveItems }) => {
  const {
    qitemNo,
    question,
    answer01,
    answer02,
    answer03,
    answer04,
    answer05,
    answerScore01,
    answerScore02,
    answerScore03,
    answerScore04,
    answerScore05,
  } = item;

  const radioItems = [
    { answer: answer01, answerScore: answerScore01 },
    { answer: answer02, answerScore: answerScore02 },
    { answer: answer03, answerScore: answerScore03 },
    { answer: answer04, answerScore: answerScore04 },
    { answer: answer05, answerScore: answerScore05 },
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

export default QuestionFiveItem;
