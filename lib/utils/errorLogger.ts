/**
 * Error Logger Utility
 * 
 * A simple utility for logging errors consistently across the application.
 * Logs to console in development and can be configured to send to an error tracking service in production.
 */

type ErrorSeverity = 'error' | 'warning' | 'info';

interface ErrorLogOptions {
  /** Additional context about where the error occurred */
  context?: string;
  /** Error severity level */
  severity?: ErrorSeverity;
  /** Additional metadata to include with the error */
  metadata?: Record<string, unknown>;
  /** Whether to report to external service (if configured) */
  report?: boolean;
}

/**
 * Log an error with consistent formatting and optional reporting
 */
export function logError(
  error: Error | string,
  options: ErrorLogOptions = {}
): void {
  const {
    context = 'application',
    severity = 'error',
    metadata = {},
    report = process.env.NODE_ENV === 'production'
  } = options;

  const timestamp = new Date().toISOString();
  const errorMessage = typeof error === 'string' ? error : error.message;
  const errorStack = error instanceof Error ? error.stack : undefined;

  // Format the error for logging
  const formattedError = {
    timestamp,
    message: errorMessage,
    severity,
    context,
    metadata,
    stack: errorStack
  };

  // Log to console based on severity
  switch (severity) {
    case 'warning':
      console.warn(`[${timestamp}][${context}] ${errorMessage}`, { ...formattedError });
      break;
    case 'info':
      console.info(`[${timestamp}][${context}] ${errorMessage}`, { ...formattedError });
      break;
    case 'error':
    default:
      console.error(`[${timestamp}][${context}] ${errorMessage}`, { ...formattedError });
  }

  // Report to external service if needed
  if (report) {
    // Example integration with error tracking services like Sentry
    // if (window.Sentry) {
    //   window.Sentry.captureException(error, {
    //     tags: { context },
    //     extra: metadata
    //   });
    // }
  }
}

/**
 * Create a contextualized logger for a specific part of the application
 */
export function createLogger(defaultContext: string) {
  return {
    error: (error: Error | string, options: Omit<ErrorLogOptions, 'context' | 'severity'> = {}) => 
      logError(error, { context: defaultContext, severity: 'error', ...options }),
    
    warning: (message: string, options: Omit<ErrorLogOptions, 'context' | 'severity'> = {}) => 
      logError(message, { context: defaultContext, severity: 'warning', ...options }),
    
    info: (message: string, options: Omit<ErrorLogOptions, 'context' | 'severity'> = {}) => 
      logError(message, { context: defaultContext, severity: 'info', ...options })
  };
} 