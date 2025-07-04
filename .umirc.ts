import { defineConfig } from "umi";

export default defineConfig({
  title: 'Ahmad Ridho - Portfolio',
  favicons: ['/favicon.ico'],
  metas: [
    { name: 'description', content: 'Professional portfolio of Ahmad Ridho' },
    { name: 'keywords', content: 'backend engineer, software developer, portfolio' },
  ],
  hash: true,
  routes: [
    { exact: true, path: '/', component: '@/pages/index' },
    { path: '/about', component: '@/pages/about' },
    { path: '/projects', component: '@/pages/projects' },
    { path: '/project/:id', component: '@/pages/project/[id]' },
    { path: '/contact', component: '@/pages/contact' },
    { path: '*', component: '@/pages/404' },
  ],
  npmClient: 'pnpm',
});
