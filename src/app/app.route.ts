import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component'
import { JokeComponent } from './joke/joke.component'
import {SubmitJokeComponent } from './submit-joke/submit-joke.component';


export const APP_ROUTES: Routes = [
  { path: 'tellUsAJoke', component: SubmitJokeComponent  },
   { path: 'aboutUs', component: AboutUsComponent  },
   { path: 'home', component: JokeComponent  },

  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
   { path: '0',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: '**', component: JokeComponent }
];
