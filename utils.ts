import { Slot } from './Slot';

export const getDefaultSlots = () => {
  const slots: Slot[] = [];
  slots.push(new Slot(6, 7, 'cardio'));
  slots.push(new Slot(6, 7, 'weights'));
  slots.push(new Slot(7, 8, 'cardio'));
  slots.push(new Slot(7, 8, 'weights'));
  slots.push(new Slot(8, 9, 'cardio'));
  slots.push(new Slot(8, 9, 'weights'));
  slots.push(new Slot(18, 19, 'cardio'));
  slots.push(new Slot(18, 19, 'cardio'));
  slots.push(new Slot(19, 20, 'weights'));
  slots.push(new Slot(19, 20, 'weights'));
  slots.push(new Slot(20, 21, 'weights'));
  slots.push(new Slot(20, 21, 'weights'));

  return slots;
};
