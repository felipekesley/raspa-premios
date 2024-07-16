import { AppBg } from "@/components/_shared/appBg";
import { Btn } from "@/components/_shared/btn";
import { Container } from "@/components/_shared/container";
import { Title } from "@/components/_shared/title";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Onboard",
};

export default function OnbardPage() {
  return (
    <AppBg className="bg-appSecondary">
      <Container className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col gap-6 items-center">
          <Image
            src="/logo-icon.png"
            width={312}
            height={312}
            alt="logo"
            className="mx-auto"
          />

          <Title tag="h2" fontWeight="bold" className="text-white text-center">
            ESCOLHA UM DE NOSSOS JOGOS, TODOS TEM PREMIAÇÕES!
          </Title>

          <Btn
            as="link"
            href="/login"
            className="bg-appThird from-appSecondary-100 to-appSecondary-400"
          >
            continuar
          </Btn>
        </div>
      </Container>
    </AppBg>
  );
}
