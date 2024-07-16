"use client";

import { Btn } from "@/components/_shared/btn";
import { Form } from "@/components/_shared/form";
import { Input } from "@/components/_shared/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, KeyRound } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(6, {
    message: "Informe o seu nome",
  }),
  emailOrPhone: z.string().min(6, {
    message: "Informe um email ou telefone",
  }),
  userName: z.string().min(3, {
    message: "Informe seu nome de usuário",
  }),
  password: z.string().min(6, {
    message: "Informe a sua senha",
  }),
});

export const SignIn = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      emailOrPhone: "",
      userName: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    router.replace("/login");
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
        <Input placeholder="Nome completo" {...form.register("name")} />
        <p className="text-appFourth-400 mt-2 text-xs">
          {form.formState.errors.name?.message}
        </p>
      </div>
      <div>
        <Input
          placeholder="Email ou telefone"
          {...form.register("emailOrPhone")}
        />
        <p className="text-appFourth-400 mt-2 text-xs">
          {form.formState.errors.emailOrPhone?.message}
        </p>
      </div>
      <div>
        <Input placeholder="Nome de usuário" {...form.register("userName")} />
        <p className="text-appFourth-400 mt-2 text-xs">
          {form.formState.errors.userName?.message}
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
        classNameBtn="bg-appFourth-400 bg-gradient-to-b from-appFourth-400 to-appSecondary-400"
        onClick={() => onSubmit}
      >
        <span className="bg-white w-10 h-10 rounded-full flex justify-center items-center mr-3">
          <KeyRound strokeWidth={1} className="text-appPrimary" />
        </span>
        Criar conta
      </Btn>
    </Form>
  );
};
