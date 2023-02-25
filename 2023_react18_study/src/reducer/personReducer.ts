// import { MentorType, PersonType } from 'AppMentors';

interface MentorType {
  name: string | null;
  title: string | null;
}

export interface PersonType {
  name: string;
  title: string;
  mentors: MentorType[];
}

interface ActionType {
  type: 'updated' | 'added' | 'removed';
  prev?: string | null;
  current?: string | null;
  name?: string | null;
  title?: string | null;
}

export default function personReducer(person: PersonType, action: ActionType) {
  switch (action.type) {
    case 'updated': {
      const { prev, current } = action;

      const mentors = person.mentors.map((mentor) => {
        if (mentor.name === prev) {
          mentor.name = current ?? null;
        }
        return mentor;
      });

      return {
        ...person,
        mentors,
      };
    }
    case 'added': {
      const { name, title } = action;

      const mentors = [...person.mentors, { name: name ?? null, title: title ?? null }];

      return { ...person, mentors };
    }
    case 'removed': {
      const { name } = action;

      const mentors = person.mentors.filter((mentor) => mentor.name !== name);

      return { ...person, mentors };
    }
  }
}
