'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { getMnemonicHintAction } from '@/app/actions';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Lightbulb, FileText, Star } from 'lucide-react';
import { GenerateMnemonicHintOutput } from '@/ai/flows/generate-mnemonic-hint';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  text: z.string().min(10, { message: 'Lütfen en az 10 karakter girin.' }).max(1000, { message: 'En fazla 1000 karakter girebilirsiniz.' }),
});

type SavedNote = {
  id: string;
  type: 'keyPoint' | 'mnemonic';
  content: string;
  topic: string;
};

export default function MnemonicGenerator({ topic }: { topic: string }) {
  const [result, setResult] = useState<GenerateMnemonicHintOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [savedNotes, setSavedNotes] = useLocalStorage<SavedNote[]>('saved-notes', []);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await getMnemonicHintAction({ topic, text: values.text });
      setResult(response);
    } catch (e) {
      setError('Şifreleme oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

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


  return (
    <div className="max-w-2xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Metin</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Örn: Osmanlı Devleti'nin duraklama dönemindeki ıslahatçı padişahlar..."
                    className="min-h-[150px] text-base"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            Oluştur
          </Button>
        </form>
      </Form>

      {error && (
        <Alert variant="destructive" className="mt-6">
          <AlertTitle>Hata</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {result && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Yapay Zeka Sonucu</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Önemli Detaylar</h3>
              </div>
              <p className="text-muted-foreground">{result.summary}</p>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Şifreleme İpucu</h3>
              </div>
              <div className="flex items-start justify-between gap-4 p-4 rounded-md bg-accent/20 border-l-4 border-accent">
                <p className="font-medium flex-1">{result.mnemonicHint}</p>
                 <Button variant="ghost" size="icon" className="shrink-0" onClick={() => handleSaveNote('mnemonic', result.mnemonicHint)}>
                    <Star className={`w-5 h-5 transition-colors ${isSaved('mnemonic', result.mnemonicHint) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}/>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
