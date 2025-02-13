import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainDbzPageComponent} from './pages/main-dbz-page/main-dbz-page.component';
import {CharactersDbzListComponent} from './components/characters-dbz-list/characters-dbz-list.component';
import {CharactersAddFormComponent} from './components/characters-add-form/characters-add-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MainDbzPageComponent,
    CharactersDbzListComponent,
    CharactersAddFormComponent
  ],
  exports: [
    MainDbzPageComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class DbzModule {
}
