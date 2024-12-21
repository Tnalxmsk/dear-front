import { axiosInstance } from './axios-instance.ts';
import { BaseResponse } from '../types/base.ts';
import { WaxList } from '../types/write/waxResponse.ts';
import { AvailablePaperResponse } from '../types/write/write.ts';

export const getWax = async (): Promise<BaseResponse<WaxList> | undefined> => {
  try {
    const response = await axiosInstance.get('/wax');
    console.log(response.data);
    return response.data;
  } catch ( error ) {
    console.error(error);
    return undefined;
  }
};

export const getAvailableLetterPaper = async (): Promise<BaseResponse<AvailablePaperResponse> | undefined> => {
  try {
    const response = await axiosInstance.get('/letterPaper');
    console.log(response.data);
    return response.data;
  } catch ( error ) {
    console.error(error);
  }
};
