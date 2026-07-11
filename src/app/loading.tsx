export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-label="Loading">
      <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-stone border-t-amber" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
