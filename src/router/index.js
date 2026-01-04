// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Project from '../views/Project.vue'
import Contact from '../views/Contact.vue'
import Education from '../views/Education.vue'
import edu from '../views/edu.vue'
import Exp from '../views/Exp.vue'
import skill from '../views/Skills.vue'
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/project', name: 'Project', component: Project },
  { path: '/contact', name: 'Contact', component: Contact },
  {
    path: "/education",
    component: Education,
    redirect:{
      name:"skill"
    },
    children: [
      {
        path: "/education/skill",
        name:'skill',
        component: skill,
      },
      {
        path: "/education",
        name:'edu',
        component: edu,
      },
      {
        path : "/education/exp",
        name:'exp',
        component: Exp
      }
    ],
  },
]

const router = createRouter({   
  history: createWebHistory(),
  routes,
})

export default router
