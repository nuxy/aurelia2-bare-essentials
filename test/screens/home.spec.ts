import {render} from '../helper';
import {Home}   from '../../src/screens/home';

describe('home', function() {
  test('should render message', async function() {
    const node = (await render('<home></home>', Home)).querySelector('h2');
    const text = node.textContent;

    expect(text.trim()).toBe('Hello World!');
  });
});
