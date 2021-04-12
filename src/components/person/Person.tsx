import Link from 'next/link';
import { ICharacter } from '../../types';
import s from './Person.module.scss';

type Props = {
  person: ICharacter;
};

export function Person({ person }: Props): JSX.Element {
  return (
    <div className={s.person}>
      <h1>{person.name}</h1>
      <div className={s.person__info}>
        <div className={s.person__birthyear}>
          <h4>Birth year:</h4>
          <p>{person.birthYear}</p>
        </div>
        <div className={s.person__eyeColor}>
          <h4>Eye color:</h4>
          <p>{person.eyeColor}</p>
        </div>
        <div className={s.person__hairColor}>
          <h4>Hair color:</h4>
          <p>{person.hairColor}</p>
        </div>
        <div className={s.person__height}>
          <h4>Height:</h4>
          <p>{person.height}</p>
        </div>
        <div className={s.person__mass}>
          <h4>Mass:</h4>
          <p>{person.mass}</p>
        </div>
      </div>
      <Link href="/characters">Back to characters</Link>
    </div>
  );
}
