import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipe-app';

  simpleAlert() {
    Swal.fire('Just a simple alert message');
  }

  successAlert() {
    Swal.fire('Thank You...', 'Submitted Successfully', 'success');
  }

  confirmBox() {
    Swal.fire({
      title: 'Do you want to delete the file?',
      text: 'You will not be able to recover if you delete the file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes delete it',
      cancelButtonText: 'No keep it',
    }).then((res) => {
      if (res.value) {
        Swal.fire('Deleted', 'Your file has been deleted', 'success');
      } else if (res.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('cancelled', 'Your file is safe :)', 'error');
      }
    });
  }
}
