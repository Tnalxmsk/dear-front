import { useQuery } from '@tanstack/react-query';
import { getAvailableLetterPaper } from '../../apis/letter.ts';

export const useGetAvailablePaper = () => {
  const { data, isError, isPending } = useQuery({
    queryKey: ['available-papers'],
    queryFn: () => getAvailableLetterPaper().then((res) => res?.result),
  });

  return { data, isError, isPending };
};
