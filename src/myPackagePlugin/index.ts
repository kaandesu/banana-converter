import "./style.css";

const conversions = {
  banana: 1,
  inch: 7.0,
  cm: 17.78,
  feet: 0.583,
  meter: 0.178,
  yard: 0.194,
  kilometer: 0.000178,
  mile: 0.00011,
};

type Keys = keyof typeof conversions;

export const convert = <T extends Keys>(
  value: number,
  fromUnit: T,
  toUnit: T extends "banana" ? Exclude<Keys, T> : "banana"
): number => {
  if (!conversions[fromUnit] || !conversions[toUnit]) {
    throw new Error("Invalid unit");
  }

  const lengthInBananas = value / conversions[fromUnit];
  return lengthInBananas * conversions[toUnit];
};
