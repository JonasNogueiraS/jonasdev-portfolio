import AmbientGlow from "./AmbientGlow";
import RetroGrid from "./RetroGrid";

interface SynthwaveBackgroundProps{
    className?: string;
}

export default function SynthwaveBackground({className =''}: SynthwaveBackgroundProps){
    return(
        <div className={`fixed inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
            <AmbientGlow/>
            <RetroGrid/>
        </div>
    )
}