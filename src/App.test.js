import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

//  tasks submitted are displayed
//  submission button adds task (fireEvent)
test('submission button will add a task, which will also display the delete button', () => {
  render(<App />);
  const submitButton = screen.getByText("Add Me");
  fireEvent.click(submitButton)
  const deleteButton = screen.getByText("Delete Me");
  expect(deleteButton).toBeInTheDocument();

});
//  deletion of an item removed the element so it is no longer displayed to the user
test('use of delete button after using submit button will remove the entry and its delete button', () => {
  render(<App />);
  const submitButton = screen.getByText("Add Me");
  fireEvent.click(submitButton)
  const deleteButton = screen.getByText("Delete Me");
  fireEvent.click(deleteButton)
  expect(deleteButton).not.toBeInTheDocument();

});

