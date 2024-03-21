import { useMutation } from '@tanstack/react-query';
import { KakaoRepository } from '../repositories';

type MutationFnProps = {
  code: string;
};

export function useKakaoAccessToken() {
  return useMutation({
    mutationFn: ({ code }: MutationFnProps) => KakaoRepository.createAccessToken({ code }),
  });
}
