'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FileText, KeyRound, Lightbulb, Star, MessageSquareQuote, CheckSquare, FileDown, ClipboardList, BrainCircuit } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import type { Topic } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Packer, Document, Paragraph, HeadingLevel, TextRun, PageOrientation } from 'docx';
import { saveAs } from 'file-saver';
import { getTopicSummaryAction } from '@/app/actions';
import { useState } from 'react';
import { GenerateTopicSummaryOutput } from '@/ai/flows/generate-topic-summary';
import { Loader2 } from 'lucide-react';

type SavedNote = {
  id: string;
  type: 'keyPoint' | 'mnemonic';
  content: string;
  topic: string;
};

export default function TopicContent({ subject, topic, topicData }: { subject: string; topic: string; topicData: Topic }) {
  const [savedNotes, setSavedNotes] = useLocalStorage<SavedNote[]>('saved-notes', []);
  const [aiData, setAiData] = useState<GenerateTopicSummaryOutput | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const { toast } = useToast();

  const data = topicData.content || aiData;

  const handleGenerateAiSummary = async () => {
    try {
      setAiLoading(true);
      const result = await getTopicSummaryAction({ topic });
      setAiData(result);
      toast({ title: "Yapay Zeka Hazır!", description: "Konu özeti başarıyla oluşturuldu." });
    } catch (e) {
      toast({ variant: "destructive", title: "Hata", description: "İçerik oluşturulamadı." });
      console.error(e);
    } finally {
      setAiLoading(false);
    }
  };

  const generateWordDocument = () => {
    const paragraphSpacing = { line: 360 };
    const docChildren: Paragraph[] = [
      new Paragraph({ text: topic, heading: HeadingLevel.TITLE, alignment: 'center', spacing: { after: 300 } }),
    ];

    if (subject === 'matematik') {
        docChildren.push(new Paragraph({ text: "Örnek Problemler", heading: HeadingLevel.HEADING_1 }));
        topicData.examples?.forEach(ex => {
            docChildren.push(new Paragraph({ text: ex.title, heading: HeadingLevel.HEADING_2 }));
            docChildren.push(new Paragraph(ex.problem));
            docChildren.push(new Paragraph({ children: [new TextRun({ text: "Çözüm: ", bold: true }), new TextRun(ex.solution)] }));
        });
    } else if (data) {
        docChildren.push(new Paragraph({ text: "Özet", heading: HeadingLevel.HEADING_1 }));
        data.summary.split('\n').forEach(p => docChildren.push(new Paragraph(p)));
        docChildren.push(new Paragraph({ text: "Anahtar Noktalar", heading: HeadingLevel.HEADING_1 }));
        data.keyPoints.forEach(p => docChildren.push(new Paragraph({ text: p, bullet: { level: 0 } })));
    }

    const doc = new Document({
      sections: [{
        properties: { page: { size: { orientation: PageOrientation.LANDSCAPE } }, column: { count: 2, space: 720, separator: true } },
        children: docChildren
      }],
    });

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, `${topic.replace(/ /g, '_')}.docx`);
    });
  };

  const isSaved = (type: SavedNote['type'], content: string) => {
    return savedNotes.some(note => note.type === type && note.content === content && note.topic === topic);
  };

  const handleSaveNote = (type: SavedNote['type'], content: string) => {
    const noteId = `${topic}-${type}-${content}`;
    if (isSaved(type, content)) {
      setSavedNotes(prev => prev.filter(note => note.id !== noteId));
      toast({ description: "Not kaldırıldı." });
    } else {
      setSavedNotes(prev => [...prev, { id: noteId, type, content, topic }]);
      toast({ title: "Not Kaydedildi!", description: "Kaydedilen notlarınıza menüden ulaşabilirsiniz." });
    }
  };

  if (subject === 'matematik') {
    return (
      <div className="space-y-6">
        <div className="flex justify-end mb-4">
          <Button onClick={generateWordDocument} variant="outline"><FileDown className="mr-2 h-4 w-4" /> Word İndir</Button>
        </div>
        <Accordion type="multiple" className="w-full space-y-4">
          {topicData.examples?.map((example, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg bg-card overflow-hidden">
              <AccordionTrigger className="px-6 text-lg font-semibold">{example.title}</AccordionTrigger>
              <AccordionContent className="px-6 space-y-4">
                <Card><CardHeader><CardTitle className="flex items-center gap-2 text-base"><MessageSquareQuote className="w-5 h-5" /> Problem</CardTitle></CardHeader><CardContent>{example.problem}</CardContent></Card>
                <Card><CardHeader><CardTitle className="flex items-center gap-2 text-base"><CheckSquare className="w-5 h-5 text-green-600" /> Çözüm</CardTitle></CardHeader><CardContent>{example.solution}</CardContent></Card>
              </AccordionContent>
            </AccordionItem>
          )) || <Alert><AlertDescription>Örnek bulunamadı.</AlertDescription></Alert>}
        </Accordion>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end gap-2">
        {!data && !aiLoading && (
          <Button onClick={handleGenerateAiSummary} variant="secondary">
            <BrainCircuit className="mr-2 h-4 w-4" /> Yapay Zeka Özeti Oluştur
          </Button>
        )}
        {aiLoading && (
          <Button disabled variant="secondary">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Hazırlanıyor...
          </Button>
        )}
        <Button onClick={generateWordDocument} variant="outline" disabled={!data}>
          <FileDown className="mr-2 h-4 w-4" /> Word İndir
        </Button>
      </div>

      {!data && !aiLoading && (
        <Alert>
          <AlertTitle>İçerik Bulunmuyor</AlertTitle>
          <AlertDescription>Bu konu için yerleşik içerik bulunmuyor. Yukarıdaki butona tıklayarak yapay zeka ile anında özet oluşturabilirsiniz.</AlertDescription>
        </Alert>
      )}

      {data && (
        <Accordion type="multiple" defaultValue={['summary', 'key-points']} className="w-full space-y-4">
          <AccordionItem value="summary" className="border rounded-lg bg-card">
            <AccordionTrigger className="px-6 text-lg"><div className='flex items-center gap-3'><FileText className="w-6 h-6 text-primary" /> Özet</div></AccordionTrigger>
            <AccordionContent className="px-6 prose prose-lg max-w-none">
              {data.summary.split('\n').map((p, i) => <p key={i}>{p}</p>)}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="key-points" className="border rounded-lg bg-card">
            <AccordionTrigger className="px-6 text-lg"><div className='flex items-center gap-3'><KeyRound className="w-6 h-6 text-primary" /> Anahtar Noktalar</div></AccordionTrigger>
            <AccordionContent className="px-6">
              <ul className="space-y-3">
                {data.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start justify-between gap-4 p-3 rounded-md bg-secondary">
                    <span className="flex-1">{point}</span>
                    <Button variant="ghost" size="icon" onClick={() => handleSaveNote('keyPoint', point)}><Star className={`w-5 h-5 ${isSaved('keyPoint', point) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}/></Button>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="mnemonics" className="border rounded-lg bg-card">
            <AccordionTrigger className="px-6 text-lg"><div className='flex items-center gap-3'><Lightbulb className="w-6 h-6 text-primary" /> Şifrelemeler</div></AccordionTrigger>
            <AccordionContent className="px-6">
              <ul className="space-y-3">
                {data.mnemonics.map((mnemonic, i) => (
                  <li key={i} className="flex items-start justify-between gap-4 p-4 rounded-md bg-accent/20 border-l-4 border-accent">
                    <span className="flex-1 font-medium">{mnemonic}</span>
                    <Button variant="ghost" size="icon" onClick={() => handleSaveNote('mnemonic', mnemonic)}><Star className={`w-5 h-5 ${isSaved('mnemonic', mnemonic) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}/></Button>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}

      {topicData.pastQuestions && topicData.pastQuestions.length > 0 && (
        <Card className="border rounded-lg">
          <CardHeader><CardTitle className="flex items-center gap-3 text-lg"><ClipboardList className="w-6 h-6 text-primary" /> Çıkmış Sorular</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {topicData.pastQuestions.map((qa, i) => (
              <div key={i} className="p-4 border rounded-md space-y-2">
                <p className="font-semibold">Soru {i+1}: {qa.question}</p>
                <p className="text-sm bg-muted p-2 rounded">Cevap: {qa.answer}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
