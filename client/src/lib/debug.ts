
// Debug configuration for client side
const DEBUG_ENABLED = true;

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const LOG_COLORS = {
  debug: '#808080', // gray
  info: '#4299e1',  // blue
  warn: '#ecc94b',  // yellow
  error: '#f56565', // red
};

export class ClientDebug {
  private namespace: string;

  constructor(namespace: string) {
    this.namespace = namespace;
  }

  debug(message: string, ...args: any[]): void {
    this.log('debug', message, ...args);
  }

  info(message: string, ...args: any[]): void {
    this.log('info', message, ...args);
  }

  warn(message: string, ...args: any[]): void {
    this.log('warn', message, ...args);
  }

  error(message: string, ...args: any[]): void {
    this.log('error', message, ...args);
  }

  private log(level: LogLevel, message: string, ...args: any[]): void {
    if (!DEBUG_ENABLED && level !== 'error') return;

    const color = LOG_COLORS[level];
    const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
    
    const style = `
      color: ${color}; 
      font-weight: bold;
      background-color: rgba(0,0,0,0.05); 
      padding: 2px 5px; 
      border-radius: 3px;
    `;

    if (args.length > 0) {
      console[level](
        `%c[${timestamp}] [${this.namespace}]%c ${message}`,
        style,
        '',
        ...args
      );
    } else {
      console[level](
        `%c[${timestamp}] [${this.namespace}]%c ${message}`,
        style,
        ''
      );
    }
  }
}

// Create debuggers for different parts of the application
export const appDebug = new ClientDebug('app');
export const apiDebug = new ClientDebug('api');
export const uiDebug = new ClientDebug('ui');
export const routeDebug = new ClientDebug('router');
