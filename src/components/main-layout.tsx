'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {
  ScrollText,
  Globe,
  BrainCircuit,
  Calculator,
  Bookmark,
  ClipboardCheck,
} from 'lucide-react';
import { Logo } from './logo';

const navItems = [
  { href: '/tarih', label: 'Tarih', icon: ScrollText },
  { href: '/cografya', label: 'Coğrafya', icon: Globe },
  { href: '/genel-kultur', label: 'Genel Kültür', icon: BrainCircuit },
  { href: '/matematik', label: 'Matematik', icon: Calculator },
];

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Logo />
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <Link href={item.href}>
                  <SidebarMenuButton
                    isActive={pathname.startsWith(item.href)}
                    tooltip={item.label}
                  >
                    <item.icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem>
                <Link href="/deneme-sinavlari">
                  <SidebarMenuButton
                    isActive={pathname === '/deneme-sinavlari'}
                    tooltip="Deneme Sınavları"
                  >
                    <ClipboardCheck className="text-primary" />
                    <span>Deneme Sınavları</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            <SidebarMenuItem>
                <Link href="/my-notes">
                  <SidebarMenuButton
                    isActive={pathname === '/my-notes'}
                    tooltip="Kaydedilenler"
                  >
                    <Bookmark />
                    <span>Kaydedilenler</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-14 items-center gap-4 border-b bg-background/50 backdrop-blur-sm px-4 lg:h-[60px] lg:px-6 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="md:hidden" />
            <div className="hidden md:block">
              <Breadcrumb />
            </div>
          </div>
        </header>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}

function Breadcrumb() {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(Boolean);

    if (segments.length === 0) {
        return <div className="font-semibold">Anasayfa</div>;
    }
    
    return (
        <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground">Anasayfa</Link>
            {segments.map((segment, index) => {
                const href = '/' + segments.slice(0, index + 1).join('/');
                const isLast = index === segments.length - 1;
                const decodedSegment = decodeURIComponent(segment);
                const capitalized = decodedSegment.charAt(0).toUpperCase() + decodedSegment.slice(1);

                return (
                    <React.Fragment key={href}>
                        <span className="text-muted-foreground">/</span>
                        {isLast ? (
                            <span className="font-semibold text-foreground">{capitalized}</span>
                        ) : (
                            <Link href={href} className="text-muted-foreground hover:text-foreground">
                                {capitalized}
                            </Link>
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
}
