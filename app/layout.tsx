import "./globals.css";
import { Inter } from "next/font/google";
import NavMenu from "./NavMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Agamemnon Serafeim",
    description: "Agamemnon Serafeim's personal portfolio website",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <header>
                    <NavMenu />
                </header>
                {children}
            </body>
        </html>
    );
}
