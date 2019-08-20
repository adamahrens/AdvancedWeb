# Container Properties

- flex-direction
- justify-content
- flex-wrap
- align-items
- align-content

# Flex item Properties

- order
- flex
- flex-grow
- flex-shrink
- align-self

# Terminology
_Flex Container_ is a `div` with `display: flex` applied to it. <br />
_Flex Items_ are the elements within a parent container that is `display: flex` <br />
_Main Axis_ defaults going left to right<br/>
_Cross Axis_ defaults going top to bottom<br />

# Flex direction

Specify how the flex items are placed in a flex container and then defining the main axis and direction <br/>

Default is `flex-direction: row`. If you use the `flex-direction: row-reverse` then the _Main Axis_ now goes from right to left. If you use `flex-direction: column` then the _Main Axis_ goes from top to bottom. If you use `flex-direction: column-reversed` then the _Main Axis_ goes from bottom to top.

# Flex wrap

Specifies whether items should be forced into a single line OR can wrap multiple lines

Add it to the container with `flex-wrap: wrap;` <br />

Add `flex-wrap: wrap-reverse` will make _Cross Axis_ go from bottom to top

# Justify Content

Defines how space is distributed between flex items in a flex container along the _Main Axis_

`justify-content: flex-end | center | space-between | space-around`

# Align Items

Defines how space is distributed between flex items in a flex container along the _Cross Axis_

`align-items: flex-start | flex-end | stretch | center | baseline`

# Align Content

Defines how space is distributed between rows in a flex container along the _Cross Axis_

`align-content: flex-start | flex-end | space-between | space-around`

<hr />

# Align Self

Can align individual items in a flex container. Can be used to override `align-items` on the container

`align-self: flex-end`

So might have something like

```
 .container {
   align-items: center;
 }

 .special-div {
   align-self: flex-start;
 }
```

# Order

Used to specify the layout of flex items within a flex container. Could be beneficial when dealing with responsive layouts. One order for a wide page, diffrent order for smaller

Everything has a default of `order: 0;`

Order is looking at the assignment for all all flex items. Adding something like `order: -1` will place that first. If you add something like `order: 23423`, since it's the larget will go at the end

# Flex Basis

All flex items are equally sized as now. Grow or shrink together. What if you had three columns and want the middle column to get more space allocated to it?

`flex` is used to define how an item shrinks or grows

`flex-basis` is similar to width. It specifies the ideal size of a flex item before its put into a flex container

`flex-basis: 200px` if there is enough space in the container

# Flex Grow

Helps dictate how unused space should be used with the flex items if `flex-basis` has been satisfied

```
.box {
  flex-grow: 1;
}
```

# Flex Shrink

Similar to grow. Dictates how items should shrink when there isn't enough space in a container

Here is how you combine all three

`flex: 0 0 300px // Doesnt grow or shrink`

`flex: 1 0 300px // First option is grow, second shrink`

<hr />

# Implementing

The first bit of magic is `.container { display: flex; }`
