"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Btn } from "../_shared/btn";
import { Form } from "../_shared/form";
import { Input } from "../_shared/input";
import { PhonePattern } from "../formatedInput";
import { CpfPattern } from "../formatedInput/cpf";

const FormSchema = z
  .object({
    name: z.string().min(3, { message: "Nome é obrigatório" }),
    phone: z
      .string()
      .min(14, {
        message: "Digite o número do telefone",
      })
      .regex(/^\+55 \(\d{2}\) \d \d{4}-\d{4}$/, {
        message: "Digite o número do telefone",
      }),
    confirmPhone: z
      .string()
      .min(14, {
        message: "Digite o número do telefone",
      })
      .regex(/^\+55 \(\d{2}\) \d \d{4}-\d{4}$/, {
        message: "Digite o número do telefone",
      }),
    email: z.string().email({ message: "Email inválido" }),
    cpf: z
      .string()
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "CPF inválido" }),
    agreeToTerms: z.literal(true, {
      errorMap: () => ({ message: "Você deve aceitar os termos e condições" }),
    }),
  })
  .refine((data) => data.phone === data.confirmPhone, {
    message: "Telefones não coincidem",
    path: ["confirmPhone"], // path of error
  });

type FormData = z.infer<typeof FormSchema>;

export const FormFull = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full"
    >
      <div>
        <label className="text-xs text-white pl-5">Nome</label>
        <Input {...register("name")} />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <label className="text-xs text-white pl-5">Telefone</label>
        <PhonePattern
          {...register("phone")}
          format="+55 (##) # ####-####"
          allowEmptyFormatting
          mask="x"
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>
      <div>
        <label className="text-xs text-white pl-5">Confirme seu Telefone</label>
        <PhonePattern
          {...register("confirmPhone")}
          format="+55 (##) # ####-####"
          allowEmptyFormatting
          mask="x"
        />
        {errors.confirmPhone && (
          <p className="text-red-500">{errors.confirmPhone.message}</p>
        )}
      </div>
      <div>
        <label className="text-xs text-white pl-5">Email</label>
        <Input {...register("email")} type="email" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label className="text-xs text-white pl-5">CPF</label>
        <CpfPattern
          {...register("cpf")}
          format="###.###.###-##"
          allowEmptyFormatting
          mask="x"
        />
        {errors.cpf && <p className="text-red-500">{errors.cpf.message}</p>}
      </div>

      <div>
        <label className="text-xs text-white flex items-center">
          <input
            type="checkbox"
            {...register("agreeToTerms")}
            className="mr-2 w-8 h-8"
          />
          Ao clicar em finalizar, você confirma que é maior de 18 anos e está de
          acordo com os termos do sorteio.
        </label>
        {errors.agreeToTerms && (
          <p className="text-red-500">{errors.agreeToTerms.message}</p>
        )}
      </div>
      <Btn
        as="button"
        className="bg-appThird from-appPrimary-100 to-appPrimary-200 mx-auto"
      >
        Enviar
      </Btn>
    </Form>
  );
};
