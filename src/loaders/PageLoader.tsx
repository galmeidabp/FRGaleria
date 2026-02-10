export function PageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center flex-col gap-2 bg-white z-50">
      <div className="animate-spin h-8 w-8 border-2 border-green-900 border-t-transparent rounded-full"></div>
      <p>Aguarde um instante...</p>
    </div>
  );
}
