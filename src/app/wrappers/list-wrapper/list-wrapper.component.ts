import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-wrapper',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './list-wrapper.component.html',
  styleUrls: ['./list-wrapper.component.scss'],
})
export class ListWrapperComponent {
  router = inject(Router);

  @Input({ required: true })
  listItemPath!: string;

  openItem(id: string) {
    this.router.navigate(['features', this.listItemPath, id]);
  }
}
