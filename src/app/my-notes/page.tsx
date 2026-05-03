import SavedNotesClient from "./components/saved-notes-client";

export default function MyNotesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight font-headline">Kaydedilen Notlar</h1>
        <p className="mt-2 text-muted-foreground">
          Önemli bulduğunuz ve kaydettiğiniz anahtar noktalar ve şifrelemeler.
        </p>
      </div>
      <SavedNotesClient />
    </div>
  );
}
