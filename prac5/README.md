# 이것도 이상해

- dependency 정리가 제대로 안돼있음
- package.json에서 module 설정안하고 rollup.config.js에서 쓰려함. 그래서 output도 이상함. 서로 맞춰야함

  - `output: [{ file: pkg.module, format: "es" }]` <-> `"module": "dist/index.js",`
    - 이건 `dist`에 index.js 하나만 생김
  - `output: [{dir: "build", format: "esm", exports: "named", sourcemap: true}]`
    - 이렇게하면 `dist`에 `index.js`, `index.js.map`, `./types/components/index.d.ts` 생성
    - 이 방법은 `tsconfig.json`에서 `declarationDir` 경로 설정 해주어야함

- tslib은 왜자꾸 설치하란거지

## code reference

- https://hyperflow.dev/Frontend/Rollup-Typescript-Storybook-Design-System
