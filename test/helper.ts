import Aurelia, {CustomElement} from 'aurelia';

export async function render(template: string, ...deps: readonly unknown[]): Promise<HTMLElement> {
  const wrapper = CustomElement.define({name: 'wrapper', template});

  const div = document.createElement('div');

  await Aurelia
    .register(deps)
    .app({host: div, component: wrapper})
    .start();

  return div;
}
