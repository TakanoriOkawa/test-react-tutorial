import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// testの内容を文字列で記述
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react hoge/i);
  // expect:期待する
  expect(linkElement).toBeInTheDocument();
});
