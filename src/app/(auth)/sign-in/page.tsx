import { AppBg } from "@/components/_shared/appBg";
import { Container } from "@/components/_shared/container";
import { Title } from "@/components/_shared/title";
import { SignIn } from "@/components/auth";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Registre-se",
};

const SignInPage = () => {
  return (
    <AppBg className="bg-appPrimary">
      <Container className="min-h-screen flex justify-center items-center">
        <div className="flex flex-col gap-6 items-center w-full">
          <Title
            tag="h3"
            fontWeight="bold"
            className="text-white text-center uppercase"
          >
            Registre-se
          </Title>

          <p className="uppercase text-center text-white">
            Já tem uma conta?{" "}
            <Link href="/login" className="underline text-appFourth-400">
              Login
            </Link>
          </p>

          <SignIn />
        </div>
      </Container>
    </AppBg>
  );
};

export default SignInPage;
