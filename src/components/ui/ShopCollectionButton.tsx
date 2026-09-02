type ShopCollectionButtonProps = {
  className?: string;
  variant?: "solid" | "outline";
};

const SHOP_URL = "https://www.theduckhorncollection.com/collections/all";

export function ShopCollectionButton({
  className = "",
  variant = "solid",
}: ShopCollectionButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] rounded-md";
  const styles =
    variant === "outline"
      ? "border border-[#425a4d] text-[#425a4d] hover:bg-[#425a4d] hover:text-white"
      : "bg-[#425a4d] text-white hover:bg-[#2D4636]";

  return (
    <a
      href={SHOP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      Shop the Collection
      <span aria-hidden>→</span>
    </a>
  );
}

export { SHOP_URL };
