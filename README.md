# Time Tracking Dashboard

A responsive dashboard built with React and Tailwind CSS that displays a user profile and activity cards. The layout adjusts dynamically at various breakpoints to ensure a smooth user experience across devices.

## Features

- **Responsive Design:**  
  Uses Tailwind’s spacing scale and responsive classes to adjust widths, heights, and flex directions at different breakpoints.
- **Dynamic Layout:**

  - On smaller screens, components stack in a column.
  - On larger screens, the layout shifts to a row.
  - Middle breakpoints can also be customized (e.g., remain in a column until `lg:` or `xl:`).

- **Interactive Components:**
  - **UserProfile:** Displays user details and includes buttons to select timeframes (Daily, Weekly, Monthly).
  - **ActivityGrid & ActivityCard:** Render a grid of activity cards showing current and previous hours based on the selected timeframe.

## Installation

1. **Clone the repository:**

   git clone https://github.com/Mustapha909/Time-tracking-dashboard.git
   cd time-tracking-dashboard

Install dependencies:

npm install

Start the development server:

npm start

Usage
Timeframe Selection:
Click the timeframe buttons on the UserProfile card to update the activity data displayed on the activity cards.

Responsive Layout:
The layout uses Tailwind’s utility classes to adjust:

The UserProfile and ActivityCard components have dynamic widths and heights at different breakpoints.
The overall dashboard layout changes from flex-col (column) on small/medium screens to flex-row on larger screens (or based on custom breakpoints).
Customization

Tailwind Configuration:
Modify your tailwind.config.js to adjust breakpoints or extend the spacing scale as needed.

Component Styling:
Each component uses Tailwind classes directly in the JSX. Adjust these classes to fit your design requirements.

Example Code Snippet
Here’s a snippet from the Dashboard layout that centers the content and adjusts the flex direction based on the breakpoint:

<div className="min-h-screen bg-[#0d1323] flex items-center justify-center">
  <div className="w-full max-w-[1200px] mx-auto p-6 flex flex-col lg:flex-row gap-6">
    <UserProfile selectedTimeframe={timeframe} onSelectTimeframe={setTimeframe} />
    <ActivityGrid data={data} backgrounds={backgrounds} bgColors={bgColors} timeframe={timeframe} />
  </div>
</div>
