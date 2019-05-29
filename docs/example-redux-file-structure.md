# Redux domain
src/
  domains/
    auth/
      components/
        ├── SignIn.jsx
        ├── SignIn.test.js
      ├── actions.js
      ├── api.js
      ├── reducers.js
      ├── sagas.js
      ├── selectors.js
      ├── selectors.test.js
  redux/
    ├── sagas.js
    ├── reducers.js
    ├── configureStore.js
  ├── api.js
  ├── App.jsx

# Redux ducks
src/
  domains/
    auth/
      components/
        ├── SignIn.jsx
        ├── SignIn.test.js
      redux/
        ├── index.js # reducers and actions
        ├── sagas.js # sagas and api
        ├── selectors.js
        ├── selectors.test.js
  redux/
    ├── sagas.js
    ├── reducers.js
    ├── configureStore.js
  ├── api.js
  ├── App.jsx

# Redux domain.ts
src/
  domains/
    auth/
      components/
        ├── SignIn.tsx
        ├── SignIn.test.ts
      ├── actions.ts
      ├── api.ts
      ├── reducers.ts
      ├── sagas.ts
      ├── selectors.ts
      ├── selectors.test.ts
      ├── types.ts
  redux/
    ├── sagas.ts
    ├── reducers.ts
    ├── configureStore.ts
    ├── types.ts
  ├── api.ts
  ├── App.tsx
