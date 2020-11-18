import { render } from '@testing-library/react';
import App from './App';


describe('App', () => {
  it('renders components', () => {
      const { container } = render(<App/>)
      expect(container.firstChild).toMatchSnapshot()
  })
})

