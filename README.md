Moving Things with JavaScript
---

## Objectives

1. Explain how to update an element's position on the page
2. Explain how to move an element in response to a browser event
3. Practice moving elements on the page

## Problem Statement

It's mesmerizing to think about how video games work. They will responded to your whims
through a set of designated controls and interactions. It can pull you into its story by
giving you controls to interact within, and sometimes shape the virtual environments.

_Programming means that you can create such a world for other people._ It'll take some 
time learning and practicing programming before you can build a game like 
[Braid](http://braid-game.com/) or even [Don't Look Back](http://terrycavanaghgames.com/dontlookback/),
for instance, but you can start with small steps. We're going to show you how to get started with moving elements with JavaScript.

## Explain How to Update an Element's Position on the Page

#### Tasks for LearnIDE Environment Users

1. Click the "OPEN IDE" button

#### Tasks for Local Environment Users

1. Fork this repository.
2. Clone your fork locally.
3. `cd` into the local repo you just cloned.

Open up `index.html`, open the dev tools and take a look at the variable `dodger`:

``` javascript
var dodger = document.getElementById('dodger')
```

Experiment with changing the color of dodger with this code:

``` javascript
dodger.style.backgroundColor = "#000000"
```

Did the object disappear? That's because the color was changed to "#000000", which is
another way of setting the color to be "black", so it blends in with the background.

Now let's change it to something more visible:

``` javascript
dodger.style.backgroundColor = ''
```

Now it should be pink!

![pink dodger](https://curriculum-content.s3.amazonaws.com/skills-based-js/pink_dodger.png)

So far, we've been accessing the `style` property of the `dodger` element. This lets us change things like the `backgroundColor`, the `height`, `width`, etc.

We can also change an element's position on the page.

First, let's read out the element's coordinates — we'll read these as if the bottom left of the black box were at coordinate (0, 0).

``` javascript
dodger.style.left // "180px"
dodger.style.bottom // "0px"
```

The dodger's bottom left edge is currently at the coordinates (180, 0). Keep in mind that
these coordinates are relative to the black box.

Now let's try moving the element up.

``` javascript
dodger.style.bottom = '100px'
```

![up 100px](https://curriculum-content.s3.amazonaws.com/skills-based-js/pink_dodger_bottom_100.png)

Even though we're setting _numeric_ coordinates, we need to move the dodger by assigning it a different string. Let's set it back to its default position:

``` javascript
dodger.style.bottom = '0px'
```

## Explain How to Move an Element in Response to a Browser Event

We can use event listeners to respond to an event and move the dodger.

If we want to move the dodger to the left we have to figure what the left arrow
key's numeric value is. We could look it up, but since we're programmers, we're going to
explore!

``` javascript
document.addEventListener('keydown', function(e) {
  console.log(e.which)
})
```

Enter the above into the console. If you click on the window (where the dodger is rendered)
press the left arrow key, you should see in the console:

![left arrow keydown](https://curriculum-content.s3.amazonaws.com/skills-based-js/left_arrow_keydown.png)

(Don't worry if you only see `37` :) ).

We now know that we need to look for `37` to trigger a move to the left. Let's start moving
left then:

``` javascript
document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)

    dodger.style.left = `${left - 1}px`
  }
})
```

If the left arrow key is pressed, the dodger moves 1 pixel to the left. Otherwise, if anything else is pressed, nothing happens.

**Note: We have to parse the pixels as integers and then convert them back to the pixel string.**

Eventually, if the dodger is nudged too far left, it will fall out of view.

To prevent this, we'll want to check to see where the left edge of the dodger is, and we want
to prevent it from going past the left edge of the black screen.

Now would be a good time to break the dodger's movement out into a separate function. Let's refresh the page and code with a blank slate and grab the dodger again.

``` javascript
var dodger = document.getElementById('dodger')
```

Work on this function:

``` javascript
function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}
```

We're doing essentially the same as above, but we first ensure that the dodger's left edge has not gone past the left edge of its container. (Remember, position is relative to the container.)

Let's wire this up

``` javascript
document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})
```

Now try again to move the dodger past the left edge. It shouldn't fall out of view now!

## Practice moving elements on the page

Open up `index.js` and try writing a function to move the dodger to the right.

Think about what needs to change to make a `moveDodgerRight()` function. you'll need another
`e.which` in the event listener, and instead of moving the dodger `${left - 1}px`, we'll be
moving it `${left + 1}px` (or `${right - 1}px`, if you prefer). To prevent the dodger from
falling off the right-hand side, you can make sure that `dodger.style.right` is always
greater than `0px`.

## Conclusion

With event listeners and object properties, you are not only able to set properties on page
load, but have object properties change as user input is submitted. Think about all the
possibilities that this creates for user interactions, much like video games!

## Resources

- [Don't Look Back](http://terrycavanaghgames.com/dontlookback/)
- [Braid](http://braid-game.com/)

<p class='util--hide'>View <a href='https://learn.co/lessons/moving-things-with-javascript'>Moving Things With JavaScript</a> on Learn.co and start learning to code for free.</p>
