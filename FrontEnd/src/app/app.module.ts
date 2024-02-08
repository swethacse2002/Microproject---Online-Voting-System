import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PartyComponent } from './party/party.component';
import { ViewPartyComponent } from './view-party/view-party.component';
import { ElectionComponent } from './election/election.component';
import { ViewelectionComponent } from './viewelection/viewelection.component';
import { EditElectionComponent } from './edit-election/edit-election.component';
import { DeleteElectionComponent } from './delete-election/delete-election.component';
import { ViewPartyService } from './view-party.service';
import { ViewElectionService } from './view-election.service';
import { PartyService } from './party.service';
import { ElectionsService } from './elections.service';
import { EditElectionService } from './edit-election.service';
import { DeleteElectionService } from './delete-election.service';
import { UvElectionComponent } from './uv-election/uv-election.component';
import { PollingComponent } from './polling/polling.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    AdminComponent,
    PartyComponent,
    ViewPartyComponent,
    ElectionComponent,
    ViewelectionComponent,
    EditElectionComponent,
    DeleteElectionComponent,
    UvElectionComponent,
    PollingComponent
  ],
  imports: [
    BrowserModule,MatIconModule,MatButtonModule,
    AppRoutingModule,MatToolbarModule,MatCardModule,
    BrowserAnimationsModule,MatFormFieldModule,
    RouterModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [RegisterService,ViewPartyService,ViewElectionService,PartyService,ElectionsService,EditElectionService,DeleteElectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
