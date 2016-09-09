import { NgModule } from '@angular/core';
import { RouterConfig } from '@angular/router';

import { GymComponent }   from './gym.component';
import { GymListComponent } from './gym-list.component';
import { routes } from './gym.routes.ts';

@NgModule({
    imports: [],
    exports: [],
    declarations: [GymComponent, GymListComponent],
    providers: [],
})
export class GymModule { 
    RouterConfig
}
