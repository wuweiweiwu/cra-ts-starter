import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      refetchOnWindowFocus: true,
      // 1 minute
      staleTime: 1 * 60 * 1000,

      // we don't have global error handling for queries right now since some can be lazy and some can suspend
      // we leave it to the error boundary for suspended queries and manual instrumentation for lazy queries
    },
    mutations: {
      // so mutations failures don't also trigger a thrown error
      useErrorBoundary: false,
      retry: false,
    },
  },
});
