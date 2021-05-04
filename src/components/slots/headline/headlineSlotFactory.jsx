import HeadlineSlot from './HeadlineSlot';

export default function headlineSlotFactory() {
  return {
    name: 'headline',
    props: {
      containerSelector: '.slot1',
    },
    View: HeadlineSlot,
  }
}
