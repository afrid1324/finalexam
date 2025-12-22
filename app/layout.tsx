// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/ui/menu";

export const metadata: Metadata = {
  title: "Event Staffing Application",
  description: "Final Exam Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Menu />

        <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>

        <footer className="border-t py-6 text-center text-sm text-muted-foreground">
          © 2025 Event Staffing Application · Final Exam
        </footer>
      </body>
    </html>
  );
}
