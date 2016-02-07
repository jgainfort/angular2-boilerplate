import {Component, OnInit} from 'angular2/core'

import {Hero} from './hero';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import './hero.css!';

@Component({
    selector: 'hero',
    templateUrl: 'app/components/hero/hero.html',
    directives: [HeroDetailComponent],
    providers: [HeroService];
})

export class HeroComponent implements OnInit {
    public heroes: Hero[];
    public selectedHero: Hero;

    constructor(private _heroService: HeroService) { }

    ngOnInit() {
        this.getHeros();
    }

    getHeros(): void {
        this._heroService.getHeros()
            .then(hereos => this.heroes = hereos);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
