function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-extrabold tracking-tight text-lg ${className}`}
    >
      Yaw Otuo
      <span className="w-2 h-2 rounded-full bg-accent" aria-hidden />
    </span>
  );
}

export default Logo;
