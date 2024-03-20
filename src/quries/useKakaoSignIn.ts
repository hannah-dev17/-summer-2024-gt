import { useMutation } from '@tanstack/react-query';
import { AuthRepository } from '../repositories';

type MutationFnProps = {
  code: string;
};

export function useKakaoSignIn() {
  return useMutation({
    mutationFn: ({ code }: MutationFnProps) => AuthRepository.signInByKakao({ code }),
  });
}
