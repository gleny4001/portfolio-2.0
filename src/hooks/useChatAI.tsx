import { useMutation } from '@tanstack/react-query';

const API_URL = 'https://portfolio-backend-one-nu.vercel.app/api/chat';

const fetchChatResponse = async (message: string) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    throw new Error('Failed to fetch response');
  }

  const data = await res.json();
  return data.reply;
};

export const useChatAI = () => {
  const mutation = useMutation({
    mutationFn: fetchChatResponse,
  });

  return {
    sendMessage: mutation.mutateAsync,
    loading: mutation.isPending,
    error: mutation.error,
  };
};
