import Link from "next/link";

export function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#4A90E2] text-white">
        <a className="flex items-center justify-center" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-[#F8E71C]"
          >
            <circle cx="11" cy="4" r="2"></circle>
            <circle cx="18" cy="8" r="2"></circle>
            <circle cx="20" cy="16" r="2"></circle>
            <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path>
          </svg>
          <span className="sr-only">ScooperHero</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-[#F8E71C]"
          >
            How It Works
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4 text-[#F8E71C]"
            href="#"
          >
            Pricing
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4 text-[#F8E71C]"
            href="#"
          >
            About
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4 text-[#F8E71C]"
            href="#"
          >
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#E6F2FC]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#4A90E2]">
                    The Ultimate Pet Care App 🐾
                  </h1>
                  <p className="max-w-[600px] text-[#757575] md:text-xl">
                    Connecting pet owners with professional scoopers for a
                    hassle-free, 💩-free pet care experience.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#4A90E2] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#3D7AB9] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Download for iOS
                  </a>
                  <a
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#4A90E2] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#3D7AB9] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Download for Android
                  </a>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#E6F2FC]">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#F8E71C] px-3 py-1 text-sm text-[#4A90E2] font-bold">
                  Key Features 🚀
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#4A90E2]">
                  Streamline Your Pet Care 🐕
                </h2>
                <p className="max-w-[900px] text-[#757575] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Scoop App makes it easy for pet owners to find reliable
                  scoopers and for scoopers to find and accept jobs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#4A90E2]">
                        Post a Job
                      </h3>
                      <p className="text-[#757575]">
                        Pet owners can easily post job requests for pet scooping
                        services.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#4A90E2]">
                        Find and Accept Jobs
                      </h3>
                      <p className="text-[#757575]">
                        Scoopers can browse and accept job requests in their
                        area.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#4A90E2]">
                        Secure Payments
                      </h3>
                      <p className="text-[#757575]">
                        Seamless in-app payment processing for pet owners and
                        scoopers.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-[#E6F2FC]">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6 mx-auto">
            <div className="space-y-3 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#4A90E2]">
                Download ScooperHero Today 📲
              </h2>
              <p className="max-w-[600px] text-[#757575] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get the Scoop App on your device and start connecting with
                professional pet scoopers or find jobs in your area.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#4A90E2] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#3D7AB9] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Download for iOS
              </a>
              <a
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#4A90E2] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#3D7AB9] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Download for Android
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#4A90E2] text-white">
        <p className="text-xs">© 2024 ScooperHero. All rights reserved.</p>
      </footer>
    </div>
  );
}
