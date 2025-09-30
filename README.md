# セットアップ

## 初回のみ: Google アカウントでログイン

```bash
clasp login
```

## GAS プロジェクトを作成（または既存プロジェクトにクローン）

```bash
clasp create --title "プロジェクト名" --type standalone

# または既存プロジェクトの場合
# clasp clone <scriptId>
```

## TypeScript をコンパイル

```bash
bun run build
```

## GAS に push

```bash
clasp push
```
