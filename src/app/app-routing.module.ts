import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackByExampleComponent } from './track-by-example/track-by-example.component';

export const routes: Routes = [
  { path: 'trackBy', component: TrackByExampleComponent },
  { path: '**', redirectTo: 'trackBy', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
