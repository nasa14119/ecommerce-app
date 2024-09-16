interface Props {
  img: string;
  alt: string;
  info: {
    price: number;
    title: string;
  };
}
export function Card({ img, alt, info }: Props) {
  return (
    <div className="grid grid-rows-[1fr_10%] cursor-pointer size-full">
      <div className="h-full aspect-square md:aspect-auto md:size-full md:min-w-0">
        <img src={img} alt={alt} className="size-full object-cover" />
      </div>
      <div className="flex justify-between h-full items-end font-extralight">
        <span>{info.title}</span>
        <span>${info.price}</span>
      </div>
    </div>
  );
}
