export const formatTime = (date) => {
  const isItTwelveNow = date.getHours() % 12 === 0;
  const hours = isItTwelveNow ? date.getHours() : date.getHours() % 12;
  const minutes = date.getMinutes();
  const timePeriodAbbreviation = date.getHours() > 12 ? `PM` : `AM`;

  return `${hours}:${minutes} ${timePeriodAbbreviation}`;
};
