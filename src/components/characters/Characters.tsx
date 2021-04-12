import React, { useState } from 'react';

import Link from 'next/link';

import s from './Characters.module.scss';
import { Button } from '../button/Button';
import { ICharacter, CharactersFromGraphQL, AllPeople } from '../../types';
import '../../pages/api/characters';

type Props = {
  peopleResponse?: CharactersFromGraphQL
};

/**
 * Hjálpar týpa ef við erum að filtera burt hugsanleg null gildi:
 *
 * const items: T = itemsWithPossiblyNull
 *  .map((item) => {
 *    if (!item) {
 *      return null;
 *    }
 *    return item;
 *  })
 *  .filter((Boolean as unknown) as ExcludesFalse);
 * items verður Array<T> en ekki Array<T | null>
 */
type ExcludesFalse = <T>(x: T | null | undefined | false) => x is T;

export function Characters({ peopleResponse }: Props): JSX.Element {
  // TODO meðhöndla loading state, ekki þarf sérstaklega að villu state
  const [loading, setLoading] = useState<boolean>(false);

  // TODO setja grunngögn sem koma frá server
  const [characters, setCharacters] = useState<Array<ICharacter>>(
    peopleResponse?.allPeople?.people ?? [],
  );

  const [nextPage, setNextPage] = useState<string | null>(
    peopleResponse?.allPeople?.pageInfo.endCursor ?? '',
  );

  const [hasNextPage, setHasNextPage] = useState<boolean>(true);

  const fetchMore = async (): Promise<void> => {
    // TODO sækja gögn frá /pages/api/characters.ts (gegnum /api/characters), ef það eru fleiri
    // (sjá pageInfo.hasNextPage) með cursor úr pageInfo.endCursor
    setLoading(true);

    const url = `/api/characters?after=${nextPage}`;
    let result = null;
    try {
      result = await fetch(url);
    } catch (e) {
      console.error('Error fetching from SWAPI', e);
      throw e;
    }

    if (!result.ok) {
      console.info(await result.text());
      throw new Error(`Error fetching from SWAPI, non 200 status: ${result.status}`);
    }

    const json = await result.json();

    const response: CharactersFromGraphQL = json;
    setCharacters([...characters, ...response.allPeople?.people ?? []]);
    setNextPage(response.allPeople?.pageInfo.endCursor ?? '');
    setHasNextPage(response.allPeople?.pageInfo?.hasNextPage ?? true);
    setLoading(false);
  };

  return (
    <section className={s.characters}>
      <ul className={s.characters__list}>
        {characters.map((char, i) => (
          <li key={i}>
            <Link href={`/characters/${char.id}`}>{char.name}</Link>
          </li>
        ))}
      </ul>
      <Button disabled={loading} hasNextPage={hasNextPage} onClick={fetchMore}>Fetch more</Button>
    </section>
  );
}
