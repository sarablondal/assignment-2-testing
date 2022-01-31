import { DATE_UNIT_TYPES } from "../constants";
import { getCurrentYear, add, isWithinRange, isDateBefore, isSameDay} from "../dateUtils"

const date_type = DATE_UNIT_TYPES;

describe("Get current year", () => {
    it('should return current year', () => {
      const result = getCurrentYear();
      expect(result).toBe(2022);
     })
});

describe("Add a new date unit to a date", () => {
  it("Should add x many days to date", () => {
    const date = new Date(2022, 0, 1);
    const new_date = add(date, 1);
    expect(new_date.getDate()).toBe(2);
  });
  it("Should add x many months to date", () => {
    const date = new Date(2022, 0, 1);
    const new_date = add(date, 1, date_type.MONTHS);
    expect(new_date.getDate()).toBe(1);
  });
  it("Should add x many years to date", () => {
    const date = new Date(2022, 0, 1);
    const new_date = add(date, 1, date_type.YEARS);
    expect(new_date.getDate()).toBe(1);
  });
});

describe('Check whether date is within range', () => {
  it('should return true if date is within range', () => {
    const date = new Date(2022, 2, 2);
    const date_from = new Date(2021, 0, 1);
    const date_to = new Date(2022, 3, 3);
    const date_range = isWithinRange(date, date_from, date_to);
    expect(date_range).toBe(true);
  });
  it('should return false if date is outside range', () => {
    const date = new Date(2022, 2, 2);
    const date_from = new Date(2021, 0, 1);
    const date_to = new Date(2022, 1, 1);
    const date_range = isWithinRange(date, date_from, date_to);
    expect(date_range).toBe(false);
  });
});

describe('Check whether date is before date', () => {
  it('should return true if date is before compared date', () => {
    const date = new Date(2022, 0, 1);
    const compare_date = new Date(2022, 1, 1);
    const date_is_before = isDateBefore(date, compare_date);
    expect(date_is_before).toBe(true);
  });
  it('should return false if date is not before compared date', () => {
    const date = new Date(2022, 2, 1);
    const compare_date = new Date(2022, 1, 1);
    const date_is_before = isDateBefore(date, compare_date);
    expect(date_is_before).toBe(false);
  });
});

describe('Check whether date is the same day', () => {
  it('should return true if date is the same day', () => {
    const date = new Date(2022, 1, 1);
    const other_date = new Date(2022, 1, 1);
    const is_same_date = isSameDay(date, other_date);
    expect(is_same_date).toBe(true);
  });
  it('should return false if date is not the same day', () => {
    const date = new Date(2022, 1, 1);
    const other_date = new Date(2022, 2, 3);
    const is_same_date = isSameDay(date, other_date);
    expect(is_same_date).toBe(false);
  })
})