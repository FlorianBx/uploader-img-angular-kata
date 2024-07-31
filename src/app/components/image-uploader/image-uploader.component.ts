import { Component, inject } from '@angular/core';
import { UploadImageService } from '../../services/upload-image.service';

@Component({
  selector: 'app-image-uploader',
  standalone: true,
  imports: [],
  templateUrl: './image-uploader.component.html',
  styleUrl: './image-uploader.component.css',
})
export class ImageUploaderComponent {
  imageFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;
  private uploadImageService = inject(UploadImageService);

  onFileChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.handleFileInput(file);
    }
  }

  private handleFileInput(file: File): void {
    this.imageFile = file;
    this.generateImagePreview(file);
  }

  private generateImagePreview(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    if (this.imageFile) {
      this.uploadImageService.uploadImage(this.imageFile).subscribe(response => {
        console.log('Response: ', response);
        this.imageFile = null;
        this.imagePreview = null;
      });
    }
  }
}
