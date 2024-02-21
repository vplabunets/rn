export function convertToUSD(initialNumber: number) {
  return initialNumber.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}
