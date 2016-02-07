import {Component} from 'angular2/core';

import {HeroComponent} from './hero/hero.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/components/app.html',
    directives: [HeroComponent]
})

export class AppComponent {
    public title: string = 'Tour of Heroes';
}
