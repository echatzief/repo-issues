export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full max-w-md p-8 space-y-6  rounded-lg">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl">Page Not Found</p>
        <p>Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
        <div className="flex justify-center mt-4">
          <a className="btn btn-warning" href="/">
            Go to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
