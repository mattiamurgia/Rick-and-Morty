import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeRoutingModule } from './pipe-routing.module';
import { CutWordPipe } from './cut-word.pipe';
import { ChangeNamePipe } from './change-name.pipe';

@NgModule({
  declarations: [CutWordPipe, ChangeNamePipe],
  imports: [CommonModule, PipeRoutingModule],
  exports: [CutWordPipe, ChangeNamePipe],
})
export class PipeModule {}
