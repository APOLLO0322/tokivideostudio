"use client";

import { useEffect, useRef, useState } from "react";

const MOBILE_QUERY = "(max-width: 640px)";

/**
 * ヒーロー動画。画面幅で横型／縦型を出し分け、複数本ある場合は順番に再生する。
 *
 * 出し分けは CSS ではなく JS で行っている。CSS で2本並べて display で切り替えると
 * 両方がダウンロードされてしまうため、実際に使う方だけを <video> に渡す。
 */
export default function HeroVideos({
  sources = ["/hero/1.mp4", "/hero/2.mp4"],
  mobileSources = ["/hero/s1.mp4"],
}: {
  sources?: string[];
  mobileSources?: string[];
}) {
  // サーバー側では画面幅が分からない。null の間は動画を描画せず、
  // マウント後に確定させることで hydration の不一致を避ける。
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [index, setIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const apply = () => setIsMobile(mql.matches);
    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  // 画面回転などで出し分けが切り替わったら先頭から再生し直す
  useEffect(() => {
    setIndex(0);
  }, [isMobile]);

  const list = isMobile ? mobileSources : sources;

  // src を差し替えたら明示的に読み込み直して再生する
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    // 自動再生がブロックされた場合は握りつぶす（ミュート済みなので通常は成功する）
    void video.play().catch(() => {});
  }, [index, isMobile]);

  if (isMobile === null || list.length === 0) {
    // 判定が付くまでは背景色のみ。レイアウトは親のaspect-ratioが保持する
    return <div style={{ width: "100%", height: "100%", background: "var(--color-surface)" }} />;
  }

  return (
    <video
      ref={videoRef}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      src={list[index]}
      autoPlay
      muted
      playsInline
      // 1本しかないときはブラウザ側でループさせる（読み込み直しによる瞬断を避けるため）
      loop={list.length === 1}
      onEnded={
        list.length > 1
          ? () => setIndex((current) => (current + 1) % list.length)
          : undefined
      }
    />
  );
}
