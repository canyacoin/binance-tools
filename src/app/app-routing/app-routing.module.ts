import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { MainComponent } from '../main/main.component'

    const routes: Routes = [
        {
            path: '',
            component: MainComponent,
        },
        {
            path: 'main',
            component: MainComponent,
        }
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
