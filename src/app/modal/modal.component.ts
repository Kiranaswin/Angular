import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [CommonModule, FormsModule],
})
export class ModalComponent {
  @Input() isVisible = false;
  @Input() learner: any = { id: 0, name: '', topics: '', percentage: 0 };
  @Output() closeModal = new EventEmitter();
  @Output() saveLearner = new EventEmitter<any>();

  onSave() {
    this.saveLearner.emit(this.learner);
    this.close();
  }

  close() {
    this.closeModal.emit();
  }
}
