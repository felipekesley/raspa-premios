"use client";

import { Btn } from "@/components/_shared/btn";
import { Form } from "@/components/_shared/form";
import { Input } from "@/components/_shared/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(6, {
    message: "Informe a sua senha",
  }),
});

export const Login = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    router.replace("/");
  };

  const handlePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Form
      className="flex flex-col gap-4 w-full"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <div>
        <Input placeholder="Email" {...form.register("email")} />
        <p className="text-appFourth-400 mt-2 text-xs">
          {form.formState.errors.email?.message}
        </p>
      </div>
      <div>
        <div className="relative">
          <Input
            placeholder="Senha"
            type={showPassword ? "text" : "password"}
            {...form.register("password")}
          />
          <button
            type="button"
            className="absolute right-4 top-[12px] cursor-pointer"
            onClick={handlePassword}
          >
            {showPassword ? (
              <Eye strokeWidth={1} />
            ) : (
              <EyeOff strokeWidth={1} />
            )}
          </button>
        </div>
        <p className="text-appFourth-400 mt-2 text-xs">
          {form.formState.errors.password?.message}
        </p>
      </div>
      <Link
        href="/"
        title="recuperar senha"
        className="uppercase ml-auto text-appFourth-400"
      >
        recuperar senha
      </Link>

      <Btn
        as="button"
        className="bg-appThird from-appPrimary-100 to-appPrimary-200 mx-auto"
        onClick={() => onSubmit}
      >
        acessar
      </Btn>

      <p className="uppercase text-center text-white">
        Não tem conta?{" "}
        <Link href="/sign-in" className="underline text-appFourth-400">
          Criar
        </Link>
      </p>
    </Form>
  );
};
