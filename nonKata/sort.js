const cars = [
  {
    model: 'Chevetão',
    price: 7000,
  },
  {
    model: 'Gol Quadrado',
    price: 3500,
  },
  {
    model: 'Passat',
    price: 5000,
  },
  {
    model: 'Opalão',
    price: 12000,
  },
  {
    model: 'Del Rey 2',
    price: 4000,
  },
  {
    model: 'Maverick v8 76',
    price: 53000,
  },
]

const carsSortedByPrice = cars.sort((carA, carB) => carA.price > carB.price ? 1 : -1)

console.log(carsSortedByPrice)
