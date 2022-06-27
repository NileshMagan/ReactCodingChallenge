import { Input } from '@mui/material';
import { render, screen } from '@testing-library/react';
import InputText from './input-text';

test('renders input list', () => {
    const handleTextChange = () => {};
    render(<InputText setSearchTerm={handleTextChange} />);
    const linkElement = screen.getByText(/test/i);
    expect(linkElement).toBeInTheDocument();
  });
  