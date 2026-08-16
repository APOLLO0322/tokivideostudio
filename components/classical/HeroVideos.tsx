"use client";

import { useEffect, useRef, useState } from "react";

/**
 * 複数の動画を順番に再生し、最後まで行ったら先頭に戻るヒーロー。
 * 差し替えは public/hero/ にファイルを置いて `sources` を変えるだけ。
 */
export default function HeroVideos({
  sources = ["/hero/1.mp4", "/hero/2.mp4"],
}: {
  sources?: string[];
}) {
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // src を差し替えたら明示的に読み込み直して再生する
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    // 自動再生がブロックされた場合は握りつぶす（ミュート済みなので通常は成功する）
    void video.play().catch(() => {});
  }, [index]);

  return (
    <video
      ref={videoRef}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      src={sources[index]}
      autoPlay
      muted
      playsInline
      // loop は付けない。終了時に次の動画へ送る
      onEnded={() => setIndex((current) => (current + 1) % sources.length)}
    />
  );
}
