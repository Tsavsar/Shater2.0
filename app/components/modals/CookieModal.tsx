export default function CookieModal(){
    return(
        <div className="h-screen w-full fixed top-0 left-0 z-[10001] p-5 md:p-10 flex items-end justify-end">
            <div className="h-[200px] w-[200px] bg-white">
                <div />
                <div className="flex items-center gap-2">
                    <button className="bg-[#f5f5f5] text-black">Decline</button>
                    <button className="bg-black text-white f-satoshi">Accept</button>
                </div>
            </div>
        </div>
    )
}