import { AppBg } from "@/components/_shared/appBg";
import { Container } from "@/components/_shared/container";
import { Title } from "@/components/_shared/title";
import { Login } from "@/components/auth";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login",
};

const LoginPage = () => {
  return (
    <AppBg className="bg-appPrimary">
      <Container className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col gap-6 items-center w-full">
          <Image
            src="/logo-icon-2.png"
            width={180}
            height={180}
            alt="logo"
            className="mx-auto"
          />

          <Title
            tag="h3"
            fontWeight="bold"
            className="text-white text-center uppercase"
          >
            acesse sua conta
          </Title>

          <p className="text-white uppercase text-center">
            Acesse sua conta e começe a <br /> jogar agora mesmo!
          </p>

          <Login />
        </div>
      </Container>
    </AppBg>
  );
};

export default LoginPage;
