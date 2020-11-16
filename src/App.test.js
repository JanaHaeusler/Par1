import { render, screen } from '@testing-library/react';
import App from './App';


describe('App', () => {
  it('renders components', () => {
      const { container } = render(<App/>)
      expect(container.firstChild).toMatchSnapshot()
  })
})


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
