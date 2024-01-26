export const releaseDateStr = (date: string): string => {
  const dateParts = date.split('-');
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]);
  const day = parseInt(dateParts[2]);

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}

export const runtime = (time: number): string => {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  const formattedTime = `${hours}h ${minutes}m`;

  return formattedTime;
};

export const calculateAge = (birthdate: string, deathdate?: string): string => {
  const birthDate = new Date(birthdate);
  const end = deathdate ? new Date(deathdate) : new Date();

  const age = end.getFullYear() - birthDate.getFullYear();
  const months = end.getMonth() - birthDate.getMonth();

  if (months < 0 || (months === 0 && end.getDate() < birthDate.getDate())) {
    if (deathdate) {
      return `${deathdate} (${age - 1} years old)`;
    } else {
      return `${age - 1} years old`;
    }
  } else {
    if (deathdate) {
      return `${deathdate} (${age} years old)`;
    } else {
      return `${age} years old`;
    }
  }
};
