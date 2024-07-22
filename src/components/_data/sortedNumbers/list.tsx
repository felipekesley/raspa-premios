import { numbers } from "@/data/numbers/";

import { BtnNumber } from "./number";
import { Reveal } from "./reveal";

export const SortedNumbers = async () => {
  const data = await numbers.sorted();

  return (
    <ul className="flex gap-2 flex-wrap justify-between">
      <li className="w-full">
        <Reveal />
      </li>
      {data?.map((number) => (
        <li key={crypto.randomUUID()}>
          <BtnNumber>{number}</BtnNumber>
        </li>
      ))}
    </ul>
  );
};
