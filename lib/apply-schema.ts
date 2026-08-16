import { z } from "zod";

// お申し込みフォームの選択肢。フォームUIとサーバー側バリデーションで共有する。
export const PLAN_OPTIONS = [
  "Ordinary",
  "My Year",
  "Event",
  "Gift",
  "★キャンペーン「ときつうしんみた！」",
] as const;

export const LOCATION_OPTIONS = [
  "東京都",
  "愛媛県（松山市）",
  "愛媛県（松山市以外）",
] as const;

export const applySchema = z.object({
  name: z.string().trim().min(1, "お名前をご入力ください").max(100),
  email: z
    .string()
    .trim()
    .min(1, "メールアドレスをご入力ください")
    .email("メールアドレスの形式をご確認ください")
    .max(200),
  phone: z.string().trim().max(30).optional().default(""),
  plan: z.enum(PLAN_OPTIONS, { errorMap: () => ({ message: "プランをお選びください" }) }),
  location: z.enum(LOCATION_OPTIONS, {
    errorMap: () => ({ message: "撮影をご希望の場所をお選びください" }),
  }),
  specificLocation: z.string().trim().max(200).optional().default(""),
  desiredDate: z.string().trim().min(1, "撮影をご希望のお日にちをご入力ください").max(200),
  meetingAvailability: z
    .string()
    .trim()
    .min(1, "お打合せのご都合をご入力ください")
    .max(1000),
  notes: z.string().trim().max(2000).optional().default(""),
});

export type ApplyInput = z.infer<typeof applySchema>;

/** 受信メールの本文。プロトタイプの mailto: 本文と同じ並び順を維持している。 */
export function buildMailBody(data: ApplyInput): string {
  return [
    `お名前: ${data.name}`,
    `メールアドレス: ${data.email}`,
    `電話番号: ${data.phone || "（未入力）"}`,
    "",
    `プラン: ${data.plan}`,
    "",
    `撮影ご希望の場所: ${data.location}`,
    `具体的な場所: ${data.specificLocation || "（未入力）"}`,
    "",
    `撮影ご希望日: ${data.desiredDate}`,
    `打ち合わせ可能日時: ${data.meetingAvailability}`,
    "",
    `ご要望・ご相談: ${data.notes || "（未入力）"}`,
  ].join("\n");
}

export function buildMailSubject(data: ApplyInput): string {
  return `【お申し込み】${data.name}様より`;
}
