import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "./components/ui/toaster";
import { ThemeProvider } from "./components/ui/theme-provider";
import { appDebug } from "./lib/debug";
import { ErrorBoundary } from "react-error-boundary";

// Log unhandled errors
window.addEventListener('error', (event) => {
  appDebug.error('Unhandled error:', event.error);
});

// Log unhandled promise rejections
window.addEventListener('unhandledrejection', (event) => {
  appDebug.error('Unhandled promise rejection:', event.reason);
});

function ErrorFallback({ error, resetErrorBoundary }) {
  appDebug.error('React error boundary caught error:', error);
  
  return (
    <div className="error-boundary p-4 m-4 border border-red-500 rounded bg-red-50 text-red-800">
      <h2 className="text-lg font-bold mb-2">Something went wrong</h2>
      <pre className="text-sm overflow-auto p-2 bg-red-100 rounded">{error.message}</pre>
      <button 
        onClick={resetErrorBoundary}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Try again
      </button>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <App />
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

appDebug.info('Application initialized');
