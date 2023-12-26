export function formatDateToString(inputDateString: string) {
  const inputDate = new Date(inputDateString);

  const month = (inputDate.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = inputDate.getDate().toString().padStart(2, '0');

  const formattedDate = `${month}.${day}`;

  return formattedDate;
}

export function isOnedaySession(startDate: string, endDate: string) {
  const seperator = 'T';
  if (!endDate.includes(seperator)) return false;

  const startNewtDate = new Date(startDate);
  const endNewDate = new Date(endDate);

  const ONE_DAY_SECOND = 1000 * 60 * 60 * 24;
  const isOverOneDay =
    endNewDate.getTime() - startNewtDate.getTime() > ONE_DAY_SECOND;
  const time = endDate.split(seperator).pop();

  return !isOverOneDay && time === '00:00:00';
}
