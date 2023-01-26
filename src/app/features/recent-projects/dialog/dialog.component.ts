import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  current = 1;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dataList: any
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }

  onPrevious() {
    if (this.current === 1) {
      this.current = this.dataList.imagePath.length;
    } else {
      this.current = this.current - 1;
    }
  }
  onNext() {
    if (this.current === this.dataList.imagePath.length) {
      this.current = 1;
    } else {
      this.current = this.current + 1;
    }
  }
}
