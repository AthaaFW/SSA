const LayananCard = ({img, isi, link}) => {
    return ( 
        <div className="relative w-max h-max">
                <img src={img} alt="lay1" className="rounded-xl w-[500px] h-[375px]" />
                <div className="absolute z-10 bg-blackTrans flex flex-col text-white top-0 left-0 w-full rounded-xl h-full p-5 py-7 justify-between"> 
                    <a href={link} className="self-end bg-white rounded-full"><button className="rounded-full text-black bg-white px-5 py-2 font-bold border-2 border-white hover:opacity-80">Bergabung</button></a>         
                    <h1 className="text-3xl">{isi}</h1>
                </div>
            </div>
     );
}
 
export default LayananCard;