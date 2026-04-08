export function maxDivideConquer(arr, left = 0, right = null) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("El arreglo debe ser un arreglo no vacío");
  }
  if (right === null) right = arr.length - 1;
  if (left === right) return arr[left];
  const mid = Math.floor((left + right) / 2);
  const maxLeft = maxDivideConquer(arr, left, mid);
  const maxRight = maxDivideConquer(arr, mid + 1, right);
  return maxLeft > maxRight ? maxLeft : maxRight;
}

export default maxDivideConquer;
