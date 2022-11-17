import { render, screen } from '@testing-library/react';
import React from 'react';
import Greeting from './index';

// FRIDAY: PICK UP ON THIS
describe('Greeting', () => {
   it('should render', () => {
      render(<Greeting />);
      expect(screen.getByRole("p")).toBeInTheDocument();
   });
});
