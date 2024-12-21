import { useQuery } from '@tanstack/react-query';
import { getWax } from '../../apis/letter.ts';

export const useGetAvailableWax = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ['waxes'],
    queryFn: () => getWax()
  });

  return { data, error, isPending };
}
