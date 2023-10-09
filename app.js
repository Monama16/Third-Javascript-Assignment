function countNumbers(array) {
    const counts = {};
    for (const number of array) 
    {
      if (counts[number]) 
      {
        counts[number]++;
        } 
        else 
        {
        counts[number] = 1;
        }
    }
    return counts;
}

const arrayInput = [1, 2, 2, 3, 3, 4, 4, 5, 5, 5];
const result = countNumbers(arrayInput);
console.log(result);