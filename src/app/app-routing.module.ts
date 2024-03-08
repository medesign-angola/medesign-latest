import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./feature-modules/home/home.module').then(m => m.HomeModule) },
  { path: 'news', loadChildren: () => import('./feature-modules/blog/blog.module').then(m => m.BlogModule) },
  { path: 'new/:post', loadChildren: () => import('./feature-modules/the-post/the-post.module').then(m => m.ThePostModule) },
  { path: 'works', loadChildren: () => import('./feature-modules/works/works.module').then(m => m.WorksModule) },
  { path: 'work/:client', loadChildren: () => import('./feature-modules/the-work/the-work.module').then(m => m.TheWorkModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
