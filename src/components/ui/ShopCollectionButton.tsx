type ShopCollectionButtonProps = {
  className?: string;
  variant?: "solid" | "outline" | "footer";
  showPromo?: boolean;
};

const SHOP_URL = "https://www.duckhorn.com/collections/all";
const SHOP_LABEL = "Shop Duckhorn Vineyards";
const SHOP_PROMO =
  "Use Code DV50Years to become a Duckhorn Vineyards club member for a day and receive 15% off your next purchase.";

export function ShopCollectionButton({
  className = "",
  variant = "solid",
  showPromo = true,
}: ShopCollectionButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] rounded-md";
  const styles =
    variant === "footer"
      ? "border border-white/80 text-white hover:bg-white hover:text-[#425a4d]"
      : variant === "outline"
        ? "border border-[#425a4d] text-[#425a4d] hover:bg-[#425a4d] hover:text-white"
        : "bg-[#425a4d] text-white hover:bg-[#2D4636]";

  const promoClass =
    variant === "footer"
      ? "mt-4 max-w-md mx-auto text-sm text-white/85 leading-relaxed"
      : "mt-4 max-w-md mx-auto text-sm text-[#3D3D3D] leading-relaxed";

  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <a
        href={SHOP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles}`}
      >
        {SHOP_LABEL}
        <span aria-hidden>→</span>
      </a>
      {showPromo && <p className={promoClass}>{SHOP_PROMO}</p>}
    </div>
  );
}

export { SHOP_URL, SHOP_LABEL, SHOP_PROMO };
