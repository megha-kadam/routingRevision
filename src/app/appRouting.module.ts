import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './shared/component/home/home.component';
import { UserDashboardComponent } from "./shared/component/user-dashboard/user-dashboard.component";
import { ProductDashboardComponent } from "./shared/component/product-dashboard/product-dashboard.component";
import { UserFormComponent } from "./shared/component/user-form/user-form.component";
import { UserCardsComponent } from "./shared/component/user-cards/user-cards.component";
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { ProductFormComponent } from "./shared/component/product-form/product-form.component";
import { ProductCardsComponent } from "./shared/component/product-cards/product-cards.component";

const routes : Routes = [
    {
        path : '',
       component : HomeComponent,
       title : 'Dashboard'
    },
    {
        path : 'home',
        component : HomeComponent,
        title : 'Dashboard'
    },
    {
        path : 'users',
        component : UserDashboardComponent,
        title : 'Users',
        children : [
             {
                path : 'addUser',
                component : UserFormComponent,
                title : 'UserForm'
            },
              {
                path : ':id',
                component : UserCardsComponent,
                title : 'UserDetail'
            },
            {
                path : ':id/edit',
                component : UserFormComponent,
                title : 'UserForm'
            }
        ]
    },
    {
        path : 'products',
        component : ProductDashboardComponent,
        title : 'Products',
        children : [
            {
                path : 'addProduct',
                component : ProductFormComponent,
                title : 'Product Form'
            },
            {
                path : ':pId',
                component : ProductCardsComponent,
                title : 'Product Details'
            },
            {
                path : ':pId/edit',
                component : ProductFormComponent,
                title : 'ProductForm'
            }
        ]
    },
    {
        path : 'pageNotFound',
        component : PageNotFoundComponent
    },
    {
        path : "***",
        redirectTo : 'pageNotFound'
    }
]

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule],
    declarations: []
})
export class AppRoutingModule{

}