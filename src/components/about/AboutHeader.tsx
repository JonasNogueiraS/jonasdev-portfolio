export default function AboutHeader(){
    return(
        <div className="flex flex-col items-center mb-14">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-2 tracking-wider">
                Sobre <span className="text-stroke">MIM</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-synth-primary to-transparent"></div>
            <p className="mt-4 font-mono text-synth-primary/60 text-sm tracking-widest uppercase">
                // Who_Am_I
            </p>

        </div>
    )
}