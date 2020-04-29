# Ex Oblivione

**Wraith: The Oblivion** character generator

Based on the 20th anniversary edition.

Some terms are copyrighted by or registered trademarks of White Wolf Entertainment. This tool is unofficial, and the author is not affiliated with the companies mentioned here.

The name is taken from a poem by H. P. Lovecraft.

This builds heavily on [Embracer](https://github.com/TrueWill/embracer), another project of mine.

## Contributing

### Standards

- TypeScript strict option
- [Strict Mode](https://reactjs.org/docs/strict-mode.html) (except for react-select)
- Use function components over class components (OK to use [Hooks](https://reactjs.org/docs/hooks-intro.html))
- [CSS Modules](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet)
- [Bootstrap](https://getbootstrap.com/) v4
- [Prettier](https://prettier.io/) 2 with single quotes
- No ESLint warnings/errors
- No console warnings/errors
- Works in modern browsers
- All tests pass

I'm using [React Testing Library](https://github.com/testing-library/react-testing-library) for tests, but frequently dropping to the [DOM API](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) to test components. If anyone has suggestions on accessibility for an app of this complexity (preferably preserving the look and feel), please share.

## Acknowledgements

Built with React, Redux, and [Redux Toolkit](https://redux-toolkit.js.org/) - thanks so much to Facebook, Dan Abramov, Mark Erikson, and all contributors!

Built with TypeScript - thanks to Microsoft, Anders Hejlsberg, and the community!

Thanks to [Cory House](https://www.reactjsconsulting.com/) for pointing me to [react-typescript-cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet), and to [@swyx](https://twitter.com/swyx) and other contributors for those cheatsheets!

Thanks to [jcalz](https://stackoverflow.com/users/2887218/jcalz) for answering a tricky TypeScript question!

Uses [Font Awesome](https://fontawesome.com/) by Dave Gandy (v4, **not** v5).
