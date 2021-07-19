/* Function*/
// phải trả về kdl và xác định chúng ngay từ đầu
const square = (side: number) => side * side;
console.log(square(4));

let greet: Function;
greet = () => console.log("hello");
greet();

const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
};
console.log(add(5, 6, 7));
add(1, 2, 3);
add(1, 2, "ha tan");
add(1, 3);

const addDefault = (a: number, b: number, c: number | string = 10) => {
  console.log("sum", a + b);
  console.log(c);
};
addDefault(1, 4);

const minus = (a: number, b: number): number => a - b;
