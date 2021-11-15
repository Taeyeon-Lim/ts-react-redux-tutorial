# TS - REACT - REDUX 튜토리얼

```javascript
    // 1. react-ts 설치
    npx create-react-app --template typescript
    // 2. redux 설치
    yarn add redux react-redux
    // 3. node-module 폴더에서 설치한 모듈들이 ts를 지원하는 지 확인
    // [redux] 폴더 내에 "index.d.ts" 파일이 존재 === 지원 O
    // [react-redux] 폴더 내에 파일 없음 === 지원 X
    // react-redux에 타입스크립트 지원받기 ( 서드파티 )
    yarn add @types/react-redux
```

- ts 지원 여부 확인 (서드파티)
  <a href='https://www.typescriptlang.org/dt/search?search=react-redux'>TypeSearch</a>

## 타입스크립트에서 리덕스 사용 유의점

- 'Action' **_as const_** 붙이기! (타입스크립트의 추론 범위를 좁혀줌)
- ReturnType<typeof 'Action'>에서 Action에 대한 타입 유추 가능해짐 (ReturnType: typescript 유틸)

## 프로젝트를 reduxToolkit으로 변환

- 카운터 예제 변환 완료
- 투두리스트 예제 변환 완료
