import Image from "next/image";

type Props = {
  src: string;
  width?: number;
  height?: number;
  alt?: string;
};

export const Photo = ({
  src,
  width = 44,
  height = 44,
  alt = "Foto do perfil",
}: Props) => {
  return <Image src={src} width={width} height={height} alt={alt} />;
};
