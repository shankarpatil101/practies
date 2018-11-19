import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserInputComponent, UserInputKeyUpComponent, LoopbackComponent, KayUpEnter, AllTogether } from './userinput.component';

@NgModule({
    declarations: [UserInputComponent,
                    UserInputKeyUpComponent, 
                    LoopbackComponent,
                     KayUpEnter,
                     AllTogether
                    ],
    exports: [UserInputComponent, 
              UserInputKeyUpComponent, 
              LoopbackComponent,
               KayUpEnter,
               AllTogether
              ],
  imports: [CommonModule],
})
export class UserInputModule { }