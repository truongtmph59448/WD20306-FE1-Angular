import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { StoryService } from '../../services/story';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;

  loading = false;
  error = '';
  success = '';

  constructor(
    private fb: FormBuilder,
    private storyService: StoryService
  ) {
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      author: [''],
      views: [0]
    });
  }

  submitForm() {

    if (this.addForm.invalid) {
      this.error = "Title không được để trống";
      return;
    }

    this.loading = true;
    this.error = '';
    this.success = '';

    const data = this.addForm.value;

    this.storyService.create(data).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Thêm truyện thành công';
        this.addForm.reset();
      },
      error: () => {
        this.loading = false;
        this.error = 'Có lỗi xảy ra';
      },
    });
  }
}