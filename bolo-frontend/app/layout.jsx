import "@/styles/globals.css";

export const metadata = {
  title: "Bolo",
  description: "Centralizado de contenido.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Gluten:wght@100..900&family=Vina+Sans&family=Passion+One:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
