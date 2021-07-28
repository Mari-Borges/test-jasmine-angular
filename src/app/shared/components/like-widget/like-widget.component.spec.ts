import { LikeWidgetModule } from './like-widget.module';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueServiceId } from '../../service/unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';
import { expressionType } from '@angular/compiler/src/output/output_ast';

describe(LikeWidgetComponent.name, ()=>{
    let fixture: ComponentFixture<LikeWidgetComponent> = null
    let component: LikeWidgetComponent = null

    beforeEach(async ()=>{
        await TestBed.configureTestingModule({
            imports: [LikeWidgetModule]
        }).compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponent);
        component = fixture.componentInstance;

    });
    it('should create componet',()=>{
        expect(component).toBeTruthy();

    });
    it('should auto-generate ID during ngOnInit when (@Input id) is not assigned', ()=>{
        fixture.detectChanges();
        expect(component.id).toBeTruthy();
    })
    it('should NOT auto-generate ID during ngOnInit when (@Input id) is assigned', ()=>{
        const someId = 'someId';
        component.id = someId;
        fixture.detectChanges();
        expect(component.id).toBe(someId);

    });
    it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`, () => {
        spyOn(component.liked, 'emit');
        fixture.detectChanges();
        component.like();
        expect(component.liked.emit).toHaveBeenCalled();
        

    });
});