import React from 'react';
import { shallow } from 'enzyme';
import Specialty from './Specialty';

it('should display value', () => {
  const expected = 'foo';
  const wrapper = shallow(<Specialty value={expected} onChange={jest.fn()} />);

  expect(wrapper.find('input').props().value).toContain(expected);
});

it('should call onChange with the changed value', () => {
  const expected = 'new';
  const mockOnChange = jest.fn();
  const wrapper = shallow(<Specialty value={'old'} onChange={mockOnChange} />);

  wrapper.find('input').simulate('change', { target: { value: expected } });

  expect(mockOnChange).toHaveBeenCalledWith(expected);
});
