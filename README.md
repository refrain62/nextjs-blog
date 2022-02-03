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

## Jest コンパイラを Babel から Rust に

以下の公式内容を参考に  
https://nextjs.org/docs/testing#setting-up-jest-with-the-rust-compiler

```
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

jest.config.js に設定追加

```
// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
```

## Storybook の導入

Storybook の追加

```
npx sb upgrade
npx sb init --builder webpack5
```

立ち上げる

```
yarn storybook
```

Storybook での Post CSS のエラーが発生するので
「Error: PostCSS plugin tailwindcss requires PostCSS 8.」
@storybook/addon-postcss を導入（Storybook で Post CSS を使用出来るようにする addon？）

```
npx sb init --builder webpack5
yarn add -D @storybook/addon-postcss
```

.storybook/main.js を編集

```
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // Add everything below here
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
}
```

再度 SStorybook を立ち上げる

```
yarn storybook
```
