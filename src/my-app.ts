import {route} from '@aurelia/router';

// Local modules.
import {Home} from './screens/home';

@route({
  routes: [
    {
      id: 'home',
      path: ['', 'home'], // entry
      component: Home,
      title: 'Home'
    }
  ],
  fallback: Home // 404 fallback
})

export class MyApp {}
