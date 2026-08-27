import { ArrowUpRight } from 'lucide-react';

interface LiveProjectButtonProps {
  className?: string;
  href?: string;
}

export default function LiveProjectButton({ className = '', href }: LiveProjectButtonProps) {
  const classes = `inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base whitespace-nowrap transition-colors duration-200 hover:bg-[#D7E2EA]/10 ${className}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        Live Project
        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} aria-hidden="true" />
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      Live Project
      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} aria-hidden="true" />
    </button>
  );
}
