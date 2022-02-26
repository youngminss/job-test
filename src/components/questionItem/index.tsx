import { QuestionTwoItem } from '@pages/testPage/types';
const Question = ({ item }: { item: QuestionTwoItem }) => {
  const { qitemNo, question, answer01, answer02, answerScore01, answerScore02 } = item;
  return (
    <div>
      <h3>
        {qitemNo}.{question}
      </h3>
      <div>
        <input
          data-qitemno={qitemNo}
          type="radio"
          id={`question-${answerScore01}`}
          name={`question-item-${qitemNo}`}
          value={answerScore01}
        />
        <label htmlFor={`question-${answerScore01}`}>{answer01}</label>
      </div>
      <div>
        <input
          data-qitemno={qitemNo}
          type="radio"
          id={`question-${answerScore02}`}
          name={`question-item-${qitemNo}`}
          value={answerScore02}
        />
        <label htmlFor={`question-${answerScore02}`}>{answer02}</label>
      </div>
    </div>
  );
};

export default Question;
