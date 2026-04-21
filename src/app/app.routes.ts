import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { InstrumentComponent } from './instrument-component/instrument-component';

export const routes: Routes = [
    {path: "", component: Home},
    {path: "home", component: Home},
    {path: "instrument", component: InstrumentComponent},
    {path: "about", component: About}
];
