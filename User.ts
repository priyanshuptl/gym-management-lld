export class User {
  name: string;
  email: string;
  password: string; // Hashed
  gender: 'male' | 'female' | 'other';
}
