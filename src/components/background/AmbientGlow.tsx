interface AmbientGlowProps {
  className?: string;
}

export default function AmbientGlow({ className = "" }: AmbientGlowProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
        {/* céu */}
      <div className="absolute inset-0 bg-gradient-to-b from-synth-void via-synth-midnight to-synth-twilight" />
        {/* luz */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-synth-primary/10 blur-[100px] rounded-full"/>
      
      {/* linha do horizonte */}
      <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-synth-secondary to-transparent shadow-[0_0_20px_theme(colors.synth.secondary)]"/>
    </div>
  );
}
