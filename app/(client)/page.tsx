export default function Home() {
  return (
    <div className="flex min-h-screen flex-col text-gray-800">
      <header className="bg-green-600 py-4 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl font-bold">Next.js</h1>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <p className="text-primary text-center text-5xl font-bold">
          Next.js+shadcn starter
        </p>
      </main>

      <footer className="bg-gray-900 py-4 text-white">
        <div className="container mx-auto text-center">
          <p>
            Written by{" "}
            <a
              href="https://raselkhan.dev"
              className="text-green-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              raselkhan.dev
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
