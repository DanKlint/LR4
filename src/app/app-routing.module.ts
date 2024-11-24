import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { AboutComponent } from './about/about.component';
import { GroupsComponent } from './groups/groups.component';

export const routes: Routes = [
	{ path: '', redirectTo: '/greeting', pathMatch: 'full' },
	{ path: 'greeting', component: GreetingComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'groups/:id', component: GroupsComponent },
	{ path: 'groups', component: GroupsComponent },
	{ path: '**', redirectTo: '/greeting' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }