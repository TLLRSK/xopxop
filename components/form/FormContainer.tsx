'use client';

import { useActionState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { actionFunction } from '@/utils/types';

const initialState = {
  message: '',
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useActionState(action, initialState);
  const { toast } = useToast();
  const showToast = () => {
    if (state?.message) {
      toast({ description: state?.message });
    }
  }
  useEffect(() => {
    showToast()
  }, [state]);

  return <form action={formAction} className='flex'>{children}</form>;
}
export default FormContainer;