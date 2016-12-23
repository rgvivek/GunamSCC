import {Component, Input} from '@angular/core';
import { Header } from './header';

@Component({
    selector: 'nsf-header',
    templateUrl:"app/common/header/header.html"
})
export class HeaderComponent {
	@Input()
	header: Header;
}