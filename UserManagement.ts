import { User } from './User';

// All of its operations can be done with a third-party library or can be saved in a DB.
export class UserManagement {
  users: User[] = [];

  register(user: User) {
    this.users.push(user);
  }

  signIn(email: string, password: string) {
    const user = this.users.find((u) => u.email === email);

    if (!user) {
      throw new Error('User not found!');
    }

    if (user.password === password) {
      // Logged in successfully
      return user;
    }

    throw new Error('Invalid email or password');
  }
}
