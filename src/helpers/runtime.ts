export const runtime = (time: number): string => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  const formattedTime = `${hours}h ${minutes}m`;

  return formattedTime;
};