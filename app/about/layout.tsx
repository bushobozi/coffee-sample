import type { Metadata } from "next";
import type { LayoutProps } from "../types/LayoutProps";

export const metadata: Metadata = {
  title: "About Us",
  description: "Coffee in Uganda",
};

export default function AboutLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
