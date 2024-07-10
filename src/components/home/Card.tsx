interface Props{
    img: string, 
    alt: string, 
    info: {
        price: number, 
        title: string
    }
}
export function Card({img, alt, info}:Props) {
  return (
    <div className="grid grid-rows-[1fr_10%] h-[35vh] cursor-pointer">
        <div className="size-full aspect-square">
            <img src={img} alt={alt} className="size-full object-cover"/>
        </div>
        <div className="flex justify-between h-full items-end font-extralight">
            <span>{info.title}</span>
            <span>${info.price}</span>
        </div>
    </div>
  )
}