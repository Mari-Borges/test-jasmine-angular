import { UniqueServiceId } from './../../service/unique-id/unique-id.service';
import { Component, Input, OnInit, Output } from "@angular/core";
import { EventEmitter } from "events";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-like-widget',
    template: './like-widget.component.html',
    styleUrls: ['./like-widget.component.scss']
})

export class LikeWidgetComponent implements OnInit{
    @Output() public liked = new EventEmitter();
    @Input() public likes = 0;
    @Input() public id = null;


    public fonts = {faThumbsUp}

    constructor(private Service: UniqueServiceId) {}

    public ngOnInit(): void {
        if(!this.id) {
            this.id = this.Service.generateUniqueIdWithprefix('like-widget')
        }
    }

    like(): void {
        this.liked.emit;

    }

}