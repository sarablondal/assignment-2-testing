import { getCurrentYear, add, isWithinRange, isDateBefore, isSameDay} from "../dateUtils"
describe("Date Utils", () => {
    it('should return new date', () => {
      const date = new Date();
    }),
    it('should return new year', () => {
      const result = getCurrentYear();
      expect(result).toBe(2022);
     })
    // it('should add a new date'), () => {
    //   const date = add(new Date(), 1);
    // },
    // it('should check if date is in range', () => {
    //   const result = new Date();
  
});
