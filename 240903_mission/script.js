// else if문
const num = 60;

if (num >= 80) {
  console.log("A");
} else if (num >= 60) {
  console.log("B");
} else if (num >= 40) {
  console.log("C");
} else {
  console.log("D");
}

// switch문
let site = "google";

switch (site) {
  case "google":
    console.log("google");
    break;
  case "naver":
    console.log("naver");
    break;
  case "daum":
    console.log("daum");
    break;
  default:
    console.log("default");
    break;
}

// while문
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// do while문
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 3);

// for문
const numbers = [2, 4, 6, 8, 10, 11, 14, 15, 18, 20];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    // 짝수일 경우, 현재 반복을 건너뜀
    continue;
  }

  if (numbers[i] > 10) {
    // 10보다 큰 홀수를 찾았을 때, 해당 값을 출력하고 루프를 종료합니다.
    console.log(numbers[i]);
    break;
  }
}
