"use client";

import { purchaseAtom } from "@/atoms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Btn } from "../_shared/btn";
import { Form } from "../_shared/form";
import { Title } from "../_shared/title";
import { PhonePattern } from "../formatedInput";

const FormSchema = z.object({
  phone: z
    .string()
    .min(14, { message: "Digite o número do telefone" })
    .regex(/^\+55 \(\d{2}\) \d \d{4}-\d{4}$/, {
      message: "Digite o número do telefone",
    }),
  agreeToTerms: z.literal(true, {
    errorMap: () => ({ message: "Você deve aceitar os termos e condições" }),
  }),
});

type FormData = z.infer<typeof FormSchema>;

export const FormPhone = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  const [_, setValidated] = useAtom(purchaseAtom);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setValidated({ isValidated: true });
  };

  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <Title
        tag="h3"
        fontWeight="bold"
        className="text-white text-center uppercase"
      >
        Finalizar Compra
      </Title>
      <p className="text-white uppercase text-center">
        Pagamento referente a participação no sorteio "1º PRÊMIO: 2 HONDA BIS
        110C | 2º PRÊMIO: 1 HONDA BIS 110C | 3º PRÊMIO: 1 IPHONE 15"
      </p>

      <Form
        className="flex flex-col gap-4 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <span className="text-xs text-white pl-5">Telefone</span>
          <PhonePattern
            {...register("phone")}
            format="+55 (##) # ####-####"
            allowEmptyFormatting
            mask="x"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label className="text-xs text-white flex items-center">
            <input
              type="checkbox"
              {...register("agreeToTerms")}
              className="mr-2 w-8 h-8"
            />
            Ao clicar em finalizar, você confirma que é maior de 18 anos e está
            de acordo com os termos do sorteio.
          </label>
          {errors.agreeToTerms && (
            <p className="text-red-500">{errors.agreeToTerms.message}</p>
          )}
        </div>

        <Btn
          as="button"
          className="bg-appThird from-appPrimary-100 to-appPrimary-200 mx-auto"
        >
          Proseguir
        </Btn>
      </Form>
    </div>
  );
};
