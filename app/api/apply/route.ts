import { NextResponse } from "next/server";
import {
  applySchema,
  buildMailBody,
  buildMailSubject,
  type ApplyInput,
} from "@/lib/apply-schema";

// メール送信は外部SaaS（Resend）のREST APIを直接叩く。SDKを足さずに済むうえ、
// 別サービスへ乗り換える場合もこの関数の中だけを差し替えれば良い。
const RESEND_ENDPOINT = "https://api.resend.com/emails";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "リクエストの形式が正しくありません。" },
      { status: 400 }
    );
  }

  const parsed = applySchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "入力内容をご確認ください。",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.APPLY_MAIL_TO;
  const from = process.env.APPLY_MAIL_FROM;

  if (!apiKey || !to || !from) {
    // 環境変数が未設定でもフォーム入力を失わないよう、サーバーログに残したうえで失敗を返す。
    console.error(
      "[apply] メール送信の環境変数が未設定です（RESEND_API_KEY / APPLY_MAIL_TO / APPLY_MAIL_FROM）。受信内容:\n" +
        buildMailBody(data)
    );
    return NextResponse.json(
      {
        ok: false,
        message:
          "現在フォームからの送信を受け付けられません。お手数ですがメールにてご連絡ください。",
      },
      { status: 500 }
    );
  }

  try {
    await sendMail({ apiKey, to, from, data });
  } catch (error) {
    console.error("[apply] メール送信に失敗しました:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "送信に失敗しました。時間をおいて再度お試しいただくか、メールにてご連絡ください。",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}

async function sendMail({
  apiKey,
  to,
  from,
  data,
}: {
  apiKey: string;
  to: string;
  from: string;
  data: ApplyInput;
}) {
  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      // カンマ区切りで複数の担当者に送れるようにしておく
      to: to.split(",").map((address) => address.trim()).filter(Boolean),
      // 担当者がそのまま返信できるよう、お客様のアドレスをReply-Toに入れる
      reply_to: data.email,
      subject: buildMailSubject(data),
      text: buildMailBody(data),
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Resend returned ${response.status}: ${await response.text().catch(() => "")}`
    );
  }
}
