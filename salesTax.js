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
//Helper function that calculates the total tax amount
const taxCalculator = (sales, taxRate) => {
  return sales * taxRate;
};

const calculateSalesTax = (salesData, taxRates) => {
  //Calculates totalSales of each object from the input
  let totalSales = salesData.map((obj) => {
    return obj.sales.reduce((acc, curr) => acc + curr);
  });
  //Loops through the key of tax rates in the 'taxRates' variable
  for (let state in taxRates) {
    //Loops through salesData object input objects
    for (let i = 0; i < salesData.length; i++) {
      //converts sales of each object into a single 'totalSales'
      salesData[i].sales = totalSales[i]; // ******
      //checks if the state of taxrate variable matches the current looping object's province
      if (state === salesData[i].province) {
        //If it matches, assign new key 'tax' to the object and assign total tax as a value
        salesData[i]['tax'] = taxCalculator(salesData[i].sales, taxRates[state]); // ******
      }
    }
  }
  //Initialize final return object
  const returnObj = {};
  
  //loops through objects of input object
  for (let obj of salesData) {
    //Checks if the result output already has current looping property
    if (!returnObj[obj.name]) {
      //If not, create an object and add it to the return object
      returnObj[obj.name] = {
        totalSales: obj.sales,
        totalTaxes: obj.tax
      };
      //If yes, add on below values
    } else {
      returnObj[obj.name].totalSales += obj.sales;
      returnObj[obj.name].totalTaxes += obj.tax;
    }
  }
  //return final object
  return returnObj;
};

const results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);