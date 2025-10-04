export default function TaiGamePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Tải game Ngọc Rồng Online</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <a
          className="rounded-lg border border-foreground/10 p-4 hover:bg-foreground/5"
          href="https://ngocrongonline.com/download"
          target="_blank"
          rel="noopener noreferrer"
        >
          Android (APK)
        </a>
        <a
          className="rounded-lg border border-foreground/10 p-4 hover:bg-foreground/5"
          href="https://ngocrongonline.com/download"
          target="_blank"
          rel="noopener noreferrer"
        >
          iOS
        </a>
        <a
          className="rounded-lg border border-foreground/10 p-4 hover:bg-foreground/5"
          href="https://ngocrongonline.com/download"
          target="_blank"
          rel="noopener noreferrer"
        >
          PC (Windows)
        </a>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Link tải gốc từ trang chủ Teamobi để đảm bảo an toàn tài khoản.
      </p>
    </section>
  );
}
