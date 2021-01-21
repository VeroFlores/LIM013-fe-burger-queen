import React from 'react';
import { render, screen } from '@testing-library/react';
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required
import Product from '../components/Order-view/Product';

const items = {
  category: 'cafés',
  description: 'Café con leche',
  menu: 'desayuno',
  price: 7,
};

describe('Todos', () => {
  // it('select product', () => {
  //   const { getByText, getByTestId } = render(
  //     <Product
  //       itemProduct={items}
  //     />,
  //   );
  //   fireEvent.click(getByText('Select'));
  //   const elem = getByTestId('item');
  //   expect(elem.classList[0]).toBe('selected');
  // });
  it('show description for each item', () => {
    render(
      <Product
        itemProduct={items}
      />,
    );
    expect(screen.getByTestId('desayuno')).toBeInTheDocument();
  });
});
