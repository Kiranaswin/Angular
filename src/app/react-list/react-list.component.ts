import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component'; 

@Component({
  selector: 'app-react-list',
  templateUrl: './react-list.component.html',
  styleUrls: ['./react-list.component.scss'],
  imports: [CommonModule,FormsModule,ModalComponent],
 
})
export class ReactListComponent {
  learners: any[] = [];

  newLearner = { id: 0, name: '', topics: '', percentage: 0 };
  isEditing = false;
  editIndex: number | null = null;
  showModal = false;

  ngOnInit(): void {
    const savedLearners = localStorage.getItem('learners');
    if (savedLearners) {
      this.learners = JSON.parse(savedLearners);
    }
  }

  constructor(private router: Router) {}

  openModal() {
    this.newLearner = { id: 0, name: '', topics: '', percentage: 0 };
    this.showModal = true;
    this.isEditing = false;
  }

  addLearner(): void {
    if (this.newLearner.name && this.newLearner.topics && this.newLearner.percentage !== null) {
      // Push the new learner to the learners array
      this.learners.push({ ...this.newLearner });

      // Save the updated learners array to localStorage
      localStorage.setItem('learners', JSON.stringify(this.learners));

      // Reset the newLearner form data
      this.newLearner = { id: 0, name: '', topics: '', percentage: 0 };
    }
  }


  editLearner(index: number) {
    this.newLearner = { ...this.learners[index] };
    this.editIndex = index;
    this.isEditing = true;
    this.showModal = true;
  }


  saveLearner(learner: any) {
    if (this.isEditing) {
      this.learners[this.editIndex!] = { ...learner };
    } else {
      learner.id = this.learners.length + 1;
      this.learners.push({ ...learner });
    }
  }

  closeModal() {
    this.showModal = false;
  }

  deleteLearner(index: number): void {
    // Remove learner from the array
    this.learners.splice(index, 1);

    // Save the updated learners array to localStorage
    localStorage.setItem('learners', JSON.stringify(this.learners));
  }


  resetForm() {
    this.newLearner = { id: 0, name: '', topics: '', percentage: 0 };
    this.isEditing = false;
    this.editIndex = null;
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
