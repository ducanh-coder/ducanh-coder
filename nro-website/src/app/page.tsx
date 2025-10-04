import Link from "next/link";

export default function Home() {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Ngọc Rồng Online
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Cộng đồng game Ngọc Rồng Online: tin tức, hướng dẫn tân thủ, chia sẻ kinh
          nghiệm và công cụ hỗ trợ người chơi.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link
            href="/tai-game"
            className="px-5 py-2.5 rounded-md bg-foreground text-background font-medium hover:opacity-90"
          >
            Tải game
          </Link>
          <Link
            href="/huong-dan"
            className="px-5 py-2.5 rounded-md border border-foreground/20 hover:bg-foreground/10"
          >
            Hướng dẫn tân thủ
          </Link>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="rounded-xl border border-foreground/10 p-6">
          <h3 className="font-semibold text-lg">Sự kiện mới nhất</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Cập nhật nhanh lịch sự kiện trong game và phần thưởng hấp dẫn.
          </p>
          <Link href="/su-kien" className="mt-4 inline-block text-sm underline">
            Xem sự kiện
          </Link>
        </div>
        <div className="rounded-xl border border-foreground/10 p-6">
          <h3 className="font-semibold text-lg">Bảng xếp hạng</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Top người chơi nổi bật theo sức mạnh và thành tích.
          </p>
          <Link href="/bang-xep-hang" className="mt-4 inline-block text-sm underline">
            Xem bảng xếp hạng
          </Link>
        </div>
        <div className="rounded-xl border border-foreground/10 p-6">
          <h3 className="font-semibold text-lg">Hướng dẫn chi tiết</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Lộ trình tân thủ, phái, trang bị và mẹo farm hiệu quả.
          </p>
          <Link href="/huong-dan" className="mt-4 inline-block text-sm underline">
            Bắt đầu học
          </Link>
        </div>
      </div>
    </section>
  );
}
