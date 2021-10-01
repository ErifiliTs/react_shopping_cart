export default function formatCurrency(num) {
  return parseFloat(num).toFixed(1).toLocaleString() + " €";
}
