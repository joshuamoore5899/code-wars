// Surface Area and Volume of a Box
//
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
  let volume = width * height * depth;
  let area = (width * height * 2) + (depth * height * 2) + (width * depth * 2);
  return [area, volume];
}
