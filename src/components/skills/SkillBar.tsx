import type { SkillItem } from "./types";

interface SkillBarProps {
    skill: SkillItem;
}

export default function SkillBar({ skill }: SkillBarProps) {
    return (
        <div className="group">
            <div className="flex justify-between items-end mb-2">
                <span className="font-mono text-lg text-gray-300 group-hover:text-white transition-colors tracking-wide">
                    &gt;{skill.name}
                </span>
                <span>
                    {skill.level}%
                </span>
            </div>
            
            <div className="h-3 w-full bg-[#1a1a2e] rounded-sm overflow-hidden border border-white/5 relative">
                <div className="absolute inset-0 w-full h-full bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:10%_100%]"></div>
                    <div className={`h-full relative ${skill.color} shadow-[0_0_15px_currentColor] transition-all duration-1000 ease-out`} style={{width: `${skill.level}%`}}>
                        <div className="absolute right-0 top-0 bottom-0 w-1 bg-white opacity-50 shadow-[0_0_5px_white]"></div>
                    </div>
                </div>
            </div>
    );
}