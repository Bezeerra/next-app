export async function fetchHtmlContent(): Promise<string> {
  // Your logic to fetch HTML content
  // For example, using fetch API:
  const response = await fetch('http://127.0.0.1:8000/');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const html = await response.text();
  return html;
}
