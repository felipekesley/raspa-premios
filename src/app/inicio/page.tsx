import { AppBg } from "@/components/_shared/appBg";
import { Btn } from "@/components/_shared/btn";
import { Container } from "@/components/_shared/container";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Início",
};

export default function HomePage() {
  return (
    <AppBg className="bg-appPrimary">
      <Container className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col gap-6 items-center">
          <Image
            src="/logo.png"
            width={282}
            height={225}
            alt="logo"
            className="mx-auto"
          />

          <Btn
            as="link"
            href="/onboard"
            className="uppercase text-white bg-appThird"
          >
            jogar
          </Btn>
        </div>
      </Container>
    </AppBg>
  );
}
