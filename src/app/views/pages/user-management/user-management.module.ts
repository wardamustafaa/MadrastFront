// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// NGRX
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// Translate
import { TranslateModule } from '@ngx-translate/core';
import { PartialsModule } from '../../partials/partials.module';
// Services
import { HttpUtilsService, TypesUtilsService, InterceptService, LayoutUtilsService } from '../../../core/_base/crud';
// Shared
import { ActionNotificationComponent } from '../../partials/content/crud';
// Components
import { UserManagementComponent } from './user-management.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { RolesListComponent } from './roles/roles-list/roles-list.component';
import { RoleEditDialogComponent } from './roles/role-edit/role-edit.dialog.component';
import { UserRolesListComponent } from './users/_subs/user-roles/user-roles-list.component';
import { ChangePasswordComponent } from './users/_subs/change-password/change-password.component';
import { AddressComponent } from './users/_subs/address/address.component';
import { SocialNetworksComponent } from './users/_subs/social-networks/social-networks.component';
import { ECommerceModule } from '../apps/e-commerce/e-commerce.module';

// Material
import {
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatSelectModule,
    MatMenuModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTabsModule,
    MatNativeDateModule,
    MatCardModule,
    MatRadioModule,
    MatIconModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatAutocompleteModule,
    MAT_DIALOG_DEFAULT_OPTIONS,
    MatSnackBarModule,
    MatTooltipModule
} from '@angular/material';
import {
    usersReducer,
    UserEffects
} from '../../../core/auth';
import { MaintenanceDataService } from '../../../Services/MaintenanceDataService';

const routes: Routes = [
    {
        path: '',
        component: UserManagementComponent,
        children: [
            {
                path: '',
                redirectTo: 'roles',
                pathMatch: 'full'
            },
            {
                path: 'roles',
                component: RolesListComponent
            },
            {
                path: 'maintenance_follow_up',
                component: UsersListComponent
            },
            {
                path: 'users:id',
                component: UsersListComponent
            },
            {
                path: 'users/add',
                component: UserEditComponent
            },
            {
                path: 'users/add:id',
                component: UserEditComponent
            },
            {
                path: 'users/edit',
                component: UserEditComponent
            },
            {
                path: 'users/edit/:id',
                component: UserEditComponent
            },
        ]
    }
];

@NgModule({
    imports: [
        ECommerceModule,
        CommonModule,
        HttpClientModule,
        PartialsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('users', usersReducer),
        EffectsModule.forFeature([UserEffects]),
        FormsModule,
        ReactiveFormsModule,
        TranslateModule.forChild(),
        MatButtonModule,
        MatMenuModule,
        MatSelectModule,
        MatInputModule,
        MatTableModule,
        MatAutocompleteModule,
        MatRadioModule,
        MatIconModule,
        MatNativeDateModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatCardModule,
        MatPaginatorModule,
        MatSortModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatTabsModule,
        MatTooltipModule,
        MatDialogModule
    ],
    providers: [
        InterceptService, MaintenanceDataService

    ],
    entryComponents: [
        ActionNotificationComponent,
        RoleEditDialogComponent
    ],
    declarations: [
        UserManagementComponent,
        UsersListComponent,
        UserEditComponent,
        RolesListComponent,
        RoleEditDialogComponent,
        UserRolesListComponent,
        ChangePasswordComponent,
        AddressComponent,
        SocialNetworksComponent
    ],
    exports: [RolesListComponent]
})
export class UserManagementModule { }
