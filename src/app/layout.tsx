import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "My First App - Modern Refactor",
    description: "Rebuilt with Next.js, Prisma, and Love",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
            </head>
            <body>{children}</body>
        </html>
    );
}
