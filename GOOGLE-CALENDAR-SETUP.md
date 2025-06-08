# Google Calendar Integration Setup Guide

This guide will help you set up Google Calendar appointment scheduling for your performance marketing website.

## Prerequisites

✅ Google Workspace account for onlydeb.com (COMPLETED)
✅ Admin access to your Google Workspace
✅ Website deployment access

## Step 1: Create Google Calendar Appointment Schedule

1. **Open Google Calendar**
   - Go to [calendar.google.com](https://calendar.google.com)
   - Make sure you're logged in with your onlydeb.com Google Workspace account

2. **Create New Appointment Schedule**
   - Click the **"Create"** button (top left)
   - Select **"Appointment schedule"**

3. **Configure Basic Settings**
   - **Title**: "Strategy Call - Performance Marketing"
   - **Duration**: 30 minutes
   - **Description**: "30-minute strategy call to discuss your business goals and growth opportunities"

4. **Set Your Availability**
   - Configure your weekly availability (e.g., Monday-Friday, 9 AM - 5 PM)
   - Add buffer time between appointments (recommended: 15 minutes)
   - Set maximum bookings per day (recommended: 4-6 calls)
   - Configure advance booking window (e.g., minimum 24 hours, maximum 30 days)

5. **Advanced Settings**
   - Location: "Google Meet" (will auto-generate meeting links)
   - Time zone: Your local timezone
   - Enable email reminders (24 hours and 1 hour before)
   - Require email verification to prevent spam bookings

6. **Save Your Schedule**
   - Click **"Next"** to proceed to booking page customization
   - Customize your booking page appearance
   - Add your profile photo and description
   - Click **"Save"**

## Step 2: Get Embed Code

1. **Access Share Options**
   - Click on your appointment schedule in the calendar grid
   - Click the **"Share"** button

2. **Get Website Embed Code**
   - Click **"Website embed"** tab
   - Select **"Inline booking page"** 
   - Customize width (100%) and height (600px)
   - Click **"Copy code"**

3. **Save the Embed Code**
   - You'll get an iframe code that looks like this:
   ```html
   <iframe 
     src="https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID" 
     style="border: 0" 
     width="100%" 
     height="600" 
     frameborder="0">
   </iframe>
   ```

## Step 3: Update Website Code

1. **Open the Work With Me Page**
   - File: `app/work-with-me/page.tsx`
   - Find the comment: `{/* TODO: Replace with your actual Google Calendar appointment schedule embed code */}`

2. **Replace the Placeholder**
   - Replace the entire placeholder div with your iframe embed code
   - Make sure to maintain the React JSX format (use `style={{border: 0}}` instead of `style="border: 0"`)

3. **Example Implementation**
   ```jsx
   {/* Google Calendar appointment scheduling embed */}
   <div className="bg-white rounded-lg border border-[#E5E5E5] overflow-hidden">
     <div className="p-6 bg-gradient-to-r from-[#2D9CDB] to-[#1B8FD3] text-white text-center">
       <h4 className="text-lg font-semibold mb-2">Book Your 30-Minute Strategy Call</h4>
       <p className="text-sm opacity-90">Select a time that works best for you</p>
     </div>
     
     <iframe 
       src="https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID" 
       style={{border: 0}} 
       width="100%" 
       height="600" 
       frameBorder="0"
       title="Schedule Strategy Call">
     </iframe>
   </div>
   ```

## Step 4: Environment Variables

Create a `.env.local` file in your project root with:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://onlydeb.com

# Business Contact Information  
NEXT_PUBLIC_BUSINESS_EMAIL=ads@onlydeb.com
NEXT_PUBLIC_BUSINESS_NAME="Performance Marketing Operator"

# Google Calendar
NEXT_PUBLIC_CALENDAR_SCHEDULE_ID=your_schedule_id_here

# Analytics (if not already configured)
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
NEXT_PUBLIC_HOTJAR_ID=your_hotjar_id
```

## Step 5: Update Analytics Tracking

The calendar integration automatically triggers conversion tracking when someone books. Make sure your analytics are configured:

- **Google Analytics**: Event tracking for `calendly_booking` is already implemented
- **Hotjar**: Session recording for booking interactions
- **Conversion tracking**: Books calls will be tracked as conversions

## Step 6: Test Your Integration

1. **Test Booking Process**
   - Visit your work-with-me page
   - Try booking a test appointment
   - Verify the confirmation email is sent
   - Check that the event appears in your Google Calendar

2. **Test Email Notifications**
   - Confirm you receive booking notifications at ads@onlydeb.com
   - Test the reminder email system
   - Verify Google Meet links are generated

3. **Mobile Testing**
   - Test the booking experience on mobile devices
   - Ensure the iframe is responsive
   - Check email formatting on mobile

## Step 7: Optional Enhancements

### Enable Payment Collection (Google Workspace Business+)
- Set up Stripe integration for paid consultations
- Configure pricing for premium strategy sessions

### Custom Booking Questions
- Add intake questions to better prepare for calls
- Collect company size, budget, and specific challenges

### Multiple Schedule Types
- Create different schedules for different types of calls
- 30-min strategy calls vs 60-min deep-dive sessions

### Automated Follow-up
- Set up automated email sequences post-booking
- Send preparation materials before the call

## Troubleshooting

### Common Issues

1. **Embed Not Showing**
   - Check if iframe src URL is correct
   - Verify your Google Workspace has appointment scheduling enabled
   - Ensure the schedule is set to "Public"

2. **Booking Confirmation Issues**
   - Verify ads@onlydeb.com email is set up correctly
   - Check spam/promotional folders
   - Confirm Google Calendar notification settings

3. **Mobile Display Issues**
   - Adjust iframe height for mobile
   - Test on various screen sizes
   - Consider adding responsive styling

### Support Resources

- [Google Calendar Appointment Scheduling Help](https://support.google.com/calendar/answer/10729749)
- [Google Workspace Support](https://support.google.com/a/)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)

## Security Considerations

- Appointment schedules are public by default (good for booking)
- Email verification helps prevent spam bookings
- Google Meet links are automatically secure
- Consider adding booking limits per email address

## Final Checklist

- [ ] Google Calendar appointment schedule created
- [ ] Availability and buffer times configured
- [ ] Email reminders enabled
- [ ] Embed code copied and implemented
- [ ] Environment variables configured
- [ ] Analytics tracking verified
- [ ] Test booking completed successfully
- [ ] Mobile experience tested
- [ ] Email notifications working
- [ ] Google Meet integration confirmed

Once completed, your website will have a professional booking system that integrates seamlessly with your Google Workspace workflow!
