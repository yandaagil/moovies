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