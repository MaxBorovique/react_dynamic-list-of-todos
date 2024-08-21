import { Todo } from './types/Todo';
import { User } from './types/User';

// eslint-disable-next-line operator-linebreak
const BASE_URL =
  'https://mate-academy.github.io/react_dynamic-list-of-todos/api';

// This function creates a promise
// that is resolved after a given delay
function wait(delay: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

async function getAsync<T>(url: string): Promise<T> {
  // eslint-disable-next-line prefer-template
  const fullURL = BASE_URL + url + '.json';

  await wait(300);
  const response: Response = await fetch(fullURL);

  return response.json();
}

export const getTodos = () => getAsync<Todo[]>('/todos');

export const getUser = (userId: number) => getAsync<User>(`/users/${userId}`);

// export const getUserCustom = async (userId: number): Promise<User> => {
//   await wait(300);
//   const response = await fetch(
//     `https://mate-academy.github.io/react_dynamic-list-of-todos/api/users/${userId}.json`,
//   );

//   return response.json();
// };
