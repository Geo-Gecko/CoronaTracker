
// //density
function getColorden(d) {
  return d > 7500 ? '#993404' :
    d > 7499 ? '#993404' :
    d > 200 ? '#d95f0e' :
    d > 199 ? '#d95f0e' :
    d > 100 ? '#fe9929' :
    d > 99 ? '#fe9929' :
    d > 50 ? '#fed98e' :
    d > 49 ? '#fed98e' :
    d > 7 ? '#ffffd4' :
    d > 6.9 ? '#ffffd4' :
    '#808080';
}

// //poverty
function getColorpov(d) {
  return d > 15 ? '#810f7c' :
    d > 14.9 ? '#810f7c' :
    d > 5 ? '#8856a7' :
    d > 4.9 ? '#8856a7' :
    d > 3 ? '#8c96c6' :
    d > 2.9 ? '#8c96c6' :
    d > 2 ? '#b3cde3' :
    d > 1.9 ? '#b3cde3' :
    d > 0.3 ? '#edf8fb' :
    d > 0.2 ? '#edf8fb' :
    d > null ? '#808080' :
    '#808080';
}

// //elderly
function getColorelderly(d) {
  return d > 15 ? '#253494' :
    d > 14.9 ? '#253494' :
    d > 10 ? '#2c7fb8' :
    d > 9.9 ? '#2c7fb8' :
    d > 5 ? '#41b6c4' :
    d > 4.9 ? '#41b6c4' :
    d > 3 ? '#a1dab4' :
    d > 2.9 ? '#a1dab4' :
    d > 1 ? '#ffffcc' :
    d > 0 ? '#ffffcc' :
    d > null ? '#808080' :
    '#808080';
}

// //aids
function getColoraids(d) {
  return d > 15 ? '#00441b' :
    d > 14.9 ? '#00441b' :
    d > 10 ? '#2a924a' :
    d > 9.9 ? '#2a924a' :
    d > 5 ? '#7bc87c' :
    d > 4.9 ? '#7bc87c' :
    d > 3 ? '#caeac3' :
    d > 2.9 ? '#caeac3' :
    d > 0 ? '#f7fcf5' :
    d > -1 ? '#f7fcf5' :
    d > null ? '#f7fcf5' :
    '#808080';
}

// //prisons
function getColorprisons(d) {
  return d > 6300 ? '#3f007d' :
    d > 6299 ? '#3f007d' :
    d > 3000 ? '#6a51a3' :
    d > 2999 ? '#6a51a3' :
    d > 1000 ? '#a3a0cb' :
    d > 999 ? '#a3a0cb' :
    d > 100 ? '#dcdcec' :
    d > 99 ? '#dcdcec' :
    d > 15 ? '#fcfbfd' :
    d > 14 ? '#fcfbfd' :
    d > null ? '#808080' :
    '#808080';
}

// //water
function getColorwater(d) {
  return d > 80 ? '#08306b' :
    d > 79 ? '#08306b' :
    d > 60 ? '#2879b9' :
    d > 59 ? '#2879b9' :
    d > 40 ? '#73b3d8' :
    d > 39 ? '#73b3d8' :
    d > 20 ? '#c8ddf0' :
    d > 19 ? '#c8ddf0' :
    d > 0 ? '#f7fbff' :
    d > -1 ? '#f7fbff' :
    d > null ? '#808080' :
    '#808080';
}

// // //gdp
function getColorgdp(d) {
  return d > 3300 ? '#bd0026' :
    d > 3299 ? '#bd0026' :
    d > 500 ? '#f03b20' :
    d > 499 ? '#f03b20' :
    d > 200 ? '#fd8d3c' :
    d > 199 ? '#fd8d3c' :
    d > 100 ? '#fecc5c' :
    d > 99 ? '#fecc5c' :
    d > 34 ? '#ffffb2' :
    d > -1 ? '#ffffb2' :
    d > null ? '#808080' :
    '#808080';
}

// // //model
function getColormodel(d) {
  return d > 6.33 ? '#e70000' :
    d > 6.32 ? '#e70000' :
    d > 5.89 ? '#ff0000' :
    d > 5.88 ? '#ff0000' :
    d > 5.46 ? '#ff2020' :
    d > 5.45 ? '#ff2020' :
    d > 5.02 ? '#ff4040' :
    d > 5.01 ? '#ff4040' :
    d > 4.59 ? '#ff6060' :
    d > 4.58 ? '#ff6060' :
    d > 4.15 ? '#ff8080' :
    d > 4.14 ? '#ff8080' :
    d > 3.72 ? '#ff9f9f' :
    d > 3.71 ? '#ff9f9f' :
    d > 3.29 ? '#ffbfbf' :
    d > 3.28 ? '#ffbfbf' :
    d > 2.85 ? '#ffdfdf' :
    d > 2.84 ? '#ffdfdf' :
    d > 2.42 ? '#ffffff' :
    d > 2.41 ? '#ffffff' :
    d > null ? '#808080' :
    '#808080';
}

// // //border districts
function getColorborder(d) {
  return d > 1 ? '#fd8d3c' :
    d > 0 ? '#fd8d3c' :
    '#ffffff';
}

// // //district cases
function getDistrictColor(d) {
  return d > 50 ? '#67000d' :
    d > 49 ? '#67000d' :
    d > 10 ? '#cb181d' :
    d > 9 ? '#cb181d' :
    d > 5 ? '#fb6a4a' :
    d > 4 ? '#fb6a4a' :
    d > 1 ? '#fcbba1' :
    d > 0.5 ? '#fcbba1' :
    d > 0 ? '#ffffff' :
    d > -1 ? '#ffffff' :
    d > null ? '#808080' :
    '#808080';
}

// // //cases per 100000
function getColorugcasesratio(d) {
  return d > 10.0 ? '#bd0026' :
      d > 9.0 ? '#bd0026' :
      d > 5.0 ? '#f03b20' :
      d > 4.0 ? '#f03b20' :
      d > 1.0 ? '#fd8d3c' :
      d > 0.9 ? '#fd8d3c' :
      d > 0.5 ? '#fecc5c' :
      d > 0.4 ? '#fecc5c' :
      d > 0 ? '#ffffff' :
      d > -1 ? '#ffffff' :
      d > null ? '#808080' :
      '#808080';
}
