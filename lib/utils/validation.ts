export interface ValidationError {
  field: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateContactForm(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  // Name validation
  if (!data.name.trim()) {
    errors.push({ field: 'name', message: 'Name is required' });
  } else if (data.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }

  // Email validation
  if (!data.email.trim()) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }

  // Message validation
  if (!data.message.trim()) {
    errors.push({ field: 'message', message: 'Message is required' });
  } else if (data.message.trim().length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
  }

  // Company validation (optional but if provided, check length)
  if (data.company.trim() && data.company.trim().length < 2) {
    errors.push({ field: 'company', message: 'Company name must be at least 2 characters' });
  }

  return errors;
}

export function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

export function sanitizeContactForm(data: ContactFormData): ContactFormData {
  return {
    name: sanitizeInput(data.name),
    email: sanitizeInput(data.email),
    company: sanitizeInput(data.company),
    budget: sanitizeInput(data.budget),
    message: sanitizeInput(data.message)
  };
} 