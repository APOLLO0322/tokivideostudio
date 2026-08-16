"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LOCATION_OPTIONS,
  PLAN_OPTIONS,
  applySchema,
  type ApplyInput,
} from "@/lib/apply-schema";

type FormState = {
  name: string;
  email: string;
  phone: string;
  plan: string;
  location: string;
  specificLocation: string;
  desiredDate: string;
  meetingAvailability: string;
  notes: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  email: "",
  phone: "",
  plan: "",
  location: "",
  specificLocation: "",
  desiredDate: "",
  meetingAvailability: "",
  notes: "",
};

type FieldErrors = Partial<Record<keyof FormState, string[]>>;

export default function ApplyForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    // 入力し直した項目のエラーはその場で消す
    setFieldErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);

    // サーバーと同じスキーマでクライアント側も検証する
    const parsed = applySchema.safeParse(form);
    if (!parsed.success) {
      setFieldErrors(parsed.error.flatten().fieldErrors as FieldErrors);
      setFormError("未入力の項目があります。ご確認ください。");
      return;
    }

    setFieldErrors({});
    setStatus("submitting");

    try {
      const response = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data satisfies ApplyInput),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setFieldErrors((result.fieldErrors as FieldErrors) ?? {});
        setFormError(
          result.message ?? "送信に失敗しました。時間をおいて再度お試しください。"
        );
        setStatus("idle");
        return;
      }

      setStatus("sent");
    } catch {
      setFormError(
        "通信に失敗しました。電波状況をご確認のうえ、再度お試しください。"
      );
      setStatus("idle");
    }
  };

  return (
    <div
      className="classical"
      style={{ background: "var(--color-neutral-100)", minHeight: "100vh" }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "var(--space-4) var(--space-6)",
          borderBottom: "1px solid var(--color-divider)",
          maxWidth: 720,
          margin: "0 auto",
          background: "var(--color-bg)",
        }}
      >
        <Link
          href="/lp"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: 20,
            color: "var(--color-text)",
          }}
        >
          トキ映像製作所
        </Link>
      </header>

      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "var(--space-8) var(--space-6) calc(var(--space-8) * 2)",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 400,
            fontSize: 30,
            textAlign: "center",
            margin: "0 0 var(--space-2)",
          }}
        >
          お申し込み
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "var(--color-neutral-700)",
            fontSize: 14,
            margin: "0 0 var(--space-8)",
          }}
        >
          ご入力いただいた内容は担当スタッフ宛にメールで送信されます。
        </p>

        {status === "sent" ? (
          <SentPanel />
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="rc-card">
              <div className="rc-bar">お客様情報</div>
              <div
                className="rc-body"
                style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}
              >
                <Field label="お名前" required error={fieldErrors.name}>
                  <input
                    className={inputClass(fieldErrors.name)}
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="例）山田 太郎"
                    autoComplete="name"
                  />
                </Field>
                <Field label="メールアドレス" required error={fieldErrors.email}>
                  <input
                    className={inputClass(fieldErrors.email)}
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="例）example@mail.com"
                    autoComplete="email"
                  />
                </Field>
                <Field label="電話番号（任意）" error={fieldErrors.phone}>
                  <input
                    className={inputClass(fieldErrors.phone)}
                    type="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="例）090-0000-0000"
                    autoComplete="tel"
                  />
                </Field>
              </div>
            </div>

            <div className="rc-card">
              <div className="rc-bar">ご予約の詳細をお伺いします</div>
              <div
                className="rc-body"
                style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}
              >
                <Field label="プランをお選びください" required error={fieldErrors.plan}>
                  <div
                    role="radiogroup"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "var(--space-2)",
                      marginTop: "var(--space-2)",
                    }}
                  >
                    {PLAN_OPTIONS.map((opt) => (
                      <label className="radio" key={opt}>
                        <input
                          type="radio"
                          name="plan"
                          checked={form.plan === opt}
                          onChange={() => set("plan", opt)}
                        />
                        <span className="dot" />
                        {opt}
                      </label>
                    ))}
                  </div>
                </Field>
              </div>
            </div>

            <div className="rc-card">
              <div className="rc-bar">撮影場所</div>
              <div
                className="rc-body"
                style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}
              >
                <Field
                  label="撮影をご希望の場所をお選びください"
                  required
                  error={fieldErrors.location}
                >
                  <div
                    role="radiogroup"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "var(--space-2)",
                      marginTop: "var(--space-2)",
                    }}
                  >
                    {LOCATION_OPTIONS.map((opt) => (
                      <label className="radio" key={opt}>
                        <input
                          type="radio"
                          name="location"
                          checked={form.location === opt}
                          onChange={() => set("location", opt)}
                        />
                        <span className="dot" />
                        {opt}
                      </label>
                    ))}
                  </div>
                </Field>
                <Field
                  label="具体的な撮影ご希望の場所がお決まりの場合はご記入ください"
                  error={fieldErrors.specificLocation}
                >
                  <input
                    className={inputClass(fieldErrors.specificLocation)}
                    value={form.specificLocation}
                    onChange={(e) => set("specificLocation", e.target.value)}
                    placeholder="回答を入力"
                  />
                </Field>
              </div>
            </div>

            <div className="rc-card">
              <div className="rc-bar">日程</div>
              <div
                className="rc-body"
                style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}
              >
                <Field
                  label="撮影をご希望のお日にちをご記入ください"
                  required
                  hint="（〇月〇日、〇月頃、等）"
                  error={fieldErrors.desiredDate}
                >
                  <input
                    className={inputClass(fieldErrors.desiredDate)}
                    value={form.desiredDate}
                    onChange={(e) => set("desiredDate", e.target.value)}
                    placeholder="回答を入力"
                  />
                </Field>
                <Field
                  label="撮影前に一度お打合せをさせていただきます。ご希望のお日にちやご都合のよい曜日、お時間帯をご記入ください"
                  required
                  error={fieldErrors.meetingAvailability}
                >
                  <textarea
                    className={inputClass(fieldErrors.meetingAvailability)}
                    rows={3}
                    value={form.meetingAvailability}
                    onChange={(e) => set("meetingAvailability", e.target.value)}
                    placeholder="回答を入力"
                  />
                </Field>
              </div>
            </div>

            <div className="rc-card">
              <div className="rc-bar">その他</div>
              <div className="rc-body">
                <Field
                  label="ご要望やご相談があればご自由にご記入ください"
                  error={fieldErrors.notes}
                >
                  <textarea
                    className={inputClass(fieldErrors.notes)}
                    rows={4}
                    value={form.notes}
                    onChange={(e) => set("notes", e.target.value)}
                    placeholder="回答を入力"
                  />
                </Field>
              </div>
            </div>

            {formError && (
              <p
                role="alert"
                style={{
                  color: "#b3261e",
                  fontSize: 13,
                  textAlign: "center",
                  margin: "0 0 var(--space-2)",
                }}
              >
                {formError}
              </p>
            )}

            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "送信中…" : "この内容で送信する"}
            </button>
            <p
              style={{
                textAlign: "center",
                fontSize: 12,
                color: "var(--color-neutral-500)",
                marginTop: "var(--space-3)",
              }}
            >
              送信内容は担当スタッフ宛にメールで届きます。折り返しご連絡いたします。
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

function inputClass(error?: string[]) {
  return error?.length ? "input input-error" : "input";
}

function Field({
  label,
  required = false,
  hint,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="field">
      <label>
        {label}
        {required && <span className="rc-required">*</span>}
        {hint && (
          <>
            <br />
            <span style={{ fontWeight: 400, fontSize: 13, color: "var(--color-neutral-500)" }}>
              {hint}
            </span>
          </>
        )}
      </label>
      {children}
      {error?.length ? <p className="rc-error">{error[0]}</p> : null}
    </div>
  );
}

function SentPanel() {
  return (
    <div className="rc-card">
      <div className="rc-bar">送信が完了しました</div>
      <div className="rc-body" style={{ textAlign: "center" }}>
        <p style={{ fontSize: 14, lineHeight: 1.9, color: "var(--color-neutral-700)" }}>
          お申し込みありがとうございます。
          <br />
          担当スタッフより折り返しご連絡いたしますので、少々お待ちください。
        </p>
        <Link href="/lp" className="btn btn-secondary" style={{ marginTop: "var(--space-3)" }}>
          トップへ戻る
        </Link>
      </div>
    </div>
  );
}
