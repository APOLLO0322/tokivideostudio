/**
 * デザイン参照の `<image-slot>` に相当する素材プレースホルダー。
 *
 * 素材が届いたら `src` を渡すだけで差し替わる。
 *   <ImageSlot placeholder="実績写真1" src="/gallery/1.jpg" alt="..." />
 *   <ImageSlot placeholder="メインビジュアル" src="/hero.mp4" video />
 */
export default function ImageSlot({
  placeholder,
  src,
  alt = "",
  video = false,
  className,
}: {
  placeholder: string;
  src?: string;
  alt?: string;
  video?: boolean;
  className?: string;
}) {
  if (src && video) {
    return (
      <video
        className={className}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={src}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  if (src) {
    return (
      <img
        className={className}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={src}
        alt={alt}
      />
    );
  }

  return (
    <div
      className={className}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "var(--space-4)",
        background: "var(--color-surface)",
        color: "var(--color-neutral-600)",
        fontSize: 13,
        letterSpacing: "0.04em",
      }}
      role="img"
      aria-label={placeholder}
    >
      {placeholder}
    </div>
  );
}
