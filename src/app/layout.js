import "../styles/globals.css";

export const metadata = {
  title: "X-Lyn Jewels",
  description: "E-commerce Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
