import {Component} from 'angular2/core';

import {Hero} from '../hero/hero';

@Component({
    selector: 'hero-detail',
    templateUrl: 'app/components/hero-detail/hero-detail.html',
    inputs: ['hero']
})

export class HeroDetailComponent {
    public hero: Hero;
}