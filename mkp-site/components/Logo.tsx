export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`font-brand text-fuelYellow font-bold ${className}`} aria-label="Mark Kelly Productions LLC">
      <span className="tracking-widest">MKP</span>
    </div>
  );
}