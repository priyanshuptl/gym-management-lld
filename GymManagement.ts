import { Booking } from './Booking';
import { Slot } from './Slot';
import { User } from './User';
import { getDefaultSlots } from './utils';

export class GymManagement {
  name: string;
  address: string;
  private slots: Slot[] = [];
  private bookings: Booking[] = [];

  constructor(name: string, address: string) {
    this.address = address;
    this.name = name;

    const slots = getDefaultSlots();
    this.addSlots(slots);
  }

  addSlots(slots: Slot[]) {
    this.slots = slots;
  }

  getAvailableSlots() {
    return this.slots.filter((slot) => {
      const slotBookings = this.bookings.filter(
        (booking) => booking.slot === slot
      );

      // Don't allow more than 3 bookings for the same slot
      return slotBookings.length < 3;
    });
  }

  bookSlot(user: User, slot: Slot) {
    const existingSlot = this.bookings.find(
      (booking) => booking.slot === slot && booking.user === user
    );

    if (existingSlot) {
      throw new Error('Cannot book the same slot twice');
    }

    this.bookings.push({
      slot,
      user,
    });
  }

  getBookings() {
    return this.bookings;
  }
}
