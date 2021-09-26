import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError, of, retry, throwError } from 'rxjs';
import { ColumnNames } from 'src/app/models/ColumnNames';
import { GroupModel } from 'src/app/models/GroupModel';
import { ParticipantModel } from 'src/app/models/ParticipantModel';
import { GroupsService } from 'src/app/services/groups/groups.service';
import { ParticipantService } from 'src/app/services/participants/participant.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {

  groupModels: GroupModel[] = [];
  participantModels: ParticipantModel[] = [];
  model: ParticipantModel;
  selectedRow: ParticipantModel;

  mod: string = 'CREATE';


  columnNames: ColumnNames[] = [
    { columHead: 'Name', property: 'name' },
    { columHead: 'Eamil', property: 'email' },
    { columHead: 'Phone', property: 'phone' },
    { columHead: 'Age', property: 'age' },
    { columHead: 'Part. Group', property: 'partGroup' },
  ]

  constructor(private partService: ParticipantService, private grouService: GroupsService) { }

  ngOnInit(): void {
    this.grouService.getGroups().subscribe(data => this.groupModels = data);
    this.partService.getParticipant().subscribe(data => this.participantModels = data);
    this.model = new ParticipantModel();
  }

  saveParticipant(f: NgForm) {
    if (f.valid)
      switch (this.mod) {
        case "UPDATE":
          this.partService.update(this.model, this.model.id)
            .subscribe(data => {
              this.ngOnInit();
              f.resetForm();
            });
          break;
        case "CREATE":
        default:
          this.partService.create(this.model).subscribe(data => {
            this.ngOnInit();
            f.resetForm();
          });
          break;
      }
  }


  cancel($event) {
    this.model = new ParticipantModel();
  }

  compareFn(a: GroupModel, b: GroupModel) {
    return a && b && a.id == b.id;
  }

  getRow(row: ParticipantModel) {
    this.selectedRow = row;
    this.mod = 'UPDATE';
    this.model = { ...row }
    console.log(this.model)
  }

}
