export const logEvent = (category, action, label) => {
  // In a real app, you would integrate with an analytics service like Google Analytics.
  // For now, we'll just log to the console.
  console.log(`Analytics Event: { Category: ${category}, Action: ${action}, Label: ${label} }`);
};