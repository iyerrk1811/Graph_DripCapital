/*app.component.ts*/
import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../node_modules/canvasjs/dist/canvasjs.min';
// var CanvasJS = require('./canvasjs.min');
 
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
 
export class AppComponent implements OnInit {
	
	height: any = 370;
	width: any = 80;

	style: Object;
	graph_color: string;
	labels: Array<string>; 
	
	constructor(){
		// this.height = 100;
		// this.width = 50;
		this.graph_color = ["Red","#ff0066","Orange","Yellow","Green"];
		this.labels = ["Apple", "Mango", "Orange", "Banana", "Pineapple"];
	}

	ngOnInit() {
		let chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: "Basic Column Chart in Angular"
		},
		data: [{
			type: "column",
			dataPoints: [
				{ y: 71, label: this.labels[0], color: this.graph_color },
				{ y: 55, label: this.labels[1], color: this.graph_color },
				{ y: 50, label: this.labels[2], color: this.graph_color  },
				{ y: 65, label: this.labels[3], color: this.graph_color  },
				{ y: 1095, label: this.labels[4], color: this.graph_color  }
			]
		}]
	});
		
	chart.render();
    }
}
