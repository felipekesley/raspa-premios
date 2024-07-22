import { AppBg } from "@/components/_shared/appBg";
import { Container } from "@/components/_shared/container";
import { Form } from "@/components/finalizePurchase";

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Onboard",
};

export default function PurchasePage() {
  return (
    <AppBg className="bg-appPrimary">
      <Container className="min-h-screen flex flex-col justify-center items-center">
        <Image
          src="/logo-icon-2.png"
          width={180}
          height={180}
          alt="logo"
          className="mx-auto mb-6"
        />
        <Form />
      </Container>
    </AppBg>
  );
}
