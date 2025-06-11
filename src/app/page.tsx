import { Metadata } from "next";
import Header from "./Header";
import FeedbackForm from "./FeedbackForm";

export const metadata: Metadata = {
  title: "100% Hojaldre - Feedback",
  description: "100% Hojaldre - Feedback",
  icons: {
    icon: "/hojaldre-favicon.ico",
  },
  openGraph: {
    title: "100% Hojaldre - Feedback",
    description: "100% Hojaldre - Feedback",
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "100% Hojaldre - Feedback",
    description: "100% Hojaldre - Feedback",
    images: "/og-image.png",
  },
  alternates: {
    canonical: "https://100x100hojaldre.com/feedback",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
  },
}

export default function Home() {
  return (
    <div>
      <Header />
      <FeedbackForm />
    </div>
  );
}
