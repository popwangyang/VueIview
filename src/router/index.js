import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld   from '@/components/HelloWorld1'
import Item1Option1 from '@/components/Item1/Option1.vue'
import Item1Option2 from '@/components/Item1/Option2'
import Item1Option3 from '@/components/Item1/Option3'
import Item2Option1 from '@/components/Item2/Option1'
import Item2Option2 from '@/components/Item2/Option2'
import Item3Option1 from '@/components/Item3/Option1'
import Item3Option2 from '@/components/Item3/Option2'
import aaa from "../components/aaa.vue"
//import Item3Option1 from '@/components/Item3/Option1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
          {
          	name:"item1",
          	icon:"ios-navigate",
          	path:"Item1",
          	title:"Item1",
          	component:aaa,
          	children:[
          	    {
          	    	path:"Option1",
          	    	name:"Item1Option1",
          	    	component:Item1Option1,
          	    	title:"Option1"
          	    },
          	    {
          	    	path:"Option2",
          	    	name:"Item1Option2",
          	    	component:Item1Option2,
          	    	title:"Option2"
          	    },
          	    {
          	    	path:"Option3",
          	    	name:"Item1Option3",
          	    	component:Item1Option3,
          	    	title:"Option3"
          	    },
          	    {
          	     path:"Option4",
          	     name:"Item1Option4",
          	     component:aaa,
          	     icon:"ios-navigate",
          	     title:"Option4",
          	     children:[
		          	      {
		          	    	path:"List1",
		          	    	name:"Item1Option4List1",
		          	    	component:Item1Option3,
		          	    	title:"List1"
		          	    }
          	     ]
          	    }
          	]
          },
          {
          	name:"Item2",
          	icon:"ios-keypad",
          	path:"Item2",
          	component:aaa,
          	title:"Item2",
          	children:[
          	    {
          	    	path:"Item2/Option1",
          	    	name:'Item2Option1',
          	    	component:Item2Option1,
          	    	title:"Option1"
          	    },
          	    {
          	    	path:"Item2/Option2",
          	    	name:'Item2Option2',
          	    	component:Item2Option2,
          	    	title:"Option2"
          	    }
          	    
          	]
          },
          {
          	name:"Item3",
          	icon:"ios-analytics",
          	path:"Item3",
          	component:aaa,
          	title:"Itme3",
          	children:[
          	    {
          	    	path:"Item3/Option1",
          	    	name:"Item3Option1",
          	    	component:Item3Option1,
          	    	title:"Option1"
          	    },
          	    {
          	    	path:"Item3/Option2",
          	    	name:"Item3Option2",
          	    	component:Item3Option2,
          	    	title:"Option2"
          	    }
          	]
          }
         
      
      ]
    }
  ]
})
