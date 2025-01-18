import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex flex-1">{children}</main>
      <Footer />
    </>
  );
}
