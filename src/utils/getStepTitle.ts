export const getStepTitle = (step: number) => {
  switch (step) {
    case 1:
      return '편지지 선택';
    case 2:
      return '글씨체 선택';
    case 3:
      return '수신인 입력';
    case 4:
      return '';
    case 5:
      return '실링왁스 선택';
    default:
      return '';
  }
}
