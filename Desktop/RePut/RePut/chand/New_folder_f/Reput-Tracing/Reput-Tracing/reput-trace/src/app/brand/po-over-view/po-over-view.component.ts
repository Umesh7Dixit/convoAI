import { Component,ViewChild,ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import HighchartsOrganization  from 'highcharts/modules/organization';
import HighchartsSankey from "highcharts/modules/sankey";
import { PoTierViewComponent } from '../../po-tier-view/po-tier-view.component';
import { PoDataService } from '../../services/po-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-po-over-view',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatButtonModule,HighchartsChartModule,MatSliderModule,PoTierViewComponent],
  templateUrl: './po-over-view.component.html',
  styleUrl: './po-over-view.component.scss'
})
export class PoOverViewComponent {
    chartData:any;
    productComponentData:any;
    processData: any;
    poList = [
        { number: 'PO #123S23FR', invoices: 12 , compliance: 90},
        { number: 'PO #123S24XR', invoices: 23 , compliance: 80 },
        { number: 'PO #123SNIU', invoices: 43 , compliance: 85 },
      ];
    
    activeIndex = 0;
  constructor( private poChartData : PoDataService
  ) {
    
  }

  @ViewChild('supplyChainView') supplyChainView!: PoTierViewComponent;
  @ViewChild('processMapView') processMapView!: PoTierViewComponent;
  @ViewChild('productComponentView') productComponentView!: PoTierViewComponent;

  onTabChange() {
    // Manually trigger connection redraw when tab changes
    setTimeout(() => {
      this.supplyChainView?.triggerConnectionRedraw();
      this.processMapView?.triggerConnectionRedraw();
      this.productComponentView?.triggerConnectionRedraw();
    }, 100);
  }

  setActiveTab(index: number): void {
    this.activeIndex = index;
    if(this.activeIndex == 1){
        this.chartData = this.poChartData.getSampleData2();
        this.productComponentData = this.poChartData.getProductComponentData2();
        this.processData = this.poChartData.getProcessData2();
    }else if(this.activeIndex == 2){
        this.chartData = this.poChartData.getSampleData3();
    this.productComponentData = this.poChartData.getProductComponentData3();
    this.processData = this.poChartData.getProcessData3();
    }else{
        this.chartData = this.poChartData.getSampleData1();
        this.productComponentData = this.poChartData.getProductComponentData1();
        this.processData = this.poChartData.getProcessData1();
    }

  }

  ngOnInit() {
    // var self = this;
    // HighchartsSankey(Highcharts);
    // HighchartsOrganization(Highcharts);
    // self.loadSupplyChainGraph();

    this.chartData = this.poChartData.getSampleData1();
    this.productComponentData = this.poChartData.getProductComponentData1();
    this.processData = this.poChartData.getProcessData1();
    
  }

//   productData(){
//     alert('hi');
//     this.productComponentData = this.poChartData.getProductComponentData();
//   }
  loadSupplyChainGraph(){
    var self = this;
    Highcharts.chart('organizationcontainer', self.option);
  }
  onInputChange(event: any){
    console.log(event.value);
  }
  option : any = {
    chart: {
        height: 600,
        inverted: true
    },

    title: {
        text: 'Supply Chain'
    },

    accessibility: {
        point: {
            descriptionFormat: '{add index 1}. {toNode.name}' +
                '{#if (ne toNode.name toNode.id)}, {toNode.id}{/if}, ' +
                'reports to {fromNode.id}'
        }
    },

    series: [{
        type: 'organization',
        name: 'Highsoft',
        keys: ['from', 'to'],
        data: [
            ['ABC_Limited', 'Lakhani_Fabrics'],
            ['ABC_Limited', 'Gupta_Manufacture'],
      
            ['Lakhani_Fabrics', 'Pearl_yarn'],
            ['Lakhani_Fabrics', 'Hindustan_Limited'],
            ['Lakhani_Fabrics', 'Vishnu_Apparels'],
      
            ['Pearl_yarn', 'YSC_Enterprises'],
            ['Pearl_yarn', 'Creative_Buttons'],
      
            ['YSC_Enterprises', 'SLN_Enterprises']
            
        ],
        levels: [{
            level: 0,
            color: 'silver',
            dataLabels: {
                style: {
                    fontSize: '14px'
                },
                color: 'black'
            },
            height: 25
        }, {
            level: 1,
            color: 'silver',
            dataLabels: {
                style: {
                    fontSize: '14px'
                },
                color: 'black'
            },
            height: 25
        }, {
            level: 2,
            color: '#980104',
            dataLabels: {
                style: {
                    fontSize: '14px'
                },
                color: 'black'
            }
        }, {
            level: 4,
            color: '#359154',
            dataLabels: {
                style: {
                    fontSize: '14px'
                },
                color: 'black'
            }
        }],
        nodes: [
         {
            id: 'ABC_Limited',
            name: 'ABC Limited',
            title: 'Textitle Fusion Fabric',
            color: '#00E272'
        }, {
            id: 'Lakhani_Fabrics',
            name: 'Lakhani Fabrics',
            title: 'Textitle Fusion Fabric',
            color: '#FE6A35'
        }, {
            id: 'Gupta_Manufacture',
            name: 'Gupta Manufacture',
            title: 'Textitle Fusion Fabric',
            color: '#FE6A35'
        }, {
            id: 'Pearl_yarn',
            name: 'Pearl yarn',
            title: 'Textitle Fusion Fabric',
            color: '#2CAFFE'
        }, {
            id: 'Hindustan_Limited',
            name: 'Hindustan Limited',
            title: 'Textitle Fusion Fabric',
            color: '#2CAFFE'
        }, {
            id: 'Vishnu_Apparels',
            name: 'Vishnu Apparels',
            title: 'Textitle Fusion Fabric',
            color: '#2CAFFE'
        }, {
            id: 'YSC_Enterprises',
            name: 'YSC Enterprises',
            color: '#d2b4de'
        }, {
            id: 'Creative_Buttons',
            name: 'Creative Buttons',
            color: '#d2b4de'
        }, {
            id: 'SLN_Enterprises',
            name: 'SLN Enterprises',
            color: '#d2b4de'
        }],
        colorByPoint: false,
        color: '#007ad0',
        dataLabels: {
            color: 'white'
        },
        borderColor: 'white',
        nodeWidth: 'auto'
    }],
    tooltip: {
        outside: true
    },
    exporting: {
        allowHTML: true,
        sourceWidth: 800,
        sourceHeight: 600
    }

}
}