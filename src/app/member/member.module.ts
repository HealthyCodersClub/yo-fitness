import { NgModule } from '@angular/core';

import { MemberComponent }   from './member.component';
import { MemberListComponent } from './member-list.component';
import { MemberService } from './member.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [MemberComponent, MemberListComponent],
    providers: [MemberService],
})
export class MemberModule { }
