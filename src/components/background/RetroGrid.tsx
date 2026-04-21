
interface RetroGridProps{
    className?: string;
}

export default function RetroGrid({className = ''}: RetroGridProps){

    return(
        <div className={`absolute bottom-0 w-full h-[50vh] perspective-[1000px] ${className}`}>
            <div className="absolute inset-0 transform-gpu rotate-x-[60deg] origin-bottom scale-[2]">
                <div className="w-full h-[200%] bg-synth-grid bg-[length:40px_40px] animate-grid-move"
                style={{
                    maskImage: 'linear-gradient(to bottom, transparent 5%, black 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 5%, black 100%)'
                }}
                />
            </div>
        </div>
    )
}