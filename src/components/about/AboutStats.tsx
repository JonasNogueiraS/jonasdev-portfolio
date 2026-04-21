import type { AboutStatItem } from "./types";

interface AboutStatsProps{
    stats: AboutStatItem[];
}

export default function AboutStats({stats}: AboutStatsProps){
    return(
        <div className="w-full md:w-5/12">
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-synth-primary/20 blur-xl rounded-full"></div> 
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-synth-primary/20 blur-xl rounded-full"></div> 
                
                <div className="space-y-6 font-mono relative z-10">
                    {stats.map((stat)=>(
                        <div key={stat.id} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                            <span className="text-gray-400 flex items-center gap-2">
                                <stat.icon size={16}/>
                                <stat.label/>
                            </span>
                            <span className={stat.id === 'status' ? "text-synth-secondary" : "text-white text-right"}>
                                {stat.value}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}