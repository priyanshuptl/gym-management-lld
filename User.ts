type Gender = 'male' | 'female' | 'other';

export class User {
  name: string;
  email: string;
  password: string; // Hashed
  gender: Gender;

  constructor(name: string, email: string, password: string, gender: Gender) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.gender = gender;
  }
}
