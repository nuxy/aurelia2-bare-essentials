import {IRouteableComponent, IRoute} from '@aurelia/router';

// Local modules.
import {Home} from './screens/home';

export class MyApp implements IRouteableComponent {
  static routes: IRoute[] = [
    {
      id: 'home',
      path: ['', 'home'],
      component: Home,
      title: 'Home'
    }
  ];
}
