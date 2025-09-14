export function formatNumber(num : number) {
  if (num == null) return "";
  return num.toLocaleString("en-IN"); 
}
