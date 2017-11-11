# vue-layout

Check out the [Demo](https://vue-layout.herokuapp.com/)


> A Vue.js project implementing a Full-Screen "Holy Grail" Layout using Flexbox.
> 
> The Holy Grail Layout is a classic CSS problem with various solutions presented over time. 
>
> At its core, the Holy Grail Layout is a page with a header, footer, and three columns. The center column contains the main content, and the left and right columns contain supplemental content like ads or navigation.
> 
> Most CSS solutions to this problem aim to meet a few goals:
> 
> They should have a fluid center with fixed-width sidebars.
> 
> All columns should be the same height, regardless of which column is actually the tallest.
>
> They should require minimal markup.
> The footer should “stick” to the bottom of the page when content is sparse.
>
> 
> With Flexbox, a complete solution is finally possible.
>
> With Vue.js, the Layout becomes a component with Slots to simply host other components. 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
