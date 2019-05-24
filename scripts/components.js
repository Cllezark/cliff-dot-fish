/**
 * Register Vue Components
 */

// register the grid component
Vue.component('page-head', {
  template: '#page-head'
})


Vue.component('work', {
  template: '#work',
    props: ['projects']
})

Vue.component('research', {
  template: '#research',
    props: ['research']
})