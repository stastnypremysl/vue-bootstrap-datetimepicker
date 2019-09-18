import {mount} from '@vue/test-utils'

import Component from '../src/component.vue';

describe('datepicker component', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(Component, {
      attachToDocument: true,
      propsData: {
        value: new Date()
      }
    });
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  });

  test('renders input field', () => {
    expect(wrapper.is('input')).toBe(true);
  });

  test('clean up on destroy', () => {
    wrapper.destroy();
    expect(wrapper.isEmpty()).toBe(true);
    expect(wrapper.vm.dp).toBe(null);
  });

});
