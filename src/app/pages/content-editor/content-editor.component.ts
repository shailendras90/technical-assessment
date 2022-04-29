import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-editor',
  templateUrl: './content-editor.component.html',
  styleUrls: ['./content-editor.component.scss']
})
export class ContentEditorComponent implements OnInit {

  public todos:any = [];

  @ViewChild('myText', { static: false }) customText: ElementRef;
  @ViewChild('newContent', { static: false }) newContentInput: ElementRef;
  @ViewChild('notes', { static: false }) notesInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // Update Content method
  updateContent(value){
    this.customText.nativeElement.innerHTML = value;
    this.newContentInput.nativeElement.value = "";
  }

  // this method is use to add notes
  addTodo(note){
    this.todos.push({
      notes: note
    });
    this.notesInput.nativeElement.value = "";
  }


  // this method use to delete notes
  removeNotes(index){
    console.log(index)
      this.todos.splice(index, 1)
  }

}
