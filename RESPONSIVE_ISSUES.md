Responsive audit and remaining fixes

What I changed (quick):
- Global: added `box-sizing: border-box` and responsive media rules to `public/index.html`.
- `src/components/about/about.css`: made container wrap, switched `.a-card` to relative on small viewports and allowed auto height.
- `src/components/product/product.css`: switched product cards to flex-basis/min-width for graceful wrapping.
- `src/components/productList/productList.css`: added `gap` between items.
- `src/components/contact/contact.css`: ensured inputs/textareas use `box-sizing` and `max-width`.

Manual checks to perform (what I put as issues):

1. Hero / Intro animation and absolute positioned backgrounds
- Problem: `.i` and `.i-img` use `height:100vh` and absolute positioning. On small devices the animated content can overlap or push content off-screen.
- Suggestion: verify on small screens (<=360px) that titles remain visible and adjust `.i-left-wrapper` padding or reduce font-size in a new media query.

2. About section absolute positioning
- Problem: `.a-card` was positioned absolutely which caused overlap at some widths.
- Suggestion: confirm `.a-card` stacks correctly under 720px and that images keep aspect ratio. If overlap persists, further reduce `height` or remove absolute offsets.

3. Product tiles wrapping
- Problem: fixed percentage widths may produce very narrow cards on some widths.
- Suggestion: check grid wrapping at tablet widths (600–900px). If too narrow, increase `min-width` or change breakpoints to 2-column layout.

4. Long animations / transitions
- Problem: `.p-img` transition set to `10s` may be too long and cause layout shifts.
- Suggestion: consider `transition: transform 0.6s ease` instead of `all 10s ease` if motion is unintended.

5. Form layout and footer spacing
- Problem: big `height:100vh` sections (contact/about/intro) can cause hidden content when browser UI (mobile address bar) is present.
- Suggestion: prefer `min-height:100vh` and internal padding; test with mobile browser chrome shown/hidden.

6. Accessibility & focus
- Problem: check focus outlines and contrast for text over backgrounds (especially green `#59b256`).
- Suggestion: run Lighthouse accessibility audit or manually tab through inputs/links.

How you can verify locally

1. Start the dev server (if not running):

```bash
npm install
npm start
```

2. Open http://localhost:3000 and test these viewports in your browser DevTools: 360x640, 375x667, 412x915 (mobile), 768x1024 (tablet), 1366x768 (desktop).

3. If you want automated captures, run the Playwright script I shared earlier (requires network to install Playwright). Save screenshots in `tools/screenshots/` and attach them here.

Next steps I can take for you

- Run more conservative fixes (reduce animation lengths, change some 100vh to min-height) and push commits.
- Create a branch with the responsive changes and open a PR (I can commit now if you want).
- Help you run Playwright locally and analyze screenshots you provide.

ESLint/Prettier + Husky setup
- Files added: `.eslintrc.json`, `.prettierrc`, `.prettierignore`, `.husky/pre-commit`.
- `package.json` updated with `lint`, `format`, `prepare` scripts and `lint-staged` config.

To finish setup locally (run these once):

```bash
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier husky lint-staged
npm run prepare
npx husky add .husky/pre-commit "npx --no-install lint-staged"
```

Then test linting and formatting:

```bash
npm run lint
npm run format
```

If you want, I can run these installs and enable hooks here — say the word if network access is OK.

Tell me which next step you prefer (I can make a branch+commit now with extras, or you can verify the current edits live and I will iterate based on screenshots).