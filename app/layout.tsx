import "./globals.css";
import NavBar from "@/components/NavBar";
import { createClient } from "@/utils/supabase/server";

export const metadata = {
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();


  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {user && <NavBar />}
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
