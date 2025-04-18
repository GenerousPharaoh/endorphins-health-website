
import debug from 'debug';

// Create namespaced debuggers
export const serverDebug = debug('app:server');
export const routesDebug = debug('app:routes');
export const dbDebug = debug('app:db');

// Enable all debuggers in development
if (process.env.NODE_ENV !== 'production') {
  debug.enable('app:*');
}

// Helper function to pretty print objects
export function debugObj(debugFn: debug.Debugger, label: string, obj: any): void {
  debugFn(`${label}: %O`, obj);
}
