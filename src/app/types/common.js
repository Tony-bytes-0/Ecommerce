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

  export const baseDashboardContainer = {
    paddingTop: "10%",
    paddingLeft: "4rem",
    paddingRight:"4rem",
    paddingBottom: "2rem",
    height: "100%",
    width: "100%",
    minHeight: "100vh",
    color: "#000000",
    backgroundImage: 'linear-gradient(to bottom, #222239, #000000)',
    overflowY: 'scroll',
    flexShrink: 1
  };