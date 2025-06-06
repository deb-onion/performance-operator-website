# Error Handling Documentation

## Overview

This document outlines the error handling approach for the Performance Marketing Operator website. It includes information about common errors, the error logging utility, and best practices for handling errors in the codebase.

## Common Issues & Solutions

### 1. Client Component Errors

**Issue**: When using React hooks in a component without the `"use client"` directive.

**Error Message**:
```
You're importing a component that needs `useState` (or other hooks). This React hook only works in a client component. To fix, mark the file (or its parent) with the `"use client"` directive.
```

**Solution**:
Add `"use client"` at the top of the file:
```tsx
"use client";

import React, { useState } from 'react';
// rest of your imports and component
```

### 2. ARIA Attribute Errors

**Issue**: Invalid ARIA attribute values, especially with dynamic values in JSX.

**Error Message**:
```
ARIA attributes must conform to valid values: Invalid ARIA attribute value: aria-expanded="{expression}"
```

**Solution**:
Convert boolean values to strings:
```tsx
// Incorrect
aria-expanded={isOpen}

// Correct
aria-expanded={isOpen ? "true" : "false"}
```

### 3. Missing Dependencies

**Issue**: When trying to use a package that hasn't been installed.

**Solution**:
```bash
npm install <package-name>
```

## Error Logger Utility

The project includes a dedicated error logging utility for consistent error tracking and reporting.

### Import and Basic Usage

```tsx
import { logError } from '@/lib/utils/errorLogger';

try {
  // Code that might throw an error
} catch (error) {
  logError(error, { context: 'ComponentName' });
}
```

### Creating a Contextualized Logger

For components or modules that need to log multiple errors:

```tsx
import { createLogger } from '@/lib/utils/errorLogger';

const logger = createLogger('AuthService');

// Later in your code:
logger.error('Authentication failed', { metadata: { userId } });
logger.warning('Rate limit approaching', { metadata: { requestCount } });
logger.info('User logged in', { metadata: { userId } });
```

### Configuration Options

The error logger accepts the following options:

| Option | Type | Description |
|--------|------|-------------|
| context | string | Name of component or service where the error occurred |
| severity | 'error' \| 'warning' \| 'info' | Severity level of the error |
| metadata | object | Additional contextual data about the error |
| report | boolean | Whether to report to external services (defaults to true in production) |

## Production Error Handling

In production, consider integrating the error logger with an error monitoring service like Sentry. The logger is already structured to support such integrations.

### Implementation Example

```tsx
// In errorLogger.ts, uncomment and configure:
if (report) {
  if (window.Sentry) {
    window.Sentry.captureException(error, {
      tags: { context },
      extra: metadata
    });
  }
}
```

## Best Practices

1. **Be Specific**: Log errors with enough context to understand where and why they occurred
2. **Don't Expose Sensitive Data**: Never log sensitive information like tokens or passwords
3. **Fallback UI**: Provide fallback UI components when errors occur in the interface
4. **Boundary Components**: Use React Error Boundary components for critical sections
5. **Client vs. Server**: Handle errors differently in client components vs. server components

## Next.js App Router Specific Issues

1. **Server Components vs. Client Components**: Remember that hooks can only be used in client components
2. **Data Fetching Errors**: Handle errors in data fetching functions with proper error states
3. **Route Handlers**: Implement error handling in API routes and route handlers

## Updating This Guide

As new common errors are encountered, please update this document with the error message, cause, and solution for future reference. 