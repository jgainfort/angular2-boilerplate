import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

export interface Hero {
    id: number;
    name: string;
}

@Injectable()

export class HeroesService {

    constructor(private _http: Http) { }

    getHeroes(): Observable<Hero[]> {
        return this._http.get('/api/heroes/all')
            .map(res => <Hero[]> res.json().data)
    }

    getHero(id: number): Observable<Hero> {
        return this._http.get('/api/heroes/all')
            .map(res => <Hero[]> res.json().data)
            .filter(h => h.id === id)[0]
    }
}