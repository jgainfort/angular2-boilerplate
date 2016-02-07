import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

import {Hero, HeroesService} from '../heroes/heroes.service';
import './hero-detail.component.css!';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/components/hero-detail/hero-detail.component.html',
    syleUrls: ['app/compoents/hero-detail/hero-detail.component.css'],
    directive: [ROUTER_DIRECTIVES]
})

export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(private _heroesService: HeroesService, private _routeParams: RouteParams) { }

    ngOnInit(): void {
        if (!this.hero) {
            let id = +this._routeParams.get('id');
            this._heroesService.getHero(id)
                .subscribe(hero => this.hero = hero);
        }
    }
}