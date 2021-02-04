// You are given a snapshot of a queue of stocks that have changing prices coming in from a stream. Remove the outdated stocks from the queue.

// Example:
// $ snapshot = [
//   { sym: ‘GME’, cost: 280 },
//   { sym: ‘PYPL’, cost: 234 },
//   { sym: ‘AMZN’, cost: 3206 },
//   { sym: ‘AMZN’, cost: 3213 },
//   { sym: ‘GME’, cost: 325 }
// ]
// $ stockQueue(snapshot)
// $ [{ sym: ‘PYPL’, cost: 234 },
//    { sym: ‘AMZN’, cost: 3213 },
//    { sym: ‘GME’, cost: 325 }]

const snapshot = [
    { 'sym': 'GME', 'cost': 280 },
    { 'sym': 'PYPL', 'cost': 2134 },
    { 'sym': 'AMZN', 'cost': 3206 },
    { 'sym': 'AMZN', 'cost': 3213 },
    { 'sym': 'GME', 'cost': 325 },
    { 'sym': 'PYPL', 'cost': 2344 },
    { 'sym': 'GME', 'cost': 3325 },
    { 'sym': 'AMZN', 'cost': 3206 },
    { 'sym': 'AMZN', 'cost': 3212223 },
];

const stockQueue = (stocks) => {
    const latestStocks = stocks.reduce((accumulator, stock) => {
        accumulator = accumulator.filter(item => item.sym !== stock.sym);
        accumulator.push(stock);
       
        return accumulator;
    }, [])
    console.log(latestStocks);
    return latestStocks;
}

stockQueue(snapshot);