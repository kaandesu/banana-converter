import { convert } from "../index"; // Update the path based on your project structure

describe("Banana Converter", () => {
  it("should convert from Banana to inch", () => {
    const bananaLength = 1;
    const result = convert(bananaLength, "banana", "inch");
    expect(result).toBe(7.0);
  });

  it("should convert from inch to Bananas", () => {
    const inchLength = 7.0;
    const result = convert(inchLength, "inch", "banana");
    expect(result).toBe(1);
  });

  it("should convert from 1.5 banana to Centimeters", () => {
    const bananaLength = 1.5;
    const result = convert(bananaLength, "banana", "cm");
    expect(result).toBe(26.67);
  });

  it("should convert from Centimeters to Bananas", () => {
    const cmLength = 17.78;
    const result = convert(cmLength, "cm", "banana");
    expect(result).toBe(1);
  });

  it("should convert from Banana to Feet", () => {
    const bananaLength = 1;
    const result = convert(bananaLength, "banana", "feet");
    expect(result).toBe(0.583);
  });

  it("should convert from Feet to Bananas", () => {
    const feetLength = 0.583;
    const result = convert(feetLength, "feet", "banana");
    expect(result).toBe(1);
  });

  it("should convert from Banana to Meters", () => {
    const bananaLength = 1;
    const result = convert(bananaLength, "banana", "meters");
    expect(result).toBe(0.178);
  });

  it("should convert from Meters to Bananas", () => {
    const metersLength = 215.5;
    const result = convert(metersLength, "meters", "banana");
    expect(Math.floor(result)).toBe(1210);
  });

  it("should convert from Banana to yard", () => {
    const bananaLength = 1;
    const result = convert(bananaLength, "banana", "yard");
    expect(result).toBe(0.194);
  });

  it("should convert from yard to Bananas", () => {
    const yardLength = 0.194;
    const result = convert(yardLength, "yard", "banana");
    expect(result).toBe(1);
  });

  it("should convert from Banana to kilometer", () => {
    const bananaLength = 1;
    const result = convert(bananaLength, "banana", "kilometer");
    expect(result).toBe(0.000178);
  });

  it("should convert from kilometer to Bananas", () => {
    const kmLength = 0.000178;
    const result = convert(kmLength, "kilometer", "banana");
    expect(result).toBe(1);
  });

  it("should convert from Banana to mile", () => {
    const bananaLength = 1;
    const result = convert(bananaLength, "banana", "mile");
    expect(result).toBe(0.00011);
  });

  it("should convert from mile to Bananas", () => {
    const mileLength = 0.00011;
    const result = convert(mileLength, "mile", "banana");
    expect(result).toBe(1);
  });
});
