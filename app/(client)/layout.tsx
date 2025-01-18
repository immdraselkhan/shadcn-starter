export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header />
      <main>{children}</main>
      <footer />
    </>
  );
}
