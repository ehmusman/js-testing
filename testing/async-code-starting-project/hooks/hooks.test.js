import { it, expect, beforeAll, beforeEach, afterAll, afterEach} from 'vitest';

import { User } from './hooks';

// beforeAll, beforeEach, afterAll, afterEach
// these are hooks
const testEmail = 'test@test.com';
let user = new User(testEmail);

// beforeAll(() => {
//   console.log("beforeAll")
// })
// beforeEach(() => {
//   console.log("beforeEach")
// })
// afterAll(() => {
//   console.log("afterAll")
// })
afterEach(() => {
  user = new User(testEmail)
  // console.log("afterEach")
})
// after all can also be used for clean up work.
// like we create a dummy database for testing and after running the test we'll remove the dummy database in after all hook
it.concurrent('should update the email', () => {
  const newTestEmail = 'test2@test.com';

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it.concurrent('should have an email property', () => {

  expect(user).toHaveProperty('email');
});

it.concurrent('should store the provided email value', () => {
  expect(user.email).toBe(testEmail);
});

it.concurrent('should clear the email', () => {

  user.clearEmail();

  expect(user.email).toBe('');
});

it.concurrent('should still have an email property after clearing the email', () => {
  user.clearEmail();

  expect(user).toHaveProperty('email');
});


// concurrent helps to run all the tests in parallel.
// we can also add concurrent with describe like describe.concurrent.
// than the tests inside this will run parallel ad we dont need to repeat concurrent code with each it.