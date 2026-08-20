import { z } from "zod";

/**
 * 無料体験申込フォームのバリデーション。企画書③の技術ポイント「フォームは離脱率計測を
 * 意識した最小フィールド設計（名前・電話・希望日時のみ）」に対応する。
 */
export const finalCtaSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "お名前を入力してください")
    .max(60, "60文字以内で入力してください"),
  phone: z
    .string()
    .trim()
    .min(1, "電話番号を入力してください")
    .max(20, "20文字以内で入力してください")
    .regex(/^[0-9-]*$/, "数字とハイフンのみ入力してください"),
  preferredTime: z
    .string()
    .trim()
    .min(1, "ご希望の日時を入力してください")
    .max(100, "100文字以内で入力してください"),
});

export type FinalCtaFormValues = z.infer<typeof finalCtaSchema>;
