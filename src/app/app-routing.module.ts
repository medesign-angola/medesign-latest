import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feature-modules/home/home.module').then(m => m.HomeModule),
    title: 'Página Inicial - Me Design Angola'
  },
  {
    path: 'news',
    loadChildren: () => import('./feature-modules/blog/blog.module').then(m => m.BlogModule),
    title: 'Blog - Me Design Angola'
  },
  {
    path: 'new/:post',
    loadChildren: () => import('./feature-modules/the-post/the-post.module').then(m => m.ThePostModule),
    title: 'Leitura de Publicação - Me Design Angola'
  },
  {
    path: 'works',
    loadChildren: () => import('./feature-modules/works/works.module').then(m => m.WorksModule),
    title: 'Trabalhos - Me Design Angola'
  },
  {
    path: 'work/:client',
    loadChildren: () => import('./feature-modules/the-work/the-work.module').then(m => m.TheWorkModule),
    title: 'Visualização de Trabalho - Me Design Angola'
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./feature-modules/contact-us/contact-us.module').then(m => m.ContactUsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
