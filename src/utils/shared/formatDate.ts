function formatDate(isoDateString: string) {
  const date = new Date(isoDateString);
  const options: Intl.DateTimeFormatOptions = { 
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
  };
  return date.toLocaleDateString('en-US', options);
}

export default formatDate;
