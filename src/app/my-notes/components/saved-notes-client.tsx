'use client';

import { useLocalStorage } from '@/hooks/use-local-storage';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { KeyRound, Lightbulb, Trash2 } from 'lucide-react';
import Link from 'next/link';

type SavedNote = {
  id: string;
  type: 'keyPoint' | 'mnemonic';
  content: string;
  topic: string;
};

export default function SavedNotesClient() {
  const [savedNotes, setSavedNotes] = useLocalStorage<SavedNote[]>('saved-notes', []);

  const handleRemoveNote = (id: string) => {
    setSavedNotes(prev => prev.filter(note => note.id !== id));
  };
  
  if (savedNotes.length === 0) {
    return (
      <div className="text-center py-12 border-2 border-dashed rounded-lg">
        <h3 className="text-lg font-semibold">Henüz kaydedilmiş notunuz yok.</h3>
        <p className="text-muted-foreground mt-2">
          Konu sayfalarındaki yıldız ikonuna tıklayarak notlarınızı kaydedebilirsiniz.
        </p>
        <Button asChild className="mt-4">
          <Link href="/tarih">Konuları Keşfet</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {savedNotes.map(note => (
        <Card key={note.id}>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-lg flex items-center gap-2">
                  {note.type === 'keyPoint' ? <KeyRound className="w-5 h-5 text-primary" /> : <Lightbulb className="w-5 h-5 text-primary" />}
                  {note.type === 'keyPoint' ? 'Anahtar Nokta' : 'Şifreleme'}
                </CardTitle>
                <CardDescription>
                  <span className="font-medium">{decodeURIComponent(note.topic)}</span> konusundan.
                </CardDescription>
              </div>
              <Button variant="ghost" size="icon" onClick={() => handleRemoveNote(note.id)}>
                <Trash2 className="w-5 h-5 text-destructive" />
                <span className="sr-only">Notu sil</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <p className={note.type === 'mnemonic' ? 'font-medium' : ''}>{note.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
