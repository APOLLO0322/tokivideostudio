// app/apply/page.tsx — お申し込みフォーム（デザイン参照: お申し込み.dc.html）
import ApplyForm from "@/components/classical/ApplyForm";
import "@/styles/classical.css";

export const metadata = {
  title: "お申し込み | トキ映像製作所",
  description: "トキ映像製作所の撮影お申し込みフォームです。",
};

export default function ApplyPage() {
  return <ApplyForm />;
}
