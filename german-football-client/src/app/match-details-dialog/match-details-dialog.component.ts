import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
@Component({
  selector: 'app-match-details-dialog',
  templateUrl: './match-details-dialog.component.html',
  styleUrls: ['./match-details-dialog.component.css']
})
export class MatchDetailsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<MatchDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) public match: any) { }

  ngOnInit() {
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
