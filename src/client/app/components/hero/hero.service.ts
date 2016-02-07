import {Injectable} from 'angular2/core';

import {Hero, HEROES} from './hero';

@Injectable()

export class HeroService {
    getHeros(): Promise<Hero[]>  {
        return Promise.resolve(HEROES);
    }
}