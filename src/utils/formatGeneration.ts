export default function formatGeneration(generation: number) {
  if (generation % 100 >= 11 && generation % 100 <= 13) {
    return `${generation}th`;
  }

  switch (generation % 10) {
    case 1:
      return `${generation}st`;
    case 2:
      return `${generation}nd`;
    case 3:
      return `${generation}rd`;
    default:
      return `${generation}th`;
  }
}
