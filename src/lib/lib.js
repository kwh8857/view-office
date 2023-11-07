export function twoDigits(num) {
  return String(num).length !== 1 ? String(num) : `0${num}`;
}
export function normalTime(timestamp) {
  const year = new Date(timestamp).getFullYear();
  const month = twoDigits(new Date(timestamp).getMonth() + 1);
  const date = twoDigits(new Date(timestamp).getDate());
  return `${year}-${month}-${date}`;
}
