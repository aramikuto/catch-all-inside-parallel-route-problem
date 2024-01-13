export default function RootLayout({ children, slot }) {
  return (
    <html>
      <head />
      <body>
        {slot}
        <br />
        {children}
      </body>
    </html>
  );
}
