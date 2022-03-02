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

  return (
    <div>
      <h3>
        {qitemNo}.{question}
      </h3>
      <div>
        <RadioButton
          data-qitemno={qitemNo}
          id={`question-${qitemNo + answer01}`}
          name={`question-item-${qitemNo}`}
          value={answerScore01}
          labelText={answer01}
        />
        <RadioButton
          data-qitemno={qitemNo}
          id={`question-${qitemNo + answer02}`}
          name={`question-item-${qitemNo}`}
          value={answerScore02}
          labelText={answer02}
        />
        <RadioButton
          data-qitemno={qitemNo}
          id={`question-${qitemNo + answer03}`}
          name={`question-item-${qitemNo}`}
          value={answerScore03}
          labelText={answer03}
        />
        <RadioButton
          data-qitemno={qitemNo}
          id={`question-${qitemNo + answer04}`}
          name={`question-item-${qitemNo}`}
          value={answerScore04}
          labelText={answer04}
        />
        <RadioButton
          data-qitemno={qitemNo}
          id={`question-${qitemNo + answer05}`}
          name={`question-item-${qitemNo}`}
          value={answerScore05}
          labelText={answer05}
        />
      </div>
    </div>
  );
};

export default QuestionFiveItem;
