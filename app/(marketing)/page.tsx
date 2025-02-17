import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const MarketingPage = () => {
  return (
    <div className="flex flex-col items-center text-center px-6 md:px-16 py-16 bg-gray-100">
      <h1 className="text-6xl md:text-9xl font-bold text-neutral-900">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          TaskHub
        </span>
      </h1>

      <h2
        className="text-3xl md:text-5xl font-semibold text-neutral-800 mt-6 leading-tight"
        data-testid="main_title"
      >
        <span className="block mb-2">Organize. Track.</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-teal-500">
          Achieve More.
        </span>
      </h2>

      <p
        className={cn(
          "text-base md:text-lg text-neutral-500 mt-4 max-w-2xl",
          textFont.className
        )}
        data-testid="main_description"
      >
        TaskHub empowers teams to work smarter, collaborate seamlessly, and
        stay ahead. Whether in the office or remote, boost productivity like
        never before.
      </p>

      <Button
        className="mt-6 px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 transition duration-300"
        size="lg"
        asChild
        data-testid="main_button"
      >
        <Link href="/sign-up">Start for Free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
