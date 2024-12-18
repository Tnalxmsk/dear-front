export const lettersData = [
  // 받는 사람이 "콩"인 편지
  ...Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `제목 ${i + 1}`,
    recipient: "콩",
    sender: `보낸사람${i + 1}`,
    content: `이 편지는 ${i + 1}번째 받은 편지입니다. 소중히 간직하세요.`,
    paperType: "노트선",
    image: "https://via.placeholder.com/212x146",
    date: `2024.11.${(i % 30) + 1}`,
    email: `sender${i + 1}@example.com`,
    quote: "받은 편지는 행복의 시작이다.",
  })),

  // 보낸 사람이 "콩"인 편지
  ...Array.from({ length: 20 }, (_, i) => ({
    id: i + 21,
    title: `제목 ${i + 21}`,
    recipient: `받는사람${i + 21}`,
    sender: "콩",
    content: `이 편지는 ${i + 21}번째 보낸 편지입니다. 행복을 기원합니다.`,
    paperType: "크래프트",
    image: "https://via.placeholder.com/212x146",
    date: `2024.11.${(i % 30) + 1}`,
    email: `recipient${i + 21}@example.com`,
    quote: "보낸 편지는 마음의 전언이다.",
  })),

  // 받는 사람과 보낸 사람이 "콩"인 내게 쓴 편지
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 41,
    title: `내게 쓴 제목 ${i + 41}`,
    recipient: "콩",
    sender: "콩",
    content: `이 편지는 ${i + 41}번째 내게 쓴 편지입니다. 나를 응원합니다.`,
    paperType: "모눈",
    image: "https://via.placeholder.com/212x146",
    date: `2024.11.${(i % 30) + 1}`,
    email: "self@example.com",
    quote: "내게 쓰는 편지는 나를 다독이는 시간이다.",
  })),
];
