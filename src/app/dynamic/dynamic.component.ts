import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {DynamicDirective} from '../dynamic.directive';
import {AppService} from '../app.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  @ViewChild(DynamicDirective) dynamic: DynamicDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private appservice: AppService) { }

  ngOnInit() {
    this.loadComponent();
  }
  loadComponent() {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.appservice.getContent());

    const viewContainerRef = this.dynamic.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
