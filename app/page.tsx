import { Calculator } from "@/components/calculator/calculator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Calculator />
      <p className="mt-6 text-xs text-muted-foreground/40">
        {"Use keyboard for quick input"}
      </p>
    </main>
  );
}
