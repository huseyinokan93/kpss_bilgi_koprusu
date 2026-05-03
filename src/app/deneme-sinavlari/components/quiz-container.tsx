'use client';

import { useState } from 'react';
import { generateQuizAction } from '@/app/actions';
import { Subject } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, CheckCircle2, XCircle, RefreshCcw, BrainCircuit, TableProperties, FileDown } from 'lucide-react';
import { GenerateQuizOutput } from '@/ai/flows/generate-quiz';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Packer, Document, Paragraph, HeadingLevel, TextRun, PageOrientation } from 'docx';
import { saveAs } from 'file-saver';
import { useToast } from '@/hooks/use-toast';

export default function QuizContainer({ subjects }: { subjects: Subject[] }) {
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [quiz, setQuiz] = useState<GenerateQuizOutput | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const topics = subjects.find(s => s.id === selectedSubject)?.topics || [];

  const handleStartQuiz = async () => {
    if (!selectedTopic) return;
    setLoading(true);
    setQuiz(null);
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setShowResults(false);
    try {
      const response = await generateQuizAction({ topic: selectedTopic });
      setQuiz(response);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerChange = (answer: string) => {
    setUserAnswers(prev => ({ ...prev, [currentQuestionIndex]: answer }));
  };

  const handleNext = () => {
    if (quiz && currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const downloadQuizWord = (isSolution: boolean) => {
    if (!quiz) return;

    const paragraphSpacing = { line: 360 }; // 1.5 line spacing
    const docChildren: Paragraph[] = [
      new Paragraph({ 
        text: `${selectedTopic} - ${isSolution ? 'Çözüm Anahtarı' : 'Deneme Sınavı'}`, 
        heading: HeadingLevel.TITLE, 
        alignment: 'center', 
        spacing: { after: 300 } 
      }),
    ];

    quiz.questions.forEach((q, idx) => {
      docChildren.push(new Paragraph({
        children: [
          new TextRun({ text: `Soru ${idx + 1}: `, bold: true }),
          new TextRun(q.question)
        ],
        spacing: { before: 200, after: 100, line: 360 }
      }));

      if (!isSolution) {
        q.options.forEach((opt, oIdx) => {
          docChildren.push(new Paragraph({
            text: `${String.fromCharCode(65 + oIdx)}) ${opt}`,
            spacing: paragraphSpacing
          }));
        });
      } else {
        docChildren.push(new Paragraph({
          children: [
            new TextRun({ text: `Doğru Cevap: `, bold: true, color: "2E7D32" }),
            new TextRun({ text: q.correctAnswer, bold: true, color: "2E7D32" })
          ],
          spacing: paragraphSpacing
        }));
        docChildren.push(new Paragraph({
          children: [
            new TextRun({ text: `Çözüm: `, bold: true }),
            new TextRun(q.explanation)
          ],
          spacing: { ...paragraphSpacing, after: 200 }
        }));
      }
      docChildren.push(new Paragraph({ text: "", spacing: { after: 100 } }));
    });

    const doc = new Document({
      sections: [{
        properties: {
          page: { size: { orientation: PageOrientation.LANDSCAPE } },
          column: { count: 2, space: 720, separator: true },
        },
        children: docChildren
      }],
    });

    Packer.toBlob(doc).then(blob => {
      const fileName = `${selectedTopic.replace(/ /g, '_')}_${isSolution ? 'Cozum' : 'Sinav'}.docx`;
      saveAs(blob, fileName);
      toast({
        title: "Dosya Hazır",
        description: `${fileName} başarıyla indirildi.`,
      });
    });
  };

  const score = quiz?.questions.reduce((acc, q, idx) => {
    return acc + (userAnswers[idx] === q.correctAnswer ? 1 : 0);
  }, 0) || 0;

  if (showResults && quiz) {
    return (
      <div className="space-y-8 pb-20">
        <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button onClick={() => downloadQuizWord(false)} variant="outline" className="flex-1">
                <FileDown className="mr-2 h-4 w-4" /> Soruları İndir
            </Button>
            <Button onClick={() => downloadQuizWord(true)} variant="outline" className="flex-1">
                <FileDown className="mr-2 h-4 w-4" /> Çözümleri İndir
            </Button>
        </div>

        <Card className="border-primary/20 bg-primary/5">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Sınav Tamamlandı!</CardTitle>
            <CardDescription className="text-xl">
              Başarı Oranı: %{Math.round((score / quiz.questions.length) * 100)}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="text-5xl font-bold text-primary">
              {score} / {quiz.questions.length}
            </div>
            <p className="text-muted-foreground">Tebrikler! {selectedTopic} hakkındaki bilginizi ölçtünüz.</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={() => setQuiz(null)}>Yeni Sınav Başlat</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <TableProperties className="w-5 h-5 text-primary" />
              Cevap Anahtarı
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
              {quiz.questions.map((q, idx) => {
                const isCorrect = userAnswers[idx] === q.correctAnswer;
                return (
                  <div 
                    key={idx} 
                    className={`flex flex-col items-center p-2 rounded border text-sm font-medium ${
                      isCorrect ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'
                    }`}
                  >
                    <span>{idx + 1}</span>
                    <span className="text-xs opacity-70">
                      {q.correctAnswer.substring(0, 1)}
                    </span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-xl font-bold">Detaylı Soru İncelemesi</h3>
          {quiz.questions.map((q, idx) => (
            <Card key={idx} className={userAnswers[idx] === q.correctAnswer ? 'border-green-500/30 bg-green-50/10' : 'border-red-500/30 bg-red-50/10'}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-base font-semibold leading-relaxed">
                    Soru {idx + 1}: {q.question}
                  </CardTitle>
                  {userAnswers[idx] === q.correctAnswer ? (
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <span className="text-muted-foreground">Sizin Cevabınız:</span>{' '}
                  <span className={userAnswers[idx] === q.correctAnswer ? 'text-green-600 font-semibold' : 'text-red-600 font-semibold'}>
                    {userAnswers[idx] || 'İşaretlenmedi'}
                  </span>
                </div>
                <div className="text-sm font-semibold text-green-600 flex items-center gap-2 bg-green-50 p-2 rounded">
                  <CheckCircle2 className="w-4 h-4" />
                  Doğru Cevap: {q.correctAnswer}
                </div>
                <div className="mt-2 p-4 bg-muted/50 rounded-lg text-sm italic border-l-4 border-primary">
                  <span className="font-bold not-italic block mb-1">Çözüm:</span>
                  {q.explanation}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (quiz) {
    const q = quiz.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

    return (
      <div className="space-y-6">
        <div className="flex justify-end gap-2">
            <Button onClick={() => downloadQuizWord(false)} variant="outline" size="sm">
                <FileDown className="mr-2 h-4 w-4" /> Soruları İndir
            </Button>
            <Button onClick={() => downloadQuizWord(true)} variant="outline" size="sm">
                <FileDown className="mr-2 h-4 w-4" /> Çözümleri İndir
            </Button>
        </div>
        
        <Card className="max-w-3xl mx-auto shadow-lg">
            <CardHeader>
            <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-bold px-3 py-1 bg-secondary rounded-full">Soru {currentQuestionIndex + 1} / {quiz.questions.length}</span>
                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{selectedTopic}</span>
            </div>
            <Progress value={progress} className="h-2" />
            <CardTitle className="pt-6 text-xl leading-relaxed font-headline">{q.question}</CardTitle>
            </CardHeader>
            <CardContent>
            <RadioGroup value={userAnswers[currentQuestionIndex] || ''} onValueChange={handleAnswerChange} className="space-y-4">
                {q.options.map((option, idx) => (
                <div key={idx} className={`flex items-center space-x-2 border-2 p-4 rounded-xl transition-all cursor-pointer ${userAnswers[currentQuestionIndex] === option ? 'border-primary bg-primary/5 ring-1 ring-primary' : 'hover:border-primary/50 hover:bg-accent'}`}>
                    <RadioGroupItem value={option} id={`q-${idx}`} className="sr-only" />
                    <Label htmlFor={`q-${idx}`} className="flex-1 cursor-pointer font-medium text-base">
                    <span className="inline-block w-8 h-8 rounded-full bg-secondary text-center leading-8 mr-3 font-bold">
                        {String.fromCharCode(65 + idx)}
                    </span>
                    {option}
                    </Label>
                </div>
                ))}
            </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-between items-center pt-6">
            <Button 
                variant="ghost" 
                onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
            >
                Önceki
            </Button>
            <Button onClick={handleNext} disabled={!userAnswers[currentQuestionIndex]} size="lg" className="px-8">
                {currentQuestionIndex === quiz.questions.length - 1 ? 'Sınavı Bitir' : 'Sonraki Soru'}
            </Button>
            </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <Card className="border-2 border-primary/10 shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <BrainCircuit className="w-8 h-8 text-primary" />
            Sınav Ayarları
          </CardTitle>
          <CardDescription className="text-base">Ders ve konu seçerek yapay zeka tarafından hazırlanan 20 soruluk özel testinizi başlatın.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Ders Seçin</label>
            <Select value={selectedSubject} onValueChange={(val) => {
              setSelectedSubject(val);
              setSelectedTopic('');
            }}>
              <SelectTrigger className="h-12 text-base">
                <SelectValue placeholder="Ders seçin..." />
              </SelectTrigger>
              <SelectContent>
                {subjects.map(s => (
                  <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Konu Seçin</label>
            <Select value={selectedTopic} onValueChange={setSelectedTopic} disabled={!selectedSubject}>
              <SelectTrigger className="h-12 text-base">
                <SelectValue placeholder="Konu seçin..." />
              </SelectTrigger>
              <SelectContent>
                {topics.map(t => (
                  <SelectItem key={t.name} value={t.name}>{t.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full h-14 text-lg font-bold shadow-lg" onClick={handleStartQuiz} disabled={!selectedTopic || loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                20 Soru Hazırlanıyor...
              </>
            ) : (
              <>
                <RefreshCcw className="mr-2 h-6 w-6" />
                Sınavı Başlat
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}