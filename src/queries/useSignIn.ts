import { useMutation } from '@tanstack/react-query';
import { AuthRepository } from '../repositories';

type MutationFnProps = {
  loginId: string;
  password: string;
};

export function useSignIn() {
  return useMutation({
    mutationFn: ({ loginId, password }: MutationFnProps) => AuthRepository.signIn({ loginId, password }),
  });
}
