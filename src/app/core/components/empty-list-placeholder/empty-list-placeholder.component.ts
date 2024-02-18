import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-empty-list-placeholder',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './empty-list-placeholder.component.html',
  styleUrls: ['./empty-list-placeholder.component.scss'],
})
export class EmptyListPlaceholderComponent {}
