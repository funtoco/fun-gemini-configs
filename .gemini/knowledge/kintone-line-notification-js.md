# Kintone JavaScriptカスタマイズによるLINE通知実装ガイド (案B)

## 概要
Kintoneのプロセス管理（ステータス更新）をトリガーに、LINE Messaging APIを使用して特定のグループやユーザーに通知を送信する実装手法です。外部サーバーを介さず、Kintoneの標準機能とJavaScriptカスタマイズのみで完結します。

## 実装のポイント

### 1. 通信方式
- **kintone.proxy()** を使用します。ブラウザから直接外部APIを叩くとCORSエラーが発生するため、Kintoneのサーバーサイドプロキシを経由させる必要があります。

### 2. 環境変数の管理 (Vite)
- トークンやIDなどの機密情報は `.env` ファイルに `VITE_LINE_CHANNEL_ACCESS_TOKEN` などの形式で保存します。
- TypeScriptを使用する場合、`src/vite-env.d.ts` で型定義を行うことでビルドエラーを回避できます。

### 3. イベントハンドラー
- ステータス更新時には `app.record.detail.process.proceed` イベントを使用します。
- 変更後のステータスは `event.nextStatus.value` で取得可能です。

### 4. セキュリティ
- プログラムに直接トークンを書き込むのではなく、Kintoneアプリ設定の「プロキシ設定」を利用することで、ヘッダー情報を隠蔽して安全に送信することが推奨されます。

## サンプルコード (line-notifier.ts)
```typescript
export async function sendLineNotification(message: string): Promise<void> {
  const accessToken = import.meta.env.VITE_LINE_CHANNEL_ACCESS_TOKEN;
  const targetId = import.meta.env.VITE_LINE_GROUP_ID;
  const url = 'https://api.line.me/v2/bot/message/push';

  const payload = {
    to: targetId,
    messages: [{ type: 'text', text: message }],
  };

  // @ts-ignore
  const [body, status] = await kintone.proxy(
    url, 'POST',
    { 'Content-Type': 'application/json', 'Authorization': \`Bearer ${accessToken}\` },
    payload
  );
}
```

## デプロイ手順
1. \`npm run build\` でJavaScriptを生成。
2. \`customize-manifest.json\` を作成（app, desktop, css, mobile のセクションが必要）。
3. \`npx kintone-customize-uploader\` でKintoneに自動アップロード。
