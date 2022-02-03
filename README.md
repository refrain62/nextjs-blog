# create-nextjs-app の写経

https://nextjs.org/learn/basics/create-nextjs-app

This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## 必要なライブラリの追加

```
yarn add classnames
yarn add tailwindcss postcss-preset-env postcss-flexbugs-fixes
yarn add sass
yarn add gray-matter
yarn add remark remark-html
yarn add date-fns
```

TypeScript を使用する場合

```
yarn add --dev typescript @types/react @types/node
```

ESLit の追加

```
yarn add -D eslint
yarn add -D eslint-config-next
```

ESLint によるコード整形するコマンドは、以下のようになります。

```
//
package.json
    "script": {
        ...
        "lint": "next lint --dir src",
        // 追記
        // src --ext .js,jsx,.ts,.ts: src ディレクトリ内の js, jsx, ts, tsx ファイルを対象
        // --fix: コード整形
        "lint:fix": "eslint --ext .js,jsx,.ts,.tsx --fix"
    },
```

```
// .eslintrc
{
  "extends": ["next", "next/core-web-vitals"],
  // 追記
  "rules": {
    // セミコロンない場合、エラー出力
    "semi": ["error", "always"]
  }
}
```

チェックと修正

```
yarn lint:fix
```

Pretteier の設定追加

```
yarn add -D prettier
yarn add -D prettier eslint-config-prettier
```

任意でフォーマット

```
yarn format
```

## 実行

```
yarn dev
```

or

```
npm run dev
```

## ダイナミックルートのページ表示

・ http://localhost:3000/posts/ssg-ssr  
・ http://localhost:3000/posts/pre-rendering

## API 実装

・ http://localhost:3000/api/hello
