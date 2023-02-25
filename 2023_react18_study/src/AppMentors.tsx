import { useReducer } from 'react';
import personReducer from 'reducer/personReducer';

export default function AppMentor() {
  const [person, dispatch] = useReducer(personReducer, initPersonData);

  const handleChangeName = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

    dispatch({ type: 'updated', prev, current });
  };

  const handleAdd = () => {
    const name = prompt(`추가할 멘토의 이름은 무엇인가요?`);
    const title = prompt(`추가할 멘토의 타이틀은 무엇인가요?`);

    dispatch({ type: 'added', name, title });
  };

  const handleRemove = () => {
    const name = prompt(`삭제할 멘토의 이름은 무엇인가요?`);

    const mentors = person.mentors.filter((mentor) => mentor.name !== name);

    dispatch({ type: 'removed', name });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleChangeName}>멘토의 이름을 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleRemove}>멘토 삭제하기</button>
    </div>
  );
}

const initPersonData = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};
