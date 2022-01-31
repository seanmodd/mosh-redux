## Snippets To Remember
**[x]: *rsc* - React Stateless Component**
```
import React from 'react';

const BugsList = () => {
  return (
    <div>
      
    </div>
  );
};

export default BugsList;
```
**[x]: *rsf* - React Stateless Function**
```
import React from 'react';

function BugsList(props) {
  return (
    <div>
      
    </div>
  );
}

export default BugsList;
```
**[x]: *rxaction* - Redux Action**
```
export const first = (payload) => ({
  type: second,
  payload,
});
```
**[x]: *rxconst* - Redux Constant**
```
export const first = 'first';
```
**[x]: *rxreducer* - Redux Reducer**
```
const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case first:
      return { ...state, ...payload };

    default:
      return state;
  }
};
```
**[x]: *rxselect* - Redux Select**
```
import { createSelector } from 'reselect';

export const first = (state) => state.second;
```
**[x]: *rxslice* - Redux Slice**
```
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const BugsList = createSlice({
  name: second,
  initialState,
  reducers: {},
});

export const {} = BugsList.actions;

export default BugsList.reducer;
```






![Stargazers](https://img.shields.io/github/stars/miami78/nextjs-starter-pack?style=for-the-badge)
![Forks](https://img.shields.io/github/forks/miami78/nextjs-starter-pack?label=FORKS&style=for-the-badge)
![License](https://img.shields.io/github/license/miami78/nextjs-starter-pack?color=green&label=LICENSE&style=for-the-badge)
![Issues](https://img.shields.io/github/issues/miami78/nextjs-starter-pack?color=yellow&label=ISSUES&style=for-the-badge)


A JavaScript starter for Next.js that includes all you need to build your next 🦄 project.

## Technologies Used

- [Nextjs](https://nextjs.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/#/)
- [GitHub workflows](https://docs.github.com/en/actions/learn-github-actions)

Also includes:

- [Absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases)
- [AirBnB Style Guides for React](https://github.com/airbnb/javascript/tree/master/react)

# Getting started

```
1. git clone https://github.com/miami78/nextjs-starter-pack.git

2. cd nextjs-starter-pack

3. yarn && yarn dev or npm install && npm run dev if you prefer not to use yarn.

```

# Usage

### Development server

```bash
yarn start / npm start
```

You can view the development server at `localhost:3000`.

### Production build

```bash
 yarn build / npm run build
```

## Contributing

1. Fork this repository;
2. Create your branch: ``git checkout -b my-new-feature``
3. Commit your changes: ``git commit -m 'Add some feature'``
4. Push to the branch: ``git push origin my-new-feature``


Made by [Larry Miami](https://github.com/miami78)
