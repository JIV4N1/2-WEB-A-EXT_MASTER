export function findGift(gifts, giftName, index = 0) {
  if (index === gifts.length)
    return `No se encontró "${giftName}" en la lista.`;
  if (gifts[index] === giftName)
    return `Se encontró "${giftName}" en la posición ${index}.`;
  return findGift(gifts, giftName, index + 1);
}

export default findGift;
