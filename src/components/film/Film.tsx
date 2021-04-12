import Link from 'next/link';

import { IFilm } from '../../types';
import s from './Film.module.scss';

type Props = {
  film: IFilm
};

export function Film({ film }: Props): JSX.Element {
  return (
    <section className={s.film}>
      <h2 className={s.film__title}>
        Episode {film.episodeID}: {film.title}
      </h2>
      <div className={s.film__content}>
        <pre className={s.film__openingCrawl}><code>{film.openingCrawl}</code></pre>
        <div className={s.film_charecters}>
          <h3>Characters</h3>
          <div className={s.film__links}>
            {film.characterConnection.characters.map((character, i) => (
              <div key={i} className={s.film__link}>
                <Link href={`/characters/${character.id}`}>{character.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className={s.film__line} />
    </section>
  );
}
