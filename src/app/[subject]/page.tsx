import { subjects } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

type SubjectPageProps = {
  params: {
    subject: string;
  };
};

export async function generateStaticParams() {
  return subjects.map((subject) => ({
    subject: subject.id,
  }));
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const subject = subjects.find((s) => s.id === params.subject);

  if (!subject) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">{subject.name}</h1>
        <p className="mt-2 text-muted-foreground">{subject.description}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {subject.topics.map((topic) => {
          const image = topic.imageId ? PlaceHolderImages.find(p => p.id === topic.imageId) : null;
          return (
          <Link key={topic.name} href={`/${subject.id}/${encodeURIComponent(topic.name)}`} className="group block">
            <Card className="h-full transition-all duration-200 group-hover:border-primary group-hover:shadow-md overflow-hidden flex flex-col">
              {image && (
                <div className="relative aspect-video">
                  <Image
                    src={image.imageUrl}
                    alt={topic.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              )}
              <CardHeader className="flex flex-row items-center justify-between flex-1">
                <div className="space-y-1">
                    <CardTitle className="text-lg">{topic.name}</CardTitle>
                    {topic.description && !image && <CardDescription className="line-clamp-2">{topic.description}</CardDescription>}
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 shrink-0 ml-4" />
              </CardHeader>
            </Card>
          </Link>
        )})}
      </div>
    </div>
  );
}
