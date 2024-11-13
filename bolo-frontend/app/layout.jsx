import "@/styles/globals.css";

export const metadata = {
  title: "Bolo",
  description: "Web de centralizado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
