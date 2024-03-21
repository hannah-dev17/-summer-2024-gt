import { useMutation } from '@tanstack/react-query';
import { AuthRepository } from '../repositories';

type MutationFnProps = {
  accessToken: string;
};

export function useKakaoSignIn() {
  return useMutation({
    mutationFn: ({ accessToken }: MutationFnProps) => AuthRepository.signInKakaoByToken({ accessToken }),
  });
}
