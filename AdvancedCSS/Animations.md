# Animations
Adds that little bit of juice to make the app better. Animations are easy. Planning how they should move & why is harder

# Pseudoclasses
Ways to trigger animations (scroll, click, hover, hitting enter in an input, etc)

## Hover

```css
div:hover {
  background: purple;
}

input:focus {
  color: red;
}
```

Active vs Focus

`:focus` represents the state when the element is currently selected to receive input
`:active` represents the state when the element is currently being activated by the user

If a button is selected it has focus. When you click and hold the button it becomes active. Could click on a paragraph to make it active but it could never have focus.

## Transform

`div { transform: function } `

## Keyframe

Transitions are for single state changes. Keyframes are for multi state transitions.

First step is to create the animation, then you need to assign it to an element.

`@keyframes name_of_key_frame`

Can define any number of steps in it such as `6% {} 10% {} 36% {}` etc

Use this properties

```
  animation-name: rainbow;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite; // How many times to run
  animation-fill-mode: // How to apply styles before or after animation
  animation-direction:
  animation-play-state: // Pause or running. Add it to pause on hover or manipulate with JS
```
