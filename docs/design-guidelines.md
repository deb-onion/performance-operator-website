# Design Guidelines

## Brand Identity

### Core Identity Principles
- **Professional**: Clean, sophisticated, and credible
- **Direct**: Clear, focused, and outcome-oriented
- **Efficient**: Minimalist and purposeful, no unnecessary elements
- **Results-driven**: Emphasis on performance metrics and outcomes

### Visual Language
The visual language should convey precision, expertise, and measurable results. It should feel premium without being inaccessible, and confident without being arrogant.

## Color Palette

### Primary Colors
- **Deep Navy** `#0F2E4C`: Primary brand color, conveys trust and depth
- **Electric Blue** `#2D9CDB`: For accents and CTAs, conveys action and energy

### Secondary Colors
- **Success Green** `#27AE60`: For positive metrics and results
- **Alert Orange** `#F2994A`: For highlighting important information
- **Rich Black** `#1A1A1A`: For primary text
- **Soft White** `#F9FAFB`: For backgrounds and whitespace

### Neutral Tones
- **Light Gray** `#E5E5E5`: For subtle separators and backgrounds
- **Medium Gray** `#828282`: For secondary text and less important elements
- **Dark Gray** `#4F4F4F`: For subheadings and emphasized secondary text

## Typography

### Typefaces
- **Primary Headings**: Inter (Bold), clean and modern sans-serif
- **Body Copy**: Inter (Regular/Medium), consistent with headings but optimized for readability
- **Accent Text**: Inter (SemiBold), for emphasis within body copy

### Type Scale
- **H1**: 48px/3rem (Mobile: 36px/2.25rem)
- **H2**: 36px/2.25rem (Mobile: 28px/1.75rem)
- **H3**: 24px/1.5rem (Mobile: 20px/1.25rem)
- **H4**: 20px/1.25rem (Mobile: 18px/1.125rem)
- **Body**: 16px/1rem
- **Small**: 14px/0.875rem
- **XSmall**: 12px/0.75rem

### Type Styles
- **Heading**: `font-weight: 700; line-height: 1.2;`
- **Subheading**: `font-weight: 600; line-height: 1.3;`
- **Body**: `font-weight: 400; line-height: 1.6;`
- **Emphasized Body**: `font-weight: 500; line-height: 1.6;`

## Layout & Spacing

### Grid System
- **Container Width**: Max 1200px
- **Column System**: 12-column grid for desktop, simplified for mobile
- **Gutters**: 24px (Desktop), 16px (Mobile)

### Spacing Scale
- **4xs**: 2px (0.125rem)
- **3xs**: 4px (0.25rem)
- **2xs**: 8px (0.5rem)
- **xs**: 12px (0.75rem)
- **sm**: 16px (1rem)
- **md**: 24px (1.5rem)
- **lg**: 32px (2rem)
- **xl**: 48px (3rem)
- **2xl**: 64px (4rem)
- **3xl**: 80px (5rem)
- **4xl**: 96px (6rem)

### Section Spacing
- **Section Padding (Desktop)**: 80px top/bottom (5rem)
- **Section Padding (Mobile)**: 48px top/bottom (3rem)
- **Content Block Spacing (Desktop)**: 48px (3rem)
- **Content Block Spacing (Mobile)**: 32px (2rem)

## UI Components

### Buttons

#### Primary Button
- Background: Electric Blue `#2D9CDB`
- Text: White `#FFFFFF`
- Hover: Darker Blue `#1A91D4`
- Padding: 12px 24px (0.75rem 1.5rem)
- Border Radius: 4px
- Font: Inter Semi-Bold, 16px
- Transition: 0.2s ease-in-out

#### Secondary Button
- Background: Transparent
- Border: 2px solid Electric Blue `#2D9CDB`
- Text: Electric Blue `#2D9CDB`
- Hover: Light Blue Background `#EBF6FF`
- Padding: 12px 24px (0.75rem 1.5rem)
- Border Radius: 4px
- Font: Inter Semi-Bold, 16px
- Transition: 0.2s ease-in-out

#### Tertiary Button / Text Link
- Text: Electric Blue `#2D9CDB`
- Hover: Underline
- Font: Inter Medium, 16px

