'use client';

import { useEffect, useState } from 'react';
import { getTopicSummaryAction } from '@/app/actions';
import { GenerateTopicSummaryOutput } from '@/ai/flows/generate-topic-summary';
import { Skeleton } from '@/components/ui/skeleton';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileText, KeyRound, Lightbulb, Star, MessageSquareQuote, CheckSquare, FileDown, ClipboardList } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import type { Topic } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Packer, Document, Paragraph, HeadingLevel, TextRun, PageOrientation } from 'docx';
import { saveAs } from 'file-saver';

type SavedNote = {
  id: string;
  type: 'keyPoint' | 'mnemonic';
  content: string;
  topic: string;
};

export default function TopicContent({ subject, topic, topicData }: { subject: string; topic: string; topicData: Topic }) {
  const [data, setData] = useState<GenerateTopicSummaryOutput | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [savedNotes, setSavedNotes] = useLocalStorage<SavedNote[]>('saved-notes', []);
  const { toast } = useToast();

  useEffect(() => {
    if (subject === 'matematik') {
      setLoading(false);
      return;
    }

    const fetchSummary = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await getTopicSummaryAction({ topic });
        setData(result);
      } catch (e) {
        setError('İçerik yüklenirken bir hata oluştu. Lütfen tekrar deneyin.');
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchSummary();
  }, [topic, subject]);
  
  const generateWordDocument = () => {
    const paragraphSpacing = { line: 360 }; // 1.5 line spacing

    const docChildren: Paragraph[] = [
      new Paragraph({ text: topic, heading: HeadingLevel.TITLE, alignment: 'center', spacing: { after: 300 } }),
      new Paragraph({ text: " ", spacing: paragraphSpacing }),
    ];

    if (subject === 'matematik') {
        docChildren.push(new Paragraph({ text: "Örnek Problemler ve Çözümleri", heading: HeadingLevel.HEADING_1, spacing: { after: 200, before: 200 } }));
        topicData.examples?.forEach(example => {
            docChildren.push(new Paragraph({ text: " ", spacing: paragraphSpacing }));
            docChildren.push(new Paragraph({ text: example.title, heading: HeadingLevel.HEADING_2, spacing: { after: 150, before: 150 } }));
            docChildren.push(new Paragraph({
                children: [new TextRun({ text: "Problem:", bold: true })],
                spacing: paragraphSpacing
            }));
            example.problem.split('\n').forEach(line => docChildren.push(new Paragraph({ text: line, spacing: paragraphSpacing })));
            docChildren.push(new Paragraph({ text: " ", spacing: paragraphSpacing }));
            docChildren.push(new Paragraph({
                children: [new TextRun({ text: "Çözüm:", bold: true })],
                spacing: paragraphSpacing
            }));
            example.solution.split('\n').forEach(line => docChildren.push(new Paragraph({ text: line, spacing: paragraphSpacing })));
        });
    } else if (data) {
        docChildren.push(new Paragraph({ text: "Özet", heading: HeadingLevel.HEADING_1, spacing: { after: 200, before: 200 } }));
        data.summary.split('\n').filter(p => p.trim()).forEach(p => docChildren.push(new Paragraph({ text: p, spacing: paragraphSpacing })));
        docChildren.push(new Paragraph(" "));
        docChildren.push(new Paragraph({ text: "Anahtar Noktalar", heading: HeadingLevel.HEADING_1, spacing: { after: 200, before: 200 } }));
        data.keyPoints.forEach(point => docChildren.push(new Paragraph({ text: point, bullet: { level: 0 }, spacing: paragraphSpacing })));
        docChildren.push(new Paragraph(" "));
        docChildren.push(new Paragraph({ text: "Şifrelemeler (Mnemonikler)", heading: HeadingLevel.HEADING_1, spacing: { after: 200, before: 200 } }));
        data.mnemonics.forEach(mnemonic => docChildren.push(new Paragraph({ text: mnemonic, bullet: { level: 0 }, spacing: paragraphSpacing })));
    }
    
    if (subject !== 'matematik' && topicData.pastQuestions && topicData.pastQuestions.length > 0) {
        docChildren.push(new Paragraph(" "));
        docChildren.push(new Paragraph({ text: "KPSS'de Çıkmış Sorular", heading: HeadingLevel.HEADING_1, spacing: { after: 200, before: 200 } }));
        topicData.pastQuestions.forEach((qa, index) => {
            docChildren.push(new Paragraph({
                children: [
                    new TextRun({ text: `Soru ${index + 1}: `, bold: true }),
                    new TextRun(qa.question)
                ],
                spacing: paragraphSpacing
            }));
            docChildren.push(new Paragraph({
                children: [
                    new TextRun({ text: `Cevap: `, bold: true }),
                    new TextRun(qa.answer)
                ],
                spacing: paragraphSpacing
            }));
            docChildren.push(new Paragraph({ text: " ", spacing: { before: 100, after: 100 } }));
        });
    }

    const doc = new Document({
      sections: [{
        properties: {
          page: {
            size: {
              orientation: PageOrientation.LANDSCAPE,
            },
          },
          column: {
            count: 2,
            space: 720, // 1.27cm
            separator: true,
          },
        },
        children: docChildren
      }],
    });

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, `${topic.replace(/ /g, '_')}.docx`);
      toast({
        title: "Dosya İndirildi",
        description: `${topic}.docx başarıyla oluşturuldu.`,
      });
    });
  };

  const isSaved = (type: SavedNote['type'], content: string) => {
    return savedNotes.some(note => note.type === type && note.content === content && note.topic === topic);
  };

  const handleSaveNote = (type: SavedNote['type'], content: string) => {
    const noteId = `${topic}-${type}-${content}`;
    if (isSaved(type, content)) {
      setSavedNotes(prev => prev.filter(note => note.id !== noteId));
      toast({
        description: "Not kaldırıldı."
      });
    } else {
      setSavedNotes(prev => [...prev, { id: noteId, type, content, topic }]);
       toast({
        title: "Not Kaydedildi!",
        description: "Kaydedilen notlarınıza menüden ulaşabilirsiniz."
      });
    }
  };
  
  const downloadButton = (
    <div className="flex justify-end mb-4">
      <Button 
        onClick={generateWordDocument} 
        variant="outline"
        disabled={(loading && subject !== 'matematik') || (!data && subject !== 'matematik')}
      >
        <FileDown className="mr-2 h-4 w-4" />
        Word Olarak İndir
      </Button>
    </div>
  );

  if (subject === 'matematik') {
    if (!topicData.examples || topicData.examples.length === 0) {
      return (
        <Alert>
          <AlertTitle>Örnek bulunamadı</AlertTitle>
          <AlertDescription>Bu konu için henüz örnek eklenmedi.</AlertDescription>
        </Alert>
      );
    }
    return (
      <div className="space-y-6">
        {downloadButton}
        <h2 className="text-2xl font-bold">Örnek Problemler ve Çözümleri</h2>
        <Accordion type="multiple" className="w-full space-y-4">
          {topicData.examples.map((example, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg bg-card overflow-hidden">
              <AccordionTrigger className="px-6 text-lg font-semibold hover:no-underline">
                {example.title}
              </AccordionTrigger>
              <AccordionContent className="px-6 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <MessageSquareQuote className="w-5 h-5 text-primary" />
                      Problem
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none text-card-foreground/90">
                    <p>{example.problem.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <CheckSquare className="w-5 h-5 text-green-600" />
                      Çözüm
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose max-w-none text-card-foreground/90">
                     <p>{example.solution}</p>
                  </CardContent>
                </Card>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-12 w-1/3" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-12 w-1/3" />
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-12 w-1/3" />
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertTitle>Hata</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div>
      {downloadButton}
      <Accordion type="multiple" defaultValue={['summary', 'key-points']} className="w-full space-y-4">
        <AccordionItem value="summary" className="border rounded-lg bg-card overflow-hidden">
          <AccordionTrigger className="px-6 text-lg font-semibold hover:no-underline">
              <div className='flex items-center gap-3'>
                  <FileText className="w-6 h-6 text-primary" />
                  Özet
              </div>
          </AccordionTrigger>
          <AccordionContent className="px-6">
            <div className="prose prose-lg max-w-none text-card-foreground/90">
              {data?.summary.split('\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="key-points" className="border rounded-lg bg-card overflow-hidden">
          <AccordionTrigger className="px-6 text-lg font-semibold hover:no-underline">
              <div className='flex items-center gap-3'>
                  <KeyRound className="w-6 h-6 text-primary" />
                  Anahtar Noktalar
              </div>
          </AccordionTrigger>
          <AccordionContent className="px-6">
            <ul className="space-y-3">
              {data?.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start justify-between gap-4 p-3 rounded-md bg-secondary">
                  <span className="flex-1">{point}</span>
                  <Button variant="ghost" size="icon" className="shrink-0" onClick={() => handleSaveNote('keyPoint', point)}>
                      <Star className={`w-5 h-5 transition-colors ${isSaved('keyPoint', point) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}/>
                  </Button>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="mnemonics" className="border rounded-lg bg-card overflow-hidden">
          <AccordionTrigger className="px-6 text-lg font-semibold hover:no-underline">
              <div className='flex items-center gap-3'>
                  <Lightbulb className="w-6 h-6 text-primary" />
                  Şifrelemeler (Mnemonikler)
              </div>
          </AccordionTrigger>
          <AccordionContent className="px-6">
            <ul className="space-y-3">
              {data?.mnemonics.map((mnemonic, index) => (
                <li key={index} className="flex items-start justify-between gap-4 p-4 rounded-md bg-accent/20 border-l-4 border-accent">
                  <span className="flex-1 font-medium">{mnemonic}</span>
                  <Button variant="ghost" size="icon" className="shrink-0" onClick={() => handleSaveNote('mnemonic', mnemonic)}>
                      <Star className={`w-5 h-5 transition-colors ${isSaved('mnemonic', mnemonic) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}/>
                  </Button>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>

        {topicData.pastQuestions && topicData.pastQuestions.length > 0 && (
          <AccordionItem value="past-questions" className="border rounded-lg bg-card overflow-hidden">
            <AccordionTrigger className="px-6 text-lg font-semibold hover:no-underline">
              <div className='flex items-center gap-3'>
                <ClipboardList className="w-6 h-6 text-primary" />
                KPSS'de Çıkmış Sorular
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6">
              <div className="space-y-4">
                {topicData.pastQuestions.map((qa, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-base font-semibold">Soru {index + 1}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-card-foreground/90">{qa.question}</p>
                      <div className="p-3 bg-accent/20 border-l-4 border-accent rounded-r-md">
                        <p className="font-medium">Cevap: {qa.answer}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        )}
      </Accordion>
    </div>
  );
}
