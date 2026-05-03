import { subjects } from '@/lib/data';
import { notFound } from 'next/navigation';
import TopicContent from './components/topic-content';
import { Separator } from '@/components/ui/separator';
import MnemonicGenerator from './components/mnemonic-generator';
import { BrainCircuit } from 'lucide-react';

type TopicPageProps = {
  params: Promise<{
    subject: string;
    topic: string;
  }>;
};

export async function generateStaticParams() {
    const params: { subject: string; topic: string; }[] = [];
    subjects.forEach(subject => {
        subject.topics.forEach(topic => {
            params.push({ 
                subject: subject.id, 
                topic: topic.name 
            });
        });
    });
    return params;
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { subject: subjectId, topic: topicName } = await params;
  
  const decodedTopic = decodeURIComponent(topicName);
  const subject = subjects.find((s) => s.id === subjectId);
  
  const topicData = subject?.topics.find((t) => 
    t.name === decodedTopic || t.name === topicName
  );
  
  if (!subject || !topicData) {
    notFound();
  }

  const isMath = subject.id === 'matematik';

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tight font-headline">{topicData.name}</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {isMath && topicData.description ? topicData.description : (topicData.content ? 'Yerleşik konu özeti ve şifrelemeler.' : 'Özel özet oluşturmak için yapay zekayı kullanın.')}
        </p>
      </div>
      
      <TopicContent subject={subject.id} topic={topicData.name} topicData={topicData} />

      {!isMath && (
        <>
          <Separator className="my-12" />

          <div>
            <div className="flex items-center gap-3">
                <BrainCircuit className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold tracking-tight font-headline">Akıllı Şifre Oluşturucu</h2>
            </div>
            <p className="mt-2 text-lg text-muted-foreground">
              Ezberlemekte zorlandığınız bir bilgiyi yapıştırın, yapay zeka sizin için özetlesin ve bir şifreleme (mnemonik) oluştursun.
            </p>
          </div>

          <MnemonicGenerator topic={topicData.name} />
        </>
      )}
    </div>
  );
}
