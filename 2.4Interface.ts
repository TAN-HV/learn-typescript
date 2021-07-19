//Chức năng chính của Interfaces là sử dụng để kiểm tra, xem một đối tượng có phù hợp với một cấu trúc nhất định hay không,
// trợ giúp trong giai đoạn giai đoạn phát triển.

interface Person {
  name: string
  age: number
  speak(lang: string): void
  spend(amount: number): number
}

const hatan: Person = {
  name: "ha tan",
  age: 26,
  speak(text: string): void {
    console.log(text)
  },
  spend(amt: number): number {
    return amt
  },
};
console.log(hatan.speak('Vietnamese'));
console.log(hatan.spend(10000000), "VND");