export interface AvailablePaperType {
  name: string;
  description: string;
}

export interface AvailablePaperResponse {
  letterPaperList: AvailablePaperType[];
}

export enum PaperType {
  TYPE1 = 'TYPE1',
  TYPE2 = 'TYPE2',
  TYPE3 = 'TYPE3',
  TYPE4 = 'TYPE4',
}

export const PAPER_TYPE_DETAILS = {
  [PaperType.TYPE1]: {
    label: 'Type 1',
    src: '/src/assets/bg-paper-type-one.png',
    description: '기본 흰색 질감 종이',
  },
  [PaperType.TYPE2]: {
    label: 'Type 2',
    src: '/src/assets/bg-paper-type-two.png',
    description: '심플하고 깨끗한 무지 종이',
  },
  [PaperType.TYPE3]: {
    label: 'Type 3',
    src: '/src/assets/bg-paper-type-three.png',
    description: '부드러운 질감이 느껴지는 베이지 톤의 종이',
  },
  [PaperType.TYPE4]: {
    label: 'Type 4',
    src: '/src/assets/bg-paper-type-four.png',
    description: '차분한 그리드 패턴이 돋보이는 종이',
  },
};

export type PaperTypeKey = keyof typeof PAPER_TYPE_DETAILS;
