import View from './View';
import headlineSlotFactory from './slots/headline/headlineSlotFactory';

export default async function layoutFactory(widget) {
  return {
    View,
    slots: [
      headlineSlotFactory(widget),
    ],
  }
}
