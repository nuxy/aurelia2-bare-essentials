import {route} from '@aurelia/router';

// Local modules.
import {Home} from './screens/home';

@route({
  routes: [
    {
      id: 'home',
      path: ['', 'home'],
      component: Home,
      title: 'Home'
    }
  ]
})

export class MyApp {}
