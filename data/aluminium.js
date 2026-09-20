// Neloy Enterprise — Aluminium profile database
// Gross list price per 21 ft length.
// These are supplier list prices supplied by the owner.
// The pricing engine should apply any actual discount/commission separately.

const ALUMINIUM_PRICE_DB = {
  standard: {
    "2121N": { name:"3" Outer Top", silver:3854, bronze:3970, black:4089, golden:4624 },
    "2120N": { name:"3" Outer Bottom (H)", silver:3292, bronze:3391, black:3494, golden:3954 },
    "2120A": { name:"3" Outer Bottom (L)", silver:2579, bronze:2655, black:2732, golden:3094 },
    "2122N": { name:"3" Outer Side", silver:2767, bronze:2849, black:2936, golden:3319 },
    "1437N": { name:"4" Outer Top", silver:4529, bronze:4668, black:4805, golden:5434 },
    "1438N": { name:"4" Outer Bottom (H)", silver:3982, bronze:4102, black:4225, golden:4781 },
    "1439N": { name:"4" Outer Side", silver:3263, bronze:3360, black:3462, golden:3916 },
    "1443": { name:"Shutter Lock", silver:3256, bronze:3358, black:3457, golden:3905 },
    "2124": { name:"Inter Lock", silver:3430, bronze:3539, black:3646, golden:4116 },
    "1440": { name:"Shutter Top", silver:2478, bronze:2555, black:2632, golden:2973 },
    "1441": { name:"Shutter Bottom", silver:3533, bronze:3646, black:3758, golden:4239 },
    "1444": { name:"Net Section", silver:2270, bronze:2341, black:2412, golden:2723 },
    "1447": { name:"Net Handle", silver:1779, bronze:1826, black:1886, golden:2133 },
    "2125": { name:"Muck Cover", silver:1541, bronze:1592, black:1639, golden:1849 }
  },

  neo12: {
    "2121N": { name:"3" Outer Top", silver:4822, bronze:4967, black:5215, golden:5736 },
    "2120N": { name:"3" Outer Bottom (H)", silver:4535, bronze:4671, black:4905, golden:5395 },
    "2122N": { name:"3" Outer Side", silver:3738, bronze:3850, black:4043, golden:4447 },
    "1437N": { name:"4" Outer Top", silver:5925, bronze:6103, black:6409, golden:7050 },
    "1438N": { name:"4" Outer Bottom (H)", silver:5337, bronze:5497, black:5772, golden:6349 },
    "1443": { name:"Shutter Lock", silver:4273, bronze:4401, black:4621, golden:5083 },
    "2124": { name:"Inter Lock", silver:4269, bronze:4397, black:4617, golden:5079 },
    "1440": { name:"Shutter Top", silver:3177, bronze:3272, black:3436, golden:3780 },
    "1441": { name:"Shutter Bottom", silver:4500, bronze:4635, black:4867, golden:5353 }
  },

  alloytech: {
    "2121N": { name:"3" Outer Top", silver:3152, bronze:3245, black:3343, golden:3447 },
    "2120N": { name:"3" Outer Bottom (H)", silver:3045, bronze:3138, black:3232, golden:3330 },
    "2122N": { name:"3" Outer Side", silver:2586, bronze:2665, black:2745, golden:2828 },
    "1443": { name:"Shutter Lock", silver:2925, bronze:3013, black:3104, golden:3198 },
    "2124": { name:"Inter Lock", silver:3082, bronze:3174, black:3268, golden:3370 },
    "1440": { name:"Shutter Top", silver:2260, bronze:2326, black:2397, golden:2468 },
    "1441": { name:"Shutter Bottom", silver:3174, bronze:3268, black:3366, golden:3471 }
  },

  door: {
    "4646": { name:"Door Divider", silver:2807, bronze:2887, black:2976, golden:3367 },
    "9984": { name:"Door Closer Cover", silver:2049, bronze:2110, black:2173, golden:2458 },
    "9985A": { name:"Door Closer Section", silver:5325, bronze:5489, black:5657, golden:6393 },
    "9497": { name:"Door Floor Bottom", silver:5707, bronze:5886, black:6066, golden:6848 },
    "9498": { name:"Door Shutter Top", silver:5575, bronze:5747, black:5915, golden:6693 },
    "9499": { name:"Door Shutter Bottom", silver:6802, bronze:7018, black:7223, golden:8164 },
    "9500": { name:"Door Shutter Side", silver:5592, bronze:5768, black:5938, golden:6714 },
    "9999A": { name:"Door Glass Bit", silver:679, bronze:697, black:719, golden:812 },
    "9456": { name:"Door Handle", silver:7520, bronze:7754, black:7987, golden:9022 }
  }
};

const ALUMINIUM_LENGTH_FT = 21;

function aluminiumPerFt(series, dieNo, finish="silver") {
  const item = ALUMINIUM_PRICE_DB?.[series]?.[dieNo];
  if (!item || !item[finish]) return null;
  return item[finish] / ALUMINIUM_LENGTH_FT;
}

function aluminiumCost(series, dieNo, lengthFt, finish="silver") {
  const rate = aluminiumPerFt(series, dieNo, finish);
  if (rate == null) return null;
  return lengthFt * rate;
}
