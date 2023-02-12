import React, { useState } from 'react';

interface MentorType {
  name: string | null;
  title: string | null;
}

interface PersonType {
  name: string;
  title: string;
  mentors: Array<MentorType>;
}

export default function AppMentor() {
  const [person, setPerson] = useState<PersonType>({
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
  });
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
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

          const mentors = person.mentors.map((mentor) => {
            if (mentor.name === prev) {
              mentor.name = current;
            }
            return mentor;
          });

          setPerson((person) => ({ ...person, mentors }));
        }}
      >
        멘토의 이름을 바꾸기
      </button>
    </div>
  );
}
