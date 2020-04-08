import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor( public dialog : MatDialog) {}

  ngOnInit() {
  	document.addEventListener('contextmenu', event => event.preventDefault());
  }

  openDialog() : void {
  	const dialogRef = this.dialog.open(ShowForm, {
  		width: '100%',
  		height: '100%',
  		data: { }
  	});
  	dialogRef.afterClosed().subscribe(result => {
  		console.log('dialog was closed');
  	});
  }
}

@Component({
	selector: 'show-form',
	templateUrl : './show-form.component.html',
	styleUrls: ['./show-form.component.scss']
})
export class ShowForm implements OnInit{
	constructor(
		public dialogRef : MatDialogRef<ShowForm>){}

	ngOnInit() {
  		document.addEventListener('contextmenu', event => event.preventDefault());
  		// $(‘video’).bind(‘contextmenu’,function() { return false; });
  	}

	onNoClick(): void {
    	this.dialogRef.close();
  	}
}