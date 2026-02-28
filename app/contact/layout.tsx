import type { Metadata } from "next";
import type { LayoutProps } from "../types/LayoutProps";

export const metadata: Metadata = {
  title: "Contact Us today",
  description: "Coffee in Uganda",
};

export default function ContactLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
