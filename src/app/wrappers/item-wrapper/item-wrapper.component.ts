import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Unsubscribable, switchMap } from 'rxjs';
import { BaseService } from 'src/app/core/services/base-service.service';

@Component({
  selector: 'app-item-wrapper',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './item-wrapper.component.html',
  styleUrls: ['./item-wrapper.component.scss'],
})
export class ItemWrapperComponent implements OnInit, OnDestroy {
  @Input({ required: true })
  form!: FormGroup;

  @Input({ required: true })
  returnPath!: string[];

  @Input({ required: true })
  service!: BaseService<any, any>;

  @Output()
  onFetch: EventEmitter<any> = new EventEmitter();

  route = inject(ActivatedRoute);
  router = inject(Router);

  $unsub!: Unsubscribable;
  itemId: string = 'new';
  item: any;

  ngOnInit() {
    this.$unsub = this.route.params
      .pipe(
        switchMap((p) => {
          this.itemId = p['id'];

          //return empty kako bi sprijecili slanje requesta kada je id = 'new'
          if (this.itemId === 'new') return EMPTY;
          return this.service.getItemById(p['id']);
        })
      )
      .subscribe({
        next: (res) => {
          this.item = { ...res };
          this.form.patchValue(res);
          this.onFetch.emit(res);
        },
        error: (err) => console.error(err),
      });
  }

  goBack() {
    this.router.navigate(this.returnPath);
  }

  onSubmit() {
    !!this.itemId && this.itemId !== 'new'
      ? this.editItem()
      : this.createItem();
  }

  createItem() {
    this.service.createNewItem(<any>this.form.value).subscribe({
      next: (res) => {
        console.log('Zapis je kreiran ', res);
        this.router.navigate(this.returnPath);
      },
      error: (err) => {
        console.error('GRESKA', err);
      },
    });
  }

  editItem() {
    this.service.editItem(<any>this.form.value).subscribe({
      next: (res) => {
        console.log('Zapis je editovan ', res);
        this.router.navigate(this.returnPath);
      },
      error: (err) => {
        console.error('GRESKA', err);
      },
    });
  }

  deleteUser() {
    this.service.deleteItem(this.itemId).subscribe({
      next: (res) => {
        console.log('Zapis je obrisan ', res);
        this.router.navigate(this.returnPath);
      },
      error: (err) => {
        console.error('GRESKA', err);
      },
    });
  }

  ngOnDestroy(): void {
    this.$unsub?.unsubscribe();
  }
}
