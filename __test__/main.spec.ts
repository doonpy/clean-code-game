import {Output, withdraw} from "../main";

describe("main.ts", () => {
  describe("withdraw", () => {
    it('should throw an error when withdraw amount larger than ATM balance', () => {
      expect(() => withdraw(500000)).toThrowError();
    })

    it.each([
      [{50: 1, 20: 3, 10: 2}, 130000],
      [{50: 1, 20: 2, 10: 0}, 90000],
      [{50: 1, 20: 0, 10: 0}, 50000]
    ])('should return %s when amount %s', (expected: Output, amount: number) => {
      expect(withdraw(amount)).toEqual(expected);
    })
  })
})
