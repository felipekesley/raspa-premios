import { SortedNumbers } from "@/components/_data/sortedNumbers";
import { AppBg } from "@/components/_shared/appBg";
import { Container } from "@/components/_shared/container";
import { NavBar } from "@/components/_shared/nav";
import { Title } from "@/components/_shared/title";
import { UserBar } from "@/components/userBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Numeros",
};

export default function NumbersPage() {
  return (
    <AppBg className="bg-appPrimary pb-32">
      <Container className="min-h-screen py-8 lg:flex flex-col gap-9">
        <UserBar.Root className="flex justify-between bg-appPrimary-300 p-4 rounded-2xl shadow-lg">
          <UserBar.Wrapper>
            <UserBar.UserName userName="Bruno" />
            <UserBar.Wallet wallet="R$ 300,00" />
          </UserBar.Wrapper>
          <UserBar.Photo src="https://avatar.iran.liara.run/public/32" />
        </UserBar.Root>

        <div className="flex flex-col gap-6">
          <Title tag="h2" fontWeight="bold" className="text-white text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Title>

          <SortedNumbers />
        </div>

        <div>
          <NavBar />
        </div>
      </Container>
    </AppBg>
  );
}
