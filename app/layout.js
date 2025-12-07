export const metadata = {
  title: "Supabase Test",
  description: "Testing Next.js + Supabase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}