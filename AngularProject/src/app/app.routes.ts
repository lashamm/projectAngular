import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { TrainIdComponent } from './train-id/train-id.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path: '', redirectTo: "home", pathMatch : "full"},
    {path: 'home', component : HomeComponent},
    {path: 'trains/:id', component : TrainIdComponent},
    {path: 'about', component : AboutComponent},
    {path: 'contact', component : ContactComponent},
    {path: 'profile', component : ProfileComponent},
    {path: 'header', component : HeaderComponent},
    {path: 'footer', component : FooterComponent},
    {path: '**', component : ErrorComponent},
];
