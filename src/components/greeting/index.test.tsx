import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Greeting from './index';

describe('Greeting', () => {
   it('should render', () => {
      render(<Greeting />);
      const paragraph = screen.getByText("Here is a greeting paragraph that I made", {exact: false});
      expect(paragraph).toBeInTheDocument();
   });
});
