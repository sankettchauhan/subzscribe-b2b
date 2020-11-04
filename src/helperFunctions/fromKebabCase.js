export const fromKebabCase = (str) => {
  let arr = str.split("-");
  let capital = arr.map(
    (item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
  );
  let capitalString = capital.join(" ");
  return capitalString;
};
