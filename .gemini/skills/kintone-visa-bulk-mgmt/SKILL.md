---
name: kintone-visa-bulk-mgmt
description: Bulk management for Kintone Visa App (App 50). Use for batch status transitions, deadline updates, and record corrections for Visa application records.
---

# Kintone Visa Bulk Management (App 50)

This skill provides workflows and scripts for performing bulk operations on the Kintone Visa Management application (App 50).

## Application Context
- **App ID:** 50
- **App Name:** Visa Management (就労管理/ビザ管理)
- **Environment Credentials:** Typically in `fun-kintone-alert/.env`

## Workflows

### 1. Bulk Status Transition
For 'Visa Update' (更新申請) records, sometimes they are moved to the wrong status (e.g., `既存_企業情報待ち` or `OP_企業書類作成中`). Use this workflow to move them to the correct status `支援_更新案内・人材情報更新待ち`.

**Action required:**
- Filter records (e.g., by creation date or type).
- Execute the transition using the action name: `支援_更新案内・人材情報更新待ちへ`.

### 2. Bulk Deadline Update
Update the `ステータス期限` (DATETIME field) for multiple records.
- Standard practice is to set it to 11:00 AM JST on a business day.

## Bundled Resources

### Scripts
- `scripts/bulk_update.js`: A generic script to update records or status in App 50.

## References
- See `fun-kintone-customize-visa-manegent/src/index.ts` for status transition logic and timeline mappings.