### Cards

#### Service Card
- Background: White `#FFFFFF`
- Border: 1px solid Light Gray `#E5E5E5`
- Border Radius: 8px
- Padding: 32px (2rem)
- Shadow: `0 4px 6px rgba(0, 0, 0, 0.05)`
- Hover: Subtle lift effect with increased shadow

#### Results Card
- Background: White `#FFFFFF`
- Border: 1px solid Light Gray `#E5E5E5`
- Border Radius: 8px
- Padding: 24px (1.5rem)
- Shadow: `0 4px 6px rgba(0, 0, 0, 0.05)`
- Highlight: Left border 4px solid Electric Blue `#2D9CDB` or Success Green `#27AE60`

### Form Elements

#### Text Input
- Background: White `#FFFFFF`
- Border: 1px solid Medium Gray `#828282`
- Border Radius: 4px
- Padding: 12px 16px
- Focus: 2px border Electric Blue `#2D9CDB`, no outline
- Error: 2px border Alert Orange `#F2994A` with error message
- Label: Dark Gray `#4F4F4F`, Inter Medium, 14px

#### Dropdown
- Same styling as text input
- Icon: Custom dropdown chevron in Electric Blue `#2D9CDB`

## Imagery & Graphics

### Photography Style
- Clean, professional photography
- High contrast and clear focus
- Natural lighting preferred
- People in authentic working environments
- Avoid overly staged or stock-looking images

### Icons
- Simple, consistent line weight
- 2px stroke preferred
- Rounded corners (2px radius)
- Monochrome, using brand colors
- Consistent size within contexts

### Data Visualization
- Clean, minimal charts and graphs
- Use brand colors consistently (Success Green for positive metrics)
- Clear labels and sufficient white space
- Avoid 3D effects or excessive decoration
- Focus on the data story, not visual complexity

## Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1023px
- **Desktop**: ≥ 1024px

### Mobile-Specific Guidelines
- Stack elements vertically
- Increase touch targets (min 44x44px)
- Reduce padding by ~40%
- Simplify navigation to hamburger menu
- Ensure readable font sizes (16px minimum for body text)
- Implement sticky CTAs at page bottom

## Accessibility Guidelines

### Color Contrast
- All text must maintain 4.5:1 contrast ratio with its background
- CTAs and functional elements must maintain 3:1 contrast ratio
- Provide sufficient contrast between adjacent UI elements

### Focus States
- Clearly visible focus indicators on all interactive elements
- Style: 2px solid Electric Blue `#2D9CDB` outline
- No focus indicator suppression

### Text Alternatives
- All meaningful images require descriptive alt text
- Decorative images should have empty alt attributes
- Complex visualizations need descriptive summaries

## Dark Mode

### Dark Mode Color Palette
- **Background**: Dark Charcoal `#121212`
- **Card Background**: Dark Gray `#1E1E1E`
- **Primary Text**: Off-White `#F0F0F0`
- **Secondary Text**: Light Gray `#B0B0B0`
- **Accent Blue**: Brighter Electric Blue `#4DABDD`
- **Success**: Brighter Green `#3CBB71`

### Dark Mode Considerations
- Reduce shadows and increase contrast between layers
- Avoid pure white text (use off-white)
- Maintain the same visual hierarchy as light mode
- Ensure all contrast ratios still meet accessibility guidelines

## Animation & Interactions

### Principles
- Subtle, purposeful animations only
- Enhance understanding of the interface
- Support the brand's efficient, professional personality
- Never delay critical user tasks

### Specifications
- **Transitions**: 0.2s - 0.3s duration
- **Easing**: Ease-in-out for most transitions
- **Hovers**: Subtle scale (1.02-1.05) for cards or clickable elements
- **Page Transitions**: Simple fade or slide animations, 0.3s maximum
- **Loading States**: Clean, branded loading indicators that don't feel busy

## Implementation Notes

- Use Tailwind CSS utility classes following these guidelines
- Create custom CSS variables for the color palette and spacing scale
- Implement responsive styles mobile-first
- Develop a component library with storybook documentation
- Ensure dark mode implementation with proper system preference detection 