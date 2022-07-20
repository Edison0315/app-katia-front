import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicinesPageRoutingModule } from './medicines-routing.module';

import { MedicinesPage } from './medicines.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicinesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MedicinesPage]
})
export class MedicinesPageModule {}
