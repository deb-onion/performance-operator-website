# Glass Form Component Guide

## Overview

The `GlassForm` component is a beautiful, modern contact form with a glassmorphism design that seamlessly blends into any background. It features a translucent glass-like appearance with backdrop blur effects, creating a premium, floating aesthetic.

## Features

- ✨ **Glassmorphism Design**: Beautiful translucent appearance with backdrop blur
- 📱 **Fully Responsive**: Works perfectly on all device sizes
- ✅ **Form Validation**: Built-in validation with error handling
- 🎨 **Customizable**: Easy to customize titles, subtitles, and styling
- 🔄 **Loading States**: Smooth loading animations during form submission
- ✨ **Success Animation**: Beautiful success state with animated checkmark
- 🎯 **Accessibility**: Proper ARIA labels and keyboard navigation
- 🔒 **Security**: Input sanitization and validation included

## Component Location

```
components/ui/GlassForm.tsx
```

## Basic Usage

```tsx
import { GlassForm } from '@/components/ui/GlassForm';

export default function YourPage() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <GlassForm />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `"Let's Connect"` | The main heading of the form |
| `subtitle` | `string` | `"Ready to scale your business?..."` | The subtitle text below the title |
| `onSubmitSuccess` | `() => void` | `undefined` | Callback function called after successful form submission |
| `className` | `string` | `""` | Additional CSS classes for custom styling |

## Advanced Usage

### Custom Titles and Callback

```tsx
<GlassForm
  title="Book Your Consultation"
  subtitle="Let's discuss your project requirements and goals."
  onSubmitSuccess={() => {
    console.log('Form submitted!');
  }}
  className="max-w-2xl mx-auto"
/>
```

## Demo Pages

Visit these pages to see the glass form in action:

- `/glass-form-demo` - Comprehensive demo with multiple examples
- `/contact-glass` - Alternative contact page using the glass form

## Form Fields

The glass form includes the following fields:

- **Name** (required): User's full name
- **Email** (required): User's email address
- **Company** (optional): Company name
- **Monthly Ad Budget** (optional): Dropdown with budget ranges
- **Message** (required): Detailed message from the user

## Integration Examples

### Replace Existing Contact Form

To replace your current contact form with the glass form:

1. Import the component:
```tsx
import { GlassForm } from '@/components/ui/GlassForm';
```

2. Replace your existing form JSX:
```tsx
<GlassForm
  title="Your Custom Title"
  subtitle="Your custom subtitle"
/>
```

### Add to Landing Page

```tsx
<section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100">
  <Container>
    <GlassForm
      title="Start Your Project"
      subtitle="Tell us about your goals and we'll create a custom solution."
    />
  </Container>
</section>
```

## Best Practices

1. **Background Choice**: Use backgrounds with good contrast for readability
2. **Positioning**: Center the form or use it in a dedicated section
3. **Spacing**: Provide adequate padding around the form
4. **Mobile**: Test on mobile devices to ensure proper responsiveness

## Form Submission

The form currently simulates submission. To connect it to your backend, modify the `handleSubmit` function in `components/ui/GlassForm.tsx`.

## Browser Support

The glass form uses modern CSS features and is supported in all modern browsers. For older browsers, it gracefully degrades while maintaining full functionality.

## Styling Customization

### Background Variations

The component automatically adapts to different backgrounds. For best results, use:

- Light gradient backgrounds (blue, purple, indigo tones)
- Dark backgrounds with good contrast
- Image backgrounds with overlay

### Custom Styling

You can add custom classes to modify the appearance:

```tsx
<GlassForm
  className="max-w-lg mx-auto shadow-2xl"
  title="Custom Form"
/>
```

### CSS Variables

The component uses these CSS classes that you can customize:

```css
/* Glass container */
.backdrop-blur-lg /* Main blur effect */
.bg-white/30 /* Background transparency */
.border-white/20 /* Border transparency */

/* Input fields */
.bg-white/10 /* Input background */
.border-white/20 /* Input border */
.focus:bg-white/20 /* Focus state */
```

## Troubleshooting

### Form Not Displaying
- Ensure you've imported the component correctly
- Check that the parent container has proper styling
- Verify the background provides sufficient contrast

### Styling Issues
- Make sure Tailwind CSS is properly configured
- Check that backdrop-blur utilities are available
- Ensure the parent container allows for proper positioning

### Build Errors
- Verify all imports are correct
- Check that the component is in the correct directory
- Ensure TypeScript types are properly imported

## Performance

The component is optimized for performance:
- Minimal re-renders with proper state management
- Efficient form validation
- Optimized CSS with Tailwind utilities
- Lazy loading of success states

## Accessibility

The form includes:
- Proper ARIA labels
- Keyboard navigation support
- Screen reader compatibility
- Focus management
- Error announcements

## Support

For questions or issues with the glass form component:
1. Check this documentation
2. Review the demo pages for examples
3. Inspect the component code in `components/ui/GlassForm.tsx`
4. Test different background combinations

The glass form is designed to be a drop-in replacement for traditional contact forms while providing a modern, premium user experience. 