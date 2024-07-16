import { AppBg } from "@/components/_shared/appBg";
import { Container } from "@/components/_shared/container";
import { NavBar } from "@/components/_shared/nav";
import { GameCard } from "@/components/cardGame";
import { UserBar } from "@/components/userBar";
import { Play, ReceiptText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <AppBg className="bg-appPrimary">
      <Container className="min-h-screen py-8 lg:flex flex-col justify-between">
        <UserBar.Root className="flex justify-between bg-appPrimary-300 p-4 rounded-2xl shadow-lg">
          <UserBar.Wrapper>
            <UserBar.UserName userName="Bruno" />
            <UserBar.Wallet wallet="R$ 300,00" />
          </UserBar.Wrapper>
          <UserBar.Photo src="https://avatar.iran.liara.run/public/32" />
        </UserBar.Root>

        <GameCard.Root className="lg:mt-0 mt-8">
          <GameCard.Tag text="mais jogado" />
          <GameCard.Image src="/gameImage.webp" />
          <GameCard.Title text="Tesouro do jacaré" />
          <GameCard.Description text="encontre os objetos do jacaré e receba premios na hora!" />
          <GameCard.Premiation text="80% em premios" />
          <GameCard.Actions>
            <GameCard.Action icon={Play} />
            <GameCard.Action icon={ReceiptText} />
          </GameCard.Actions>
        </GameCard.Root>

        <div>
          <NavBar />
        </div>
      </Container>
    </AppBg>
  );
}
