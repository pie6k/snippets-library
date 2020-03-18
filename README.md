I've been trying to use various apps for code snippets managment.

In the end none of them worked well for me and I was still finding my self writing the same code like "new react component" over and over again.

I've decided to create new "project" that just includes well-named, ready to copy-paste code snippets I can quickly copy

## How to use

1. Clone this repo
2. `yarn install` (it's just for typescript typings right now)
3. Open this project in new window of your IDE
4. When you need snippet, switch your IDE window, find needed snippet and copy it

## Contribution

Feel free to add new snippets to this library.

Rules:

1. Good practices
2. Formatting matching settings in prettier config file
3. Generic solutions - snippets should not be adjusted to your personal, specific and non-common needs
4. Name files extremely well. Name should include all the aspects of what's included in the snippet

- If file includes jsx/tsx - use proper file extension

5. use camelCase or PascalCase depending on what's included in the snippet.

- If file includes class/react component etc - use PascalCase
- If it's just some functional utility - use camelCase
