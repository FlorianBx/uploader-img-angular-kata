import { Component, inject, signal } from '@angular/core';
import { UploadImageService } from '../../services/upload-image.service';
import { Image } from '../../models/image';

@Component({
  selector: 'app-images-gallery',
  standalone: true,
  imports: [],
  templateUrl: './images-gallery.component.html',
  styleUrl: './images-gallery.component.css'
})
export class ImagesGalleryComponent {
  listOfImages = signal<Image[]>([]);
  private uploadImageService = inject(UploadImageService);

  ngOnInit(): void {
    this.uploadImageService.getImages().subscribe(images => {
      this.listOfImages.set(images);
    });
  }
}
