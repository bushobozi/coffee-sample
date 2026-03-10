import type { Metadata } from "next";
import type { LayoutProps } from "../types/LayoutProps";
import { CustomerFeedback } from "../components";

export const metadata: Metadata = {
  title: "Our blog",
  description: "Coffee in Uganda",
};

export default function BlogLayout({ children }: LayoutProps) {
  return (
    <>
      <div className="max-w-7xl mx-auto mb-22 px-4 sm:px-6 lg:px-8 py-12 lg:py-15">
        {children}
      </div>
      <CustomerFeedback />
    </>
  );
}
