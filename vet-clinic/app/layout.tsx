import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "Tierarztpraxis Volker Gerlitzki",
    description: "Ihr Tierarzt in Hamburg Bergedorf.",
};

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de">
            <body className={montserrat.className}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
