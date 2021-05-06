```bash
npx -p @storybook/cli@5.2.3 sb init --type react

yarn add react react-dom

"@storybook/addon-actions": "^5.2.3",
"@storybook/addon-links": "^5.2.3",
"@storybook/addons": "^5.2.3",
"@storybook/react": "^5.2.3",

yarn add -D @storybook/addon-knobs@5.2.3
yarn add -D @storybook/addon-docs@5.2.3

import "@storybook/addon-docs/register";
# addons.js에 추가 후 presets 설정하면,
# story book에서 Docs tab 생성 하지만 yarn storybook 할 때 에러 발생 ( 동작은 함 )
# TypeError: Invalid attempt to spread non-iterable instance
# 결국, Docs tab은 생성하지만 데이터를 읽어오질 못함....

# 포기...
# addon-docs의 preset을 못읽어서 인지 주석을 비롯한 mdx 적용 안됨
# typescript 적용할 때에도,
# .storybook/webpack.config.js 설정 후, .storybook/presets.js의 내용을 지워버리면 동작 안함
# 하지만 .storybook/presets.js 자체를 지우면 동작함

# 버전을 어떻게 맞춰야할지 모르겠음
# test할때 사용한 v5.2.3 에서 react, react-dom의 peerDependency인 16.8.0로 설치,
# 그 외 babel 관련 library나 typescript는 최신버전 ( 2021.05.03. 기준 ) 으로 진행

# 개발자에 의하면 @storybook/* 의 모든 버전은 통일해야만하고,
# 5.2.x 에서는 presets.js에서 각각의 프레임워크 ( react, vue, angular ... )을 지정해 줬지만,
# 5.3.x 부터는 `@storybook/addon-docs/preset` 으로 변함
# 6.x.x 부터는 해당 preset 자체가 쓰이지 않음
```
