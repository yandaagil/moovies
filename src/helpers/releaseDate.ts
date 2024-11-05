export const releaseDate = (date: string): string => {
  const dateParts = date.split('-');
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]);
  const day = parseInt(dateParts[2]);

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}
