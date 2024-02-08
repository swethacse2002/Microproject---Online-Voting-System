import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PartyComponent } from './party/party.component';
import { ViewPartyComponent } from './view-party/view-party.component';
import { ElectionComponent } from './election/election.component';
import { ViewelectionComponent } from './viewelection/viewelection.component';
import { EditElectionComponent } from './edit-election/edit-election.component';
import { DeleteElectionComponent } from './delete-election/delete-election.component';
import { PollingComponent } from './polling/polling.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'User', component: UserComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'party', component: PartyComponent },
  { path: 'viewparty', component: ViewPartyComponent },
  { path: 'election', component: ElectionComponent },
  { path: 'viewelection', component: ViewelectionComponent },
  { path: 'editelection', component: EditElectionComponent },
  { path: 'deleteelection', component: DeleteElectionComponent },
  { path: 'polling', component: PollingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
