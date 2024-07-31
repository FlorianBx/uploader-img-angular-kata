import { Routes } from '@angular/router';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { ImagesGalleryComponent } from './components/images-gallery/images-gallery.component';

export const routes: Routes = [
  { path: '', component: ImageUploaderComponent },
  { path: 'images', component: ImagesGalleryComponent },
];
