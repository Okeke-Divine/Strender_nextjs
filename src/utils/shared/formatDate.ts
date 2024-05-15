function formatDate(isoDateString: Date) {
  const date = new Date(isoDateString);
  const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
  };
  return date.toLocaleDateString('en-US', options);
}

export default formatDate;
