import { render, screen } from '@testing-library/react';
import { DEFAULT_LIST_ITEMS, NUMBER_OF_ITEMS } from '../../constants/item-list-consants';
import ItemList from './item-list';

test('renders item list', () => {
    render(<ItemList baseListOfItems={DEFAULT_LIST_ITEMS} numberToDisplay={NUMBER_OF_ITEMS} />);
    const A_div = screen.getByText(/A/);
    expect(A_div).toBeInTheDocument();
  });
  