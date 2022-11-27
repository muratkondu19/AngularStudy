import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'angular-udemy-course';
}

// @component →AppComponent  classının bir component olduğunu belirtir ve angular bu şekilde davranır. 
// templateUrl: './app.component.html'→ bu component çalıştığında belirtilen html görüntülenecek / view olarak ele alınabilir.
// selector: 'app-root',→default componenti belirtir, bu da AppComponent’tir.  index.html body alanında yer alır.
// styleUrls: ['./app.component.scss']→componente özel style var ise birden çok da olabilecek şekilde belirtilir.
// title→ bir değişken, component içerisinde yapılan her şey html tarafından app.component.html erişilebilmektedir.
// Terminal üzerinde ng g component <componentname> ile src/app altında yeni bir component oluşturulabilir. 
// spec dosyaları unit test olarak kullanılmaktadır.