import { GraduationCap } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <GraduationCap className="h-6 w-6 text-primary" />
      <span className="font-semibold text-lg whitespace-nowrap">KPSS Bilgi Köprüsü</span>
    </Link>
  );
}
