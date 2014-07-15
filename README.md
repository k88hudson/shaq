# Shaq.js

### Install

1. Install [node](http://nodejs.org)
2. Run `npm install -g shaq` in your terminal

### Usage
Run `shaq hello` in your terminal, or `shaq --help` to see what's up

### Contribute

## Get started
1. First, make sure you have [node](http://nodejs.org) and git installed.
2. Configure git with your github credentials: see https://help.github.com/articles/set-up-git
3. Fork this repository by pressing the Fork button ![Fork Button](https://k88hudson-screenshots.s3.amazonaws.com/screen-shots/k88mac@2x_2014-07-15_at_5.34.02_PM.png).
4.Clone the repository by running `git clone git@github.com:k88hudson/shaq.git` in your terminal, replacing `k88hudson` with your own username.
5. Also in your terminal, cd into the shaq directory: `cd shaq` 
6. Install dependencies: `npm install`
7. Make the main shaq.js file executable: `chmod +x lib/shaq.js`
8. Now you can run `lib/shaq.js` to test shaq locally.

## Add a skill to skillz

Add a function to `lib/skillz.js`. It might look something like this:

```js
function rap() {
  console.log( shaqsHead + 'I can rap 123' );
}
```

The text inside `console.log` should be a string - it will get printed out in the console. You can use the variable `shaqsHead` to add a cool head at the start of your string.

Next, you should add your command to `lib/shaq.js` in the list of options:

```js
program
  .option('rap', 'Make shaq rap')
```

Now, test it out with `lib/shaq.js`!
