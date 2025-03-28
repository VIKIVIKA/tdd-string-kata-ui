export const calculate = (input?: string): number => {
  if (!input) return 0; // Handle null, undefined, or empty string

  input = input.trim();
  let delimiter = /[,]/;

  // Support custom delimiter
  if (input.startsWith("//")) {
    const parts = input.split("\n");
    if (parts.length > 1) {
      delimiter = new RegExp(parts[0].slice(2));
      input = parts.slice(1).join("\n");
    } else {
      return 0; // Invalid format case
    }
  }

  const numbersToAdd = input.split(delimiter).map(Number).filter(num => !isNaN(num));
  const negatives = numbersToAdd.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
  }

  return numbersToAdd.reduce((sum, num) => sum + num, 0);
};
