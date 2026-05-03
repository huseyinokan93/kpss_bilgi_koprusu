import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BookOpenCheck, BrainCircuit, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === "home-hero");
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    KPSS Bilgi Köprüsü'ne Hoş Geldiniz!
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    KPSS hazırlık maratonunda en büyük destekçiniz. Karmaşık konuları basitleştirin, önemli bilgileri not alın ve hedeflerinize ulaşın.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/tarih">
                      Hemen Başla
                    </Link>
                  </Button>
                </div>
              </div>
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={600}
                  height={400}
                  data-ai-hint={heroImage.imageHint}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                />
              )}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Özellikler</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Başarınız için tasarlanmış güçlü araçlarla öğrenme sürecinizi dönüştürün.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              <Card className="h-full">
                <CardHeader>
                  <BookOpenCheck className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Detaylı Konu Anlatımları</CardTitle>
                  <CardDescription>
                    Tarih, Coğrafya ve daha fazlası için uzmanlar tarafından hazırlanmış, anlaşılır ve kapsamlı konu materyalleri.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <BrainCircuit className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Akıllı Özet ve Şifreleme</CardTitle>
                  <CardDescription>
                    Yapay zeka ile karmaşık konuları anında özetleyin ve akılda kalıcı şifrelemeler (mnemonikler) oluşturun.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <Star className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Kişisel Not Yönetimi</CardTitle>
                  <CardDescription>
                    Önemli bulduğunuz bilgileri ve yapay zeka tarafından oluşturulan şifrelemeleri kaydedin, dilediğiniz zaman tekrar gözden geçirin.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
