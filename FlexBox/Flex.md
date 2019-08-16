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

# Implementing

The first bit of magic is `.container { display: flex; }`
