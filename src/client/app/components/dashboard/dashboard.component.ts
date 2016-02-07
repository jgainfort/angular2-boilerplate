import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import {Hero, HeroesService} from '../heroes/heroes.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/components/dashboard/dashboard.component.html',
    styleUrls: ['app/components/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    public heroes: Hero[] = [];

    constructor(private _heroesService: HeroesService, private _router: Router) { }

    ngOnInit(): void {
        this._heroesService.getHeroes()
            .subscribe(heroes => {
                this.heroes = heroes.slice(1, 5);
            });
    }

    goToDetail(hero: Hero): void  {
        this._router.navigate(['HeroDetail', { id: hero.id }]);
    }
}