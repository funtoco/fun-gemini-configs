# Interview Prep: Persol Cross Technology (2026-04-07)

## Purpose
- Keep one synced source of truth for the interview on any device.
- Use this note as the base, then optionally paste the prompt section into ChatGPT for polishing.

## Recommended Workflow
- Main source of truth: this note.
- Best use of ChatGPT: polishing wording, roleplay, and pronunciation support.
- Best use of Codex/local context: syncing the story with actual work done in local repos.

## Company Fit Summary
- Target company: パーソルクロステクノロジー株式会社
- Interview focus for tomorrow: practical engineer image, not low-code operator image.
- Company angle to match:
  - 幅広い案件・技術領域
  - チーム開発
  - 設計・品質
  - キャリア形成と学習支援
  - IT/DXから開発・運用までの広さ

## Synced Background From Local Repos
- Main strengths confirmed from recent local work:
  - Kintone-centered business system improvement
  - Node.js / TypeScript implementation for automation and batch processing
  - Billing and AR workflow fixes, dedupe logic, sync key correction, task transition recovery
  - Visa and periodic-report workflow recovery, export mapping fixes, WOID/HRID handling
  - Next.js internal web app improvements, searchable filter UI, document handling, usability fixes
  - Requirement整理 -> design -> implementation -> verification -> operations improvement
- Positioning to use in interview:
  - 「業務課題を整理して、仕組みで再現性ある運用に変えるエンジニア」

## Core Message
- Do not present yourself as:
  - kintone設定が中心の人
  - AIに書かせるだけの人
- Present yourself as:
  - 現場の課題を整理できる
  - データ設計・API連携・実装までやる
  - 運用で回る仕組みまで落とし込める
  - 次は体系的なチーム開発環境で設計・品質を伸ばしたい

## Safe Talking Points
- Use numbers only when you can defend them.
- Safe success metric:
  - 数日単位で確認・調査していた業務を、1〜2時間程度まで短縮した
- Safe coding statement:
  - 業務要件が明確なものについては、API連携、バッチ処理、運用改善向けの実装を0から対応してきた
- Safe AI statement:
  - AIは生産性向上のために活用するが、要件整理、設計判断、レビュー、テスト、デバッグ、品質担保は自分で行う

## Interview Answers

### 1. 自己紹介
JP:
はじめまして。ムハンマド・ラフィ・ウィンダルトと申します。  
現職では、業務改善を軸に、要件整理、データ設計、API連携、実装、運用改善まで一気通貫で担当してきました。  
特に、手作業が多くミスが起こりやすい業務を、仕組み化と自動化によって再現性のある運用に変えていくことが強みです。  
最近は、業務システムの改善に加えて、Node.jsやTypeScriptでのバッチ処理や連携機能の実装、社内向けWebアプリの改善にも取り組んでいます。  
本日はよろしくお願いいたします。

Romaji:
Hajimemashite. Muhammad Raffi Windarto to moushimasu.  
Genshoku de wa, gyoumu kaizen o jiku ni, youken seiri, deeta sekkei, API renkei, jissou, unyou kaizen made ikkitsuukan de tantou shite kimashita.  
Tokuni, te-sagyou ga ooku misu ga okori yasui gyoumu o, shikumika to jidouka ni yotte saigensei no aru unyou ni kaete iku koto ga tsuyomi desu.  
Saikin wa, gyoumu shisutemu no kaizen ni kuwaete, Node.js ya TypeScript de no batchi shori ya renkei kinou no jissou, shanai muke Web apuri no kaizen ni mo torikundeimasu.  
Honjitsu yoroshiku onegai itashimasu.

### 2. 転職理由
JP:
転職理由は、これまでの業務改善や連携開発の経験を活かしながら、より体系的な環境で設計・品質・チーム開発の力を高めたいと考えたためです。  
現職では、課題整理から実装、運用改善まで幅広く担当できた一方で、並行対応も多く、技術を計画的に積み上げる難しさも感じていました。  
今後は、より開発プロセスが整った環境で専門性を高め、安定して価値を出せるエンジニアになりたいと考えています。

Romaji:
Tenshoku riyuu wa, kore made no gyoumu kaizen ya renkei kaihatsu no keiken o ikashi nagara, yori taikeiteki na kankyou de sekkei, hinshitsu, chiimu kaihatsu no chikara o takametai to kangaeta tame desu.  
Genshoku de wa, kadai seiri kara jissou, unyou kaizen made habahiroku tantou dekita ippou de, heikou taiou mo ooku, gijutsu o keikakuteki ni tsumiageru muzukashisa mo kanjiteimashita.  
Kongo wa, yori kaihatsu purosesu ga totonotta kankyou de senmonsei o takame, antei shite kachi o daseru enjinia ni naritai to kangaeteimasu.

### 3. 志望動機
JP:
御社を志望する理由は、幅広い技術領域や案件があり、志向に沿ったキャリア形成や成長支援の環境が整っている点に魅力を感じたためです。  
私はこれまで、業務改善の現場で、課題整理からデータ設計、API連携、実装、運用改善まで一気通貫で担当してきました。  
今後はその経験をベースに、より体系的なチーム開発の中で、設計や品質面も強化しながら継続的に価値を出したいと考えています。  
御社であれば、経験の幅を広げながら専門性も深めていけると感じ、志望しました。

Romaji:
Onsha o shibou suru riyuu wa, habahiroi gijutsu ryouiki ya anken ga ari, shikou ni sotta kyaria keisei ya seichou shien no kankyou ga totonotte iru ten ni miryoku o kanjita tame desu.  
Watashi wa kore made, gyoumu kaizen no genba de, kadai seiri kara deeta sekkei, API renkei, jissou, unyou kaizen made ikkitsuukan de tantou shite kimashita.  
Kongo wa sono keiken o beesu ni, yori taikeiteki na chiimu kaihatsu no naka de, sekkei ya hinshitsu men mo kyouka shinagara keizokuteki ni kachi o dashitai to kangaeteimasu.  
Onsha de areba, keiken no haba o hiroge nagara senmonsei mo fukamete ikeru to kanji, shibou shimashita.

### 4. 成功体験
JP:
私の強みは、業務課題を整理し、仕組みで解決することです。  
請求関連の業務では、以前は手作業や確認作業が多く、調査にも時間がかかっていました。  
そこで、情報の持ち方や処理の流れを見直し、データ連携や自動処理を組み合わせて、確認しやすく再現性のある運用に改善しました。  
結果として、数日単位かかっていた確認や調査が1〜2時間程度まで短縮され、ミスの防止にもつながりました。

Romaji:
Watashi no tsuyomi wa, gyoumu kadai o seiri shi, shikumi de kaiketsu suru koto desu.  
Seikyuu kanren no gyoumu de wa, izen wa te-sagyou ya kakunin sagyou ga ooku, chousa ni mo jikan ga kakatteimashita.  
Soko de, jouhou no mochikata ya shori no nagare o minaoshi, deeta renkei ya jidou shori o kumiawasete, kakunin shi yasuku saigensei no aru unyou ni kaizen shimashita.  
Kekka to shite, suujitsu tan'i kakatte ita kakunin ya chousa ga ichi-ni jikan teido made tanshuku sare, misu no boushi ni mo tsunagarimashita.

### 5. 「1からコーディングできますか？」
JP:
はい。業務要件が明確なものについては、API連携、バッチ処理、運用改善向けの機能などを0から実装してきました。  
一方で、実務では一から全てを作ることだけでなく、既存の仕組みを理解した上で安全に改善することも重要だと考えています。  
AIも活用しますが、最終的な設計判断や品質担保は自分で行っています。

Romaji:
Hai. Gyoumu youken ga meikaku na mono ni tsuite wa, API renkei, batchi shori, unyou kaizen muke no kinou nado o zero kara jissou shite kimashita.  
Ippou de, jitsumu de wa ichi kara subete o tsukuru koto dake de naku, kizon no shikumi o rikai shita ue de anzen ni kaizen suru koto mo juuyou da to kangaeteimasu.  
AI mo katsuyou shimasu ga, saishuuteki na sekkei handan ya hinshitsu tanpo wa jibun de okonatteimasu.

### 6. 逆質問
- 配属や案件選定では、本人の志向や今後伸ばしたい技術領域はどの程度考慮されますか。
- 入社後に、設計力や品質面を伸ばすための研修やOJTはどのように行われていますか。
- チームで参画する案件では、入社後にまず期待される役割はどのようなものが多いですか。

## Prompt To Paste Into ChatGPT
```text
以下の内容をもとに、明日のパーソルクロステクノロジー株式会社の面接向けに、自然で話しやすい日本語の回答をブラッシュアップしてください。

前提:
- 私は業務改善を軸に、要件整理、データ設計、API連携、実装、運用改善まで一気通貫で担当してきたエンジニアです。
- kintone中心の業務もありますが、単なる設定担当ではなく、Node.js / TypeScriptでのバッチ処理、業務自動化、連携機能、ワークフロー改善、社内向けWebアプリ改善も行っています。
- 私の強みは「業務課題を整理して、仕組みで再現性ある運用に変えること」です。
- 転職理由は、これまでの経験を活かしつつ、より体系的な環境で設計・品質・チーム開発の力を伸ばしたいからです。
- 志望動機では、パーソルクロステクノロジーの幅広い案件、技術領域、キャリア形成支援、チーム開発環境と自分の志向をつなげてください。
- AIは活用しますが、要件整理、設計判断、レビュー、テスト、デバッグ、品質担保は自分で行う前提です。
- 話し方は、誇張しすぎず、実務寄りで、落ち着いた印象にしてください。

作成してほしいもの:
1. 自己紹介（45〜60秒）
2. 転職理由（45秒）
3. 志望動機（60秒）
4. 成功体験（90秒）
5. 「1からコーディングできますか？」への回答（20〜30秒）
6. 逆質問 3つ

条件:
- JPとromajiを両方出してください。
- 面接でそのまま読める自然な表現にしてください。
- buzzwordは多すぎないようにしてください。
- 数字は言い切りすぎず、安全な表現にしてください。
```

## Decision
- For tomorrow's interview, it is fine to keep using Codex here as the main source.
- If you want ChatGPT support too, use this note as the single base and paste only the prompt block above.
