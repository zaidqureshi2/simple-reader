### Intro

Simple reader sync reader that will first try to provide lines from `process.env.INPUT_LINES`, otherwise wait for input. Waiting for input only works if TTY is supported.

### Usage

#### nextLine()

Get next line either from `process.env.INPUT_LINES` or from terminal.

```
const {nextLine} = require('@learnly/simple-reader');

const myInput = nextLine();
```