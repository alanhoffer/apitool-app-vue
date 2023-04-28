<template>
      <Navbar/>
      <router-view ></router-view>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue';
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="css" scoped>






</style>



<style>
@import 'primeicons/primeicons.css';

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');



/* START OF RESET */

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}


/* END */


html{
  height: 100vh;
  font-size:16px;
}

body{
  height: 100%;
  background-repeat: no-repeat;
}

h1, h2{
  font-family: Bebas Neue;
  color: var(--color-grey-light);
}
h3, h4, p{
  font-family: 'Open Sans';
  color: var(--color-grey-light);
}

#app {
  height: 100%;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Bebas Neue;
  text-align: center;
  color: #2c3e50;
}

:root {
  --color-yellow: #F3B202;
  --color-yellow-transparent: rgb(243, 178, 2, 0.75);
  --color-grey-light: rgb(212, 212, 212);
  --color-white: #ffffff;
  --color-grey-light-transparent: rgba(212, 212, 212, 0.75);
  --color-black: rgb(32, 32,32 );
  --color-black-light: #2E2E2C;
  --color-black-transparent: rgb(46, 46, 44, 0.75);
  --font-bebas: Bebas Neue;
  --font-opensans: 'Open Sans';
}

:root .light{
}









</style>