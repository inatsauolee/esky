import {Component, ViewChild, ChangeDetectorRef, OnDestroy, OnInit} from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { EChartOption } from 'echarts';
import { SidebarService } from '../../shared/services/sidebar.service';
import { EventService } from '../../shared/services/event.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {Store} from "@ngrx/store";
import {LoadCoursesAction, LoadMyCoursesByCreatorAction} from "../../shared/store/actions";
import {getAllCourses} from "../../shared/store/selectors/course.selectors";
import {Pageable} from "../../shared/entities/pageable";
import {Direction, Sort} from "../../shared/constant/tools";

@Component({
	selector: 'app-app-calendar',
	templateUrl: './app-calendar.component.html',
	styleUrls: ['./app-calendar.component.css']
})
export class AppCalendarComponent implements OnDestroy {

	calendarOptions: Options;
    @ViewChild('ucCalendar', { static: true }) ucCalendar: CalendarComponent;
	public visitorsOptions: EChartOption = {};
	public visitsOptions: EChartOption = {};
	public sidebarVisible: boolean = true;
    public displayEvent: any;
    private ngUnsubscribe = new Subject();
	public pageable: Pageable = new Pageable('0', '20', Sort.id, Direction.desc);

	constructor(private store$: Store<any>, private sidebarService: SidebarService, private cdr: ChangeDetectorRef, private eventService: EventService, private modalService: NgbModal) {
		this.visitorsOptions = this.loadLineChartOptions([3, 5, 1, 6, 5, 4, 8, 3], "#49c5b6");
		this.visitsOptions = this.loadLineChartOptions([4, 6, 3, 2, 5, 6, 5, 4], "#f4516c");
		this.store$.dispatch(new LoadCoursesAction(this.pageable));
		this.store$.select(getAllCourses).subscribe(data => {
			console.log("hahah")
			const events = [];
			data.map(d => {
				const dateObj = new Date(d.date);
				const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1) + '-' + dateObj.getUTCDate();
				events.push({
					id: d.id,
					title: d.name,
					url: d.status,
					start: yearMonth,
					color: this.getRandomColor()}
				);
			});
			this.calendarOptions = {
				editable: true,
				eventLimit: false,
				header: {
					left: 'prev,next today',
					center: 'title',
					right: 'month,agendaWeek,agendaDay,listMonth'
				},
				events: events
			};
		});
    }

	getRandomColor() {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
    
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

	toggleFullWidth() {
		this.sidebarService.toggle();
		this.sidebarVisible = this.sidebarService.getStatus();
		this.cdr.detectChanges();
	}

	loadLineChartOptions(data, color) {
		let chartOption: EChartOption;
		let xAxisData: Array<any> = new Array<any>();

		data.forEach(element => {
			xAxisData.push("");
		});

		return chartOption = {
			xAxis: {
				type: 'category',
				show: false,
				data: xAxisData,
				boundaryGap: false,
			},
			yAxis: {
				type: 'value',
				show: false
			},
			tooltip: {
				trigger: 'axis',
				formatter: function (params, ticket, callback) {
					return '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + color + ';"></span>' + params[0].value;
				}
			},
			grid: {
				left: '0%',
				right: '0%',
				bottom: '0%',
				top: '0%',
				containLabel: false
			},
			series: [{
				data: data,
				type: 'line',
				showSymbol: false,
				symbolSize: 1,
				lineStyle: {
					color: color,
					width: 1
				}
			}]
		};
	}

	clickButton(model: any) {
		this.displayEvent = model;
	}
	
	eventClick(model: any) {
		model = {
			event: {
				id: model.event.id,
				start: model.event.start,
				end: model.event.end,
				title: model.event.title,
				allDay: model.event.allDay
				// other params
			},
			duration: {}
		}
		this.displayEvent = model;
	}

	updateEvent(model: any) {
		model = {
			event: {
				id: model.event.id,
				start: model.event.start,
				end: model.event.end,
				title: model.event.title
				// other params
			},
			duration: {
				_data: model.duration._data
			}
		}
		this.displayEvent = model;
	}

	openModal(content, size) {
		this.modalService.open(content, { size: size });
	}

}
