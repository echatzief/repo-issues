import type { Metadata } from "next";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <title>Repository Issues</title>
        <link rel="icon" href="/favicon.png" type="image/png"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
