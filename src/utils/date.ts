import dayjs from 'dayjs';

export const converMinutesToTimeString = (minutes?: number) => {
  if (!minutes) {
    return null;
  }
  const timeString = dayjs().startOf('day').add(minutes, 'minute').format('H[h]m[m]');
  return timeString;
};

export const formattedDate = (dateString?: string) => {
  const result = dayjs(dateString).format('D MMMM YYYY');
  return result;
};
