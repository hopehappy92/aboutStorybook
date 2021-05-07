# 왜 안되는거지

- `rollup.config.js` - `rollup-plugin-postcss`는 이제 추천하지 않아서 `.storybook/main.js` - `@storybook/addon-postcss` 로 대체
  - `https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-default-postcss-plugins`
- `rollup -c`하면 `Button/index.tsx`의 `enum` 부분에서 token error 발생
- `sass-loader`는 v11에서 `this.getOptions()`와 관련된 에러 발생. v10으로 낮춰서 진행
  - `https://stackoverflow.com/questions/66082397/typeerror-this-getoptions-is-not-a-function`
- storybook은 뜨는데 `.scss`를 못읽음

## code reference

- https://ideveloper2.dev/blog/2020-05-17--rollup-ts-%EB%A1%9C-%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C-%EB%A7%8C%EB%93%A4%EA%B8%B0/
