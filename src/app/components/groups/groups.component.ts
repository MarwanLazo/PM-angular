import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ColumnNames } from 'src/app/models/ColumnNames';
import { GroupModel } from 'src/app/models/GroupModel';
import { RoundModel } from 'src/app/models/RoundModel';
import { GroupsService } from 'src/app/services/groups/groups.service';
import { RoundService } from 'src/app/services/lookups/round/round.service';


@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groupModels: GroupModel[] = []
  roundModels: RoundModel[] = []
  model: GroupModel;
  selectedRow: GroupModel;
  mod: string = 'CREATE';

  columnNames: ColumnNames[] = [
    { columHead: 'Group Name', property: 'name' },
    { columHead: 'Group Place', property: 'place' },
    { columHead: 'Group Size', property: 'count' },
    { columHead: 'Group Round', property: 'round' }
  ];

  constructor(private roundService: RoundService, private groupService: GroupsService) { }

  ngOnInit(): void {
    this.roundService.getRounds().subscribe(data => this.roundModels = data);
    this.groupService.getGroups().subscribe(data => this.groupModels = data);
    this.model = new GroupModel();
  }

  saveGroup(f: NgForm) {
    if (f.valid) {

      switch (this.mod) {
        case "UPDATE":
          this.groupService.update(this.model, this.selectedRow.id)
            .subscribe(data => {
              this.ngOnInit();
              f.resetForm();
            });
          break;
        case "CREATE":
        default:
          this.groupService.create(this.model).subscribe(data => {
            this.ngOnInit();
            f.resetForm();
          });
          break;
      }
    }
  }

  cancel($event) {
    this.model = new GroupModel();
  }

  compareFn(a: RoundModel, b: RoundModel) {
    return a && b && a.id == b.id;
  }

  getRow(row: GroupModel) {
    this.selectedRow = row;
    this.mod = 'UPDATE';
    this.model = { ...row }
    console.log(this.model)
  }

}
