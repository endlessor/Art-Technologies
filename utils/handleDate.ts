export const handleGetDate = (date: string) => {
  let d = new Date(date);
  let formattedDate = `${d.getDay()}.${d.getMonth()}.${d.getFullYear()}`;
  return formattedDate;
};
