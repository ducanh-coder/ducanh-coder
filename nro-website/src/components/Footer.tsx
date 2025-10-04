import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-foreground/10 py-8">
      <div className="container mx-auto px-4 text-sm text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {currentYear} NRO Community. Không liên kết với Teamobi.</p>
        <div className="flex items-center gap-4">
          <Link href="/lien-he" className="hover:underline">
            Liên hệ
          </Link>
          <Link href="/su-kien" className="hover:underline">
            Sự kiện
          </Link>
        </div>
      </div>
    </footer>
  );
}
