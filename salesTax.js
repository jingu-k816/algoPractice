/**
 * Expected output from the given example.
 * {
 *  Telus: {
 *    totalSales: 1300,
 *    totalTaxes: 144
 *  },
 *  Bombardier: {
 *    totalSales: 800,
 *    totalTaxes: 40
 *  }
 * }
 */

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

const calculateSalesTax = (salesData, taxRates) => {
  
  const returnObj = {};
  
  for (let {name, province, sales} of salesData) {
    if (!returnObj[name]) {
      returnObj[name] = {
        totalSales: 0,
        totalTaxes: 0
      };
    }
    let totalSales = sales.reduce((acc, curr) => acc + curr);
    returnObj[name].totalSales += totalSales;
    returnObj[name].totalTaxes += taxRates[province] * totalSales;
  }
  
  return returnObj;
};

const results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);