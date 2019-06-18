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
