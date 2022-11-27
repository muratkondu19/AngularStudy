import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { User } from './user';
@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent {
    //HttpClienti uygulamaya tanıtma
    constructor(private http: HttpClient) {

    }

    path: string = "https://jsonplaceholder.typicode.com/posts" //servis url tanımlama
    userpath: string = "https://jsonplaceholder.typicode.com/users" //servis url tanımlama

    posts: Post[];
    users: User[];

    ngOnInit() {
        //uygulama açıldığında postları çekme işlemi için ->HttpClientModule

        this.getPosts();
        this.getUsers();
    }

    getPosts() {
        this.http.get < Post[] > (this.path).subscribe(response => {
                //uygulama açıldığında postlar doldurulur
                this.posts = response
            }) //gelen data response olarak alınır
            //angular reactive js ile çalışmaktadır, observable çalışmaktadır
            //bu işlem get yapınca gerçekleşmez buna .subscribe olmak gerekir
            //subscribe bir promise yapısıdır, işlem sonucunda ne olduğu hakkında bilgi verir
            //observable gelen giden detayı izler
    }

    getUsers() {
        this.http.get < User[] > (this.userpath).subscribe(response => {
            //uygulama açıldığında postlar doldurulur
            this.users = response
        })

    }

}