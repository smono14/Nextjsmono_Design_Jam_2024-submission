import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "At-door",
  description: "This is Home for my E-commerce platform named Atdoor with variety of your wishlist and daily usage products",
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
