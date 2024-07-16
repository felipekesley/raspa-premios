import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
};

export const GameImage = ({
  src,
  width = 240,
  height = 185,
  alt = "Imagem do game",
  className,
}: Props) => {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={cn("object-cover w-full rounded-2xl mb-3", className)}
    />
  );
};
