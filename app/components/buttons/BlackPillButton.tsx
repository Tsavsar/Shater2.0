export default function BlackPillButton({title, onClick}:{title: string, onClick?: () => void}){
    return(
        <button 
            className="h-[38px] px-5 bg-black text-white rounded-full f-p22"
            onClick={onClick}
        >
            {title}
        </button>
    )
}