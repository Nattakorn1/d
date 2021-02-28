import { Component } from '@angular/core';

@Component ({
    selector: 'category',
    templateUrl: './category.html',
    styleUrls: ['./category.css']
})
export class Category{
    items: string[] = ['Fashion','Sport','Game'];
}