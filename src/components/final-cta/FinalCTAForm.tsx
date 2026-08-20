"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { finalCtaSchema, type FinalCtaFormValues } from "@/lib/final-cta/schema";

const inputClass =
  "w-full rounded border border-iron-600 bg-iron-800 px-4 py-2.5 font-sans-jp text-sm text-white-clean placeholder:text-white-dim focus:border-flame focus:outline-none";

const labelClass = "font-sans-jp mb-2 block text-xs text-white-dim";

/**
 * 無料体験申込フォーム。氏名・電話番号・希望日時のみの最小フィールド構成
 * （企画書③の技術ポイント）。実際のAPIには送信せず、クライアント側で送信を模擬して
 * デモ申込であることを明示する。
 */
export default function FinalCTAForm() {
  const [submitted, setSubmitted] = useState<FinalCtaFormValues | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FinalCtaFormValues>({
    resolver: zodResolver(finalCtaSchema),
    defaultValues: { name: "", phone: "", preferredTime: "" },
  });

  async function onSubmit(values: FinalCtaFormValues) {
    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitting(false);
    setSubmitted(values);
  }

  if (submitted) {
    return (
      <div className="mx-auto mt-12 max-w-md rounded border border-iron-600 bg-iron-800 p-8 text-center">
        <p className="font-anton text-sm tracking-[0.3em] text-flame uppercase">Booked</p>
        <h3 className="font-mplus mt-4 text-xl text-white-clean">
          お申し込みありがとうございます、{submitted.name}様。
        </h3>
        <p className="font-sans-jp mt-4 text-sm leading-relaxed text-white-dim">
          {submitted.preferredTime}のご希望をお預かりしました。折り返しご連絡いたします（{submitted.phone}）。
        </p>
        <p className="font-sans-jp mt-6 text-xs leading-relaxed text-white-dim">
          ※これはSakuyaLabsのポートフォリオ用Concept Projectのデモ申込です。実際の予約は確定しておらず、
          ご入力内容の保存・連絡は行われません。実際のFORGEというジムは存在しません。
        </p>
        <button
          type="button"
          onClick={() => {
            reset();
            setSubmitted(null);
          }}
          className="font-sans-jp mt-8 inline-flex items-center gap-2 text-sm text-white-clean transition-colors duration-300 hover:text-flame"
        >
          別の内容で試す
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mx-auto mt-12 max-w-md space-y-5 rounded border border-iron-600 bg-iron-800 p-8"
    >
      <div>
        <label htmlFor="name" className={labelClass}>
          お名前 <span className="text-flame">必須</span>
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          className={inputClass}
          placeholder="山田 太郎"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
        {errors.name ? (
          <p id="name-error" role="alert" className="mt-2 text-xs text-flame">
            {errors.name.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          電話番号 <span className="text-flame">必須</span>
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          className={inputClass}
          placeholder="090-1234-5678"
          aria-invalid={errors.phone ? "true" : "false"}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          {...register("phone")}
        />
        {errors.phone ? (
          <p id="phone-error" role="alert" className="mt-2 text-xs text-flame">
            {errors.phone.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="preferredTime" className={labelClass}>
          ご希望の日時 <span className="text-flame">必須</span>
        </label>
        <input
          id="preferredTime"
          type="text"
          className={inputClass}
          placeholder="例：平日夜、土日午前など"
          aria-invalid={errors.preferredTime ? "true" : "false"}
          aria-describedby={errors.preferredTime ? "preferredTime-error" : undefined}
          {...register("preferredTime")}
        />
        {errors.preferredTime ? (
          <p id="preferredTime-error" role="alert" className="mt-2 text-xs text-flame">
            {errors.preferredTime.message}
          </p>
        ) : null}
      </div>

      <p className="font-sans-jp text-xs leading-relaxed text-white-dim">
        ※これはSakuyaLabsのポートフォリオ用デモ申込フォームです。実際の予約は確定せず、送信内容は保存・利用されません。
      </p>

      <button
        type="submit"
        disabled={submitting}
        className="font-sans-jp w-full rounded bg-flame px-6 py-3.5 text-sm font-bold text-iron transition-colors duration-200 hover:bg-flame-soft disabled:cursor-not-allowed disabled:opacity-50"
      >
        {submitting ? "送信中…" : "無料体験に申し込む（デモ）"}
      </button>
    </form>
  );
}
