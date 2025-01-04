export function Section({ children }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section>
      <div className="lg:container lg:mx-auto p-8 grid gap-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {children}
        </div>
      </div>
    </section>
  );
}
