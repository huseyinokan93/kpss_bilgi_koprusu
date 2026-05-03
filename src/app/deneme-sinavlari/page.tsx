import { subjects } from '@/lib/data';
import QuizContainer from './components/quiz-container';

export default function QuizzesPage() {
  const filteredSubjects = subjects.filter(s => s.id !== 'matematik');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Deneme Sınavları</h1>
        <p className="mt-2 text-muted-foreground">
          Konu bazlı yapay zeka destekli testlerle kendinizi sınayın.
        </p>
      </div>
      <QuizContainer subjects={filteredSubjects} />
    </div>
  );
}
