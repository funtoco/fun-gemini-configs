---
name: supabase-expert
description: Supabaseのデータベース管理、マイグレーション、およびセキュリティプロトコルに関する専門知識を提供します。
---

# Supabase エキスパートスキル

このスキルは、Supabaseの安全な運用と効率的な開発ワークフローをガイドします。

## 1. コマンド実行の安全基準
以下の操作は、データの損失を防ぐために厳格に管理します：
- **禁止操作**: `supabase db reset --linked` (リモート環境のリセット) は原則禁止。
- **要確認**: `supabase db reset` (ローカル)、`DROP TABLE`、`TRUNCATE` は実行前に必ずユーザーの再確認を得ること。
- **推奨**: 破壊的な変更の前に、まず `supabase db diff` で差分を確認し、影響を評価すること。

## 2. マイグレーションのワークフロー
1. **現状確認**: `supabase migration list` で適用済みのマイグレーションを確認。
2. **差分生成**: ローカルの変更を `supabase db diff -f <name>` でファイルに書き出す。
3. **検証**: 生成されたSQLの内容が意図通りか、既存データに影響しないかを確認。
4. **適用**: `supabase db push` でリモート環境に反映。

## 3. デバッグとデータ確認
データベースに問題が発生した場合は、以下の順序で対応を提案してください：
1. **SQL確認**: `SELECT` 文を使用して、RLSポリシーや実データを確認。
2. **ログ調査**: Supabase Dashboardのログまたはエッジ関数のログを確認。
3. **マイグレーション不整合の解消**: `migration list` で `reverted` や `missing` がないか確認。

## 4. RLS (Row Level Security) の推奨
- すべてのテーブルに対して RLS を有効にすることを推奨します。
- `anon` や `authenticated` ロールに対して、最小権限の原則（Principle of Least Privilege）に基づいたポリシーを策定してください。
