export default function SkillHeader() {
  return (
    <div className="flex flex-col items-center mb-20">
      <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-2 tracking-wider">TECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-synth-secondary to-synth-primary">STACK</span>
      </h2>
      <div className="h-1 w-32 bg-gradient-to-r from-transparent via-synth-secondary to-transparent"></div>
        <p className="mt-4 font-mono text-synth-secondary/60 text-sm tracking-widest uppercase"> //Skills_&_Abilities</p>   
    </div>
  );
}