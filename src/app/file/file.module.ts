import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileRoutingModule } from './file.routing';
import { CreateFileComponent } from './createFile/createFile.component';

@NgModule({
    imports: [
        CommonModule, FileRoutingModule
    ],
    declarations: [CreateFileComponent]
})

export class FileModule { }
