export type Output = Record<number, number>;

// Do not modify
export const NUMBER_OF_50K = 1;
export const NUMBER_OF_20K = 3;
export const NUMBER_OF_10K = 2;

export function withdraw(amount: number): Output {
  // TODO: Implement here
  let _amount = amount;
  const result: any = {};
  while (_amount > 0) {
    if (_amount / 50000 >= 1) {
      result["50"] = 1;
      _amount -= 50000;
      if (_amount / 20000 >= 3) {
        result['20'] = 3
      } else {
        result['20'] = Math.floor(_amount/20000)
      }
      _amount = _amount - 50000 - 20000 * result['20']
      const temp = _amount / 10000
      if (temp > 2) {
        throw new Error("")
      } else  if(temp===2){
        result["10"] = 2
        return result
      } else {
        result['10'] = Math.floor(temp)
        return result
      }
    } else {
      
    }
  }
  return { 50: 1, 20: 0, 10: 0 };
}
