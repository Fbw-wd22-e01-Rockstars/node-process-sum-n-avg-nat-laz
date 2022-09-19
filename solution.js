const arr = process.argv.slice(2);

// console.log(arr)

const numbers = process.argv.slice(3).map((num) => {
  if (isNaN(num)) {
    console.log(
      `Sorry, the argument '${num}' is not a number, please try again`
    );
    process.exit(1);
  } else return +num;
});

const sum = (num) => num.reduce((acc, num) => acc + num, 0);

const avg = (num) => num.reduce((acc, num) => acc + num, 0) / num.length;

switch (arr[0]) {
  case "sum":
    console.log(sum(numbers));
    break;
  case "avg":
    console.log(avg(numbers));
    break;
  default:
    console.log(
      'I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)'
    );
    break;
}
