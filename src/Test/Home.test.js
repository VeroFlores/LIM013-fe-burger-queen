import React from 'react';
import { render } from '@testing-library/react';

import Home from '../components/Pages/Home';

describe('text', () => {
  it('find Quien eres', () => {
    const { getByText } = render(<Home />);
    getByText('¿Quién eres?');
  });
});
