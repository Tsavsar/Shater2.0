export default function PrototypeVideo({url, extension}:{url: string, extension: string}){
    return (
            <div className="h-full w-full">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover rounded-3xl bg-[#f5f5f5]"
                    controls={false}
                >
                    <source src={url} type={"video/mp4"} />
                    Your browser does not support the video tag.
                </video>
            </div>
        )
      ;
}