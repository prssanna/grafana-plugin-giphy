import React from 'react';
import { SearchBar } from 'components/SearchBar';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';

configure({ adapter: new Adapter() });

const searchFn = jest.fn();
describe('SearchBar', () => {
  it('should not call search function if search box has no value', () => {
    const searchBarComponent = mount(<SearchBar onSearch={searchFn} />);
    const button = searchBarComponent.find('button');
    expect(button.props()['disabled']).toBe(true);
    searchBarComponent.find('button').simulate('click');
    expect(searchFn).toHaveBeenCalledTimes(0);
  });
  it('should call search function on button click if search box has value', () => {
    const searchBarComponent = mount(<SearchBar onSearch={searchFn} />);
    const input = searchBarComponent.find('input');
    input.simulate('change', { target: { value: 'Dog' } });
    searchBarComponent.find('button').simulate('click');
    expect(searchFn).toHaveBeenCalled();
  });
  it('should call search function on enter if search box has value', () => {
    const searchBarComponent = mount(<SearchBar onSearch={searchFn} />);
    const input = searchBarComponent.find('input');
    input.simulate('change', { target: { value: 'Cat' } });
    searchBarComponent.find('button').simulate('keydown', { keyCode: 32 });
    expect(searchFn).toHaveBeenCalled();
  });
});
