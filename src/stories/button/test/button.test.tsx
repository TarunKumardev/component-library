import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import {Button} from '../Button';

describe('App Component Test', () => {
  it ('renders ghost variant', () => {
    const onClick = vi.fn();
    const { getByText } = render(<Button children="Submit" variant='ghost' onClick={onClick} />);
    const button = getByText("Submit")
     fireEvent.click(button);
     expect(onClick).toHaveBeenCalledTimes(1);
  })

//   it('renders learn react link', () => {
//     render(<Button />);
//     const linkElement = screen.getByText(/learn react/i);
//     // expect(linkElement).toBeInTheDocument();
//   });
});