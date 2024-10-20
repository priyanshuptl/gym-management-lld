import { Slot } from './Slot';
import { User } from './User';

export class Booking {
  user: User;
  slot: Slot;

  constructor(user: User, slot: Slot) {
    this.user = user;
    this.slot = slot;
  }
}
