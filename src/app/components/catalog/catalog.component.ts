import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from "../../services/common.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  @Input()
  catalog: Array<any>;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.catalog = this.commonService.getCatalog();
  }

  renderShirt(shirt) {
    return "shirt-" + shirt.color + "-" + shirt.gender;
  }

}
