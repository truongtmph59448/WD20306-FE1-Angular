import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './pages/contact/contact';
import { Stories } from './pages/stories/stories';
import { Products } from './pages/product/product';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: Home
  },

  {
    path: 'contact',
    component: Contact
  },

  {
    path: 'stories',
    component: Stories
  },

  {
    path: 'products',  
    component: Products
  }

];