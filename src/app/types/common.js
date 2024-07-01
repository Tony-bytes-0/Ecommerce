export function getEnvColors() {
    //colors
const defaultGray = "#C1C1C1";

const primaryColor = process.env.NEXT_PUBLIC_PRIMARY_COLOR
  ? process.env.NEXT_PUBLIC_PRIMARY_COLOR
  : defaultGray;
const secundaryColor = process.env.NEXT_PUBLIC_SECONDARY_COLOR
  ? process.env.NEXT_PUBLIC_SECONDARY_COLOR
  : defaultGray;
const defaultColor = process.env.defaultColor
  ? process.env.defaultColor
  : defaultGray;

  return {primaryColor, secundaryColor, defaultColor}
}

export const globalStyle = {
    fontFamily: '"Segoe UI", Arial, sans-serif',
  };