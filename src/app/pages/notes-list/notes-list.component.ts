import { NotesService } from './../../shared/notes.service';
import { Note } from './../../shared/note.model';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
// import { setClassMetadata } from '@angular/core/src/r3_symbols';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  animations: [
    trigger('itemAnim',[
      // Entry Animations
      transition('void=>*', [
        // Initial states
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,
          // We have to expand out the padding properties
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }),
        // we first to animate the spacing 
        animate('50ms',style({
          height: '*',
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingLeft: '*',
          paddingRight: '*',
        })),
        animate(200)
      ]),

    //   transition('* => void ', [
    //     // first scale up
    //     animate(50, style({
    //       transform: 'scale(1.05)'
    //     })),
    //     // then scale down back to normal size
    //     animate(50, style({
    //       transform: 'scale(1)',
    //       opacity: 0.75,
    //     })),
    //     // scaled down and fade out
    //     animate('120ms ease-out', style({
    //       transform:'scale(0.68)',
    //       opacity: 0,
    //     })),
    //     // then animate the spacing including height, margin and padding
    //     animate('150ms ease-out', style({
    //       height: 0,
    //       paddingTop: 0,
    //       paddingBottom: 0,
    //       paddingRight: 0,
    //       paddingLeft: 0,
    //       'margin-bottom': '0',
    //     }))
    //   ])
    // ]),

    // trigger('listAnim', [
    //   transition('* => void', [
    //     query(':enter', [
    //       style({
    //         opacity: 0,
    //         height: 0,
    //       }),
    //       stagger(100, [
    //         animate('0.2s ease')
    //       ])
    //     ], {
    //       optional: true
    //     })
    //   ])
    // ])
  ]
})
export class NotesListComponent implements OnInit {

  notes: Note[] = new Array<Note>();
  constructor(private noteService: NotesService) { }
  
  ngOnInit(): void {
    // we want to retive all notes from NotesService
    this.notes = this.noteService.getAll();
  }

  deleteNote(id: number){
    this.noteService.delete(id);
  }
}
