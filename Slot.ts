type SlotType = 'cardio' | 'weights';

// We will use 24 hours based numbers for start and end timings
export class Slot {
  start: number;
  end: number;
  type: SlotType;

  constructor(start: number, end: number, type: SlotType) {
    this.start = start;
    this.end = end;
    this.type = type;
  }
}
