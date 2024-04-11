import {render} from './helper';
import {MyApp}  from '../src/my-app';

describe('my-app', function() {
  test('should render message', async function() {
    const node = (await render('<my-app></my-app>', MyApp)).firstElementChild;
    const text =  node.textContent;

    expect(text.trim()).toBe('Hello World!');
  });
});
