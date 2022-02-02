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

TypeScriptを使用する場合
```
yarn add --dev typescript @types/react @types/node
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

## API実装
・ http://localhost:3000/api/hello
