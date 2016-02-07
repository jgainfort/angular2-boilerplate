import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero, HeroesService} from './heroes.service';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import './heroes.component.css!';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/components/heroes/heroes.component.html',
    styleUrls: ['app/components/heroes/heroes.component.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
    public heroes: Hero[];
    public selectedHero: Hero;

    constructor(private _heroesService: HeroesService, private _router: Router) { }

    ngOnInit() {
        this.heroes = this.getHeros();
    }

    getHeros(): Hero[] {
        this.selectedHero = undefined;
        this.heroes = [];

        this._heroesService.getHeroes()
            .subscribe(
                hereos => this.heroes = hereos,
                error => console.log('subscribed to error')
            );

        return this.heroes;
    }

    goToDetail(): void {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }])
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
