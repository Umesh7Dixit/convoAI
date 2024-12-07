import { Component,ViewEncapsulation  } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import Networkgraph from 'highcharts/modules/networkgraph';
import exporting from 'highcharts/modules/exporting';
import offlineExporting from 'highcharts/modules/offline-exporting';

import * as Highchartsmaps from 'highcharts/highmaps';
import { TooltipFormatterContextObject } from 'highcharts/highcharts.src';
import { MapServiceService } from '../../services/map-service.service';


const topology = require('../../../asset/json/world-highres.topo.json');

let nodeDetailsMap: {[key: string]: any} = {};

interface CustomPointOptions extends Highcharts.PointOptionsObject {
  'hc-key': string; // The property you're using in the map data
  color: string;
  info: string;
  geometry?: any; // Optional if you have geometry data for zooming
}

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [HighchartsChartModule,CommonModule],
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.scss',
  encapsulation: ViewEncapsulation.None 
})
export class MapViewComponent {
  constructor( private mapService: MapServiceService
  ) {
    
  }

  date: Date;
  finalDate: string;
  dateOptions:any = {
    month: 'short',  // Abbreviated month (e.g., Jan, Feb)
    day: 'numeric',  // Day of the month
    year: 'numeric', // Full year
    hour: 'numeric', // Hour (12-hour format by default)
    minute: '2-digit', // Minutes with leading zero if needed
    hour12: true,     // Use 12-hour format with AM/PM
  };
  messages = [
    { id: 1, country: 'Mexico', message: 'Expect delays in your supply chain due to adverse weather conditions affecting transport networks. We recommend planning for extended lead times.',coordinates: [-102.5528, 23.6345] },
    { id: 2, country: 'Brazil', message: 'Supply chain disruptions are anticipated due to ongoing industrial strikes. Please adjust your schedules accordingly and monitor updates.',coordinates: [-51.9253, -14.2350] },
    { id: 3, country: 'Germany', message: 'Delays are expected in your supply chain due to congestion at major ports. Consider alternative shipping methods where possible.', coordinates: [10.4515, 51.1657] },
    { id: 4, country: 'India', message: 'Regional infrastructure maintenance is causing delays in supply chain operations. We advise temporary adjustments to delivery timelines.', coordinates: [78.9629, 20.5937] },
    { id: 5, country: 'United States', message: 'Severe winter storms are impacting logistics across several states. Expect delays in shipment and plan ahead to mitigate disruptions.', coordinates: [-95.7129, 37.0902] },
    { id: 6, country: 'Bangladesh', message: 'Expect delays in your supply chain due to regional conditions. We recommend waiting until the situation stabilises.', coordinates: [ 90.3563, 23.6850] }
  ];

  markerRadius = {
      id: '1',
      name: '',
      color: '#ff0000',
      marker: {
        radius: 10
      },
      geometry: {
          type: 'Point',
          coordinates: [] as unknown as [number, number]
      }
  }
  
  selectedMessage: string = '';
  selectedCountry: string = '';

  statistics = [
    { label: 'Countries', value: 36 },
    { label: 'Suppliers', value: 195 },
    { label: 'Facilities', value: 226 },
    { label: 'Direct suppliers', value: 66 }
  ];

  tiers = [
    { tier: 1, count: 24 },
    { tier: 2, count: 64 },
    { tier: 3, count: 52 },
    { tier: 4, count: 53 },
    { tier: 5, count: 27 }
  ];
  
  view: any = {
    map: true,
    network: false
  }
  AllChart: any = {
    mainChart : null,
    mapchart : null
  }
  options : any = {
    chart: {
        type: 'networkgraph',
        height: '600px',
        backgroundColor: '#F8F9FA',
    },
    legend: {
    	enabled: true
    },
    title: {
        text: '',
        align: 'left'
    },
    plotOptions: {
        networkgraph: {
            keys: ['from', 'to'],
            layoutAlgorithm: {
                enableSimulation: true,
                gravitationalConstant: 0.1
            }
        }
    },
    tooltip: {
      useHTML: true,
      formatter: function (this: Highcharts.TooltipFormatterContextObject): string {
          // Get node name
          const nodeName = this.point.name;

          // Retrieve node details from the map
          const details = nodeDetailsMap[nodeName];

          // Fallback if no details are found
          if (!details) {
            return `
                <div style="padding: 10px; background-color: #f0f8ff; border: 1px solid #cce7ff; border-radius: 8px; box-shadow: 2px 2px 6px rgba(0,0,0,0.2);">
                    <b style="color: red;">${nodeName}</b><br>
                    <span style="font-style: italic; color: #666;">No additional details available.</span>
                </div>
            `;
        }

        // Dynamically construct the tooltip content
        let tooltipContent = `
            <div style="padding: 10px; background-color: #f0f8ff; border: 1px solid #cce7ff; border-radius: 8px; box-shadow: 2px 2px 6px rgba(0,0,0,0.2);">
                <b style="color: #003366; font-size: 14px;">${nodeName} ${details.tier}</b><br>
        `;
        if (details.sustainabilityRating) {
          tooltipContent += `<b style="color: #0066cc;">Sustainability Rating:</b> ${details.sustainabilityRating}<br>`;
        }
        if (details.location) {
            tooltipContent += `<b style="color: #0066cc;">Location:</b> ${details.location}<br>`;
        }
       

        tooltipContent += `</div>`; // Close the tooltip container
        return tooltipContent;
      },
  },
    series: [{
        accessibility: {
            enabled: false
        },
        dataLabels: {
            enabled: true,
            linkFormat: '',
            style: {
                fontSize: '0.8em',
                fontWeight: 'normal'
            }
        },
        id: 'lang-tree',
        data: [

            ['India','ABS Limited'],
            ['India','Glamour Textiles'],
            ['India','PureCotton Fabrics'],
            ['India','Luxe Looms Ltd'],
            ['India','Deluxe Outerwear Co.'],
            ['India','Delta Textiles Ltd'],
            ['India','Noble Wool Co'],
            ['India','PrimePoly Fabrics'],
            ['India','Golden Loom Silk Co'],


            ['ABS Limited', 'Lakhani fabrics'],
            ['ABS Limited', 'Gupta manufacturers'],
            ['ABS Limited', 'Lush Fabrics'],

            ['Lakhani fabrics', 'Pearl yarn'],
            ['Lakhani fabrics', 'Hindustan Limited'],
            ['Lakhani fabrics', 'Vishnu apparels'],

            ['Gupta manufacturers', 'WarmFibers Ltd'],
            ['Gupta manufacturers', 'Trendy Knitworks'],
            ['Gupta manufacturers', 'Royal Embroidery'],

            ['Lush Fabrics','KnitPro Mills'],
            ['Lush Fabrics','WarmFiber Ltd'],
            ['Lush Fabrics','Trendy Knitwork'],

            ['Glamour Textiles','Lush Fabric'],
            ['Glamour Textiles','Royal Embrodery'],

            ['Lush Fabric','Bright Threads Ltd'],
            ['Lush Fabric','Fabric Dynasty'],
            ['Lush Fabric','Classic Garment Makers'],

            ['Royal Embrodery','Colorstitch Enterprises'],
            ['Royal Embrodery','Trendy Buttons'],
            ['Royal Embrodery','Fine Stitches Ltd'],

            ['PureCotton Fabrics','Urban Threads Ltd'],
            ['PureCotton Fabrics','Fresh Weave Textiles'],

            ['Urban Threads Ltd','YarnSolutions Co.'],
            ['Urban Threads Ltd','FineWeave Textiles'],
            ['Urban Threads Ltd','SoftSpun Fabrics'],

            ['Fresh Weave Textiles','CottonSew Industries'],
            ['Fresh Weave Textiles','FabricMasters Ltd'],
            ['Fresh Weave Textiles','Stitches Textiles'],

            ['Luxe Looms Ltd','Fine Yarn Textiles'],
            ['Luxe Looms Ltd','Elegant Weavers'],

            ['Fine Yarn Textiles','WoolCraft Industries'],
            ['Fine Yarn Textiles','Soft Silk Mills'],
            ['Fine Yarn Textiles','BrightSew Textiles'],

            ['Elegant Weavers','SilkNStuff Enterprises'],
            ['Elegant Weavers','ButtonWorks'],
            ['Elegant Weavers','Woolix Ltd'],

            ['Deluxe Outerwear Co.','Classic Fabrics'],
            ['Deluxe Outerwear Co.','Trendy Stitchworks'],

            ['Classic Fabrics','Apex Weavers'],
            ['Classic Fabrics','Global Threads Inc'],
            ['Classic Fabrics','FibreCraft Mills'],

            ['Trendy Stitchworks','CozySew Enterprises'],
            ['Trendy Stitchworks','Fabrica Materials'],
            ['Trendy Stitchworks','Elite Stitch'],

            ['Delta Textiles Ltd','Arya Dyes & Chemicals'],
            ['Delta Textiles Ltd','Greenfield Chemicals'],

            ['Arya Dyes & Chemicals','Prime Fasteners Pvt Ltd'],
            ['Arya Dyes & Chemicals','Classic Dyes Co'],
            ['Arya Dyes & Chemicals','Evercolor Textiles'],

            ['Greenfield Chemicals','FiberTech Industries'],
            ['Greenfield Chemicals','Spectrum Weavers'],
            ['Greenfield Chemicals','Global Chemicals Ltd'],

            ['Noble Wool Co','CraftTech Dyes'],
            ['Noble Wool Co','Alpine Yarn Ltd'],

            ['CraftTech Dyes','Luxe Fasteners Pvt Ltd'],
            ['CraftTech Dyes','FiberDye Pvt Ltd'],
            ['CraftTech Dyes','EcoDye Solutions'],

            ['Alpine Yarn Ltd','SuperThread Industries'],
            ['Alpine Yarn Ltd','PureColor Dyes'],
            ['Alpine Yarn Ltd','BrightChem Co.'],

            ['PrimePoly Fabrics','Elite Dyes'],
            ['PrimePoly Fabrics','StrongFiber Dyes & Chemicals'],

            ['Elite Dyes','ZipMaster Industries'],
            ['Elite Dyes','NatureTint Dyes Pvt Ltd'],
            ['Elite Dyes','Vibrant Dyestuffs Co'],

            ['StrongFiber Dyes & Chemicals','HighWeave Textiles'],
            ['StrongFiber Dyes & Chemicals','Global Chemical Supplies'],
            ['StrongFiber Dyes & Chemicals','TopDye Industries'],

            ['Golden Loom Silk Co','PureDye Chemicals'],
            ['Golden Loom Silk Co','SilkArt Dyes Pvt Ltd'],

            ['PureDye Chemicals','Silk Thread Masters'],
            ['PureDye Chemicals','NatureWeave Dyes'],
            ['PureDye Chemicals','LeafTints Textiles'],

            ['SilkArt Dyes Pvt Ltd','FineFiber Threads'],
            ['SilkArt Dyes Pvt Ltd','SunDye Co'],
            ['SilkArt Dyes Pvt Ltd','CleanChem Industries'],        

        ]
    }]
};
// data = {
//   t1: ['Vietnam','Tunisia','Bangladesh','China'],
//   t2: ['Nanjing','Changsha','Hanoi','Da Nang','Nha Trang','Tunis','Sfax','Sousse','Dhaka','Chattogram','Gazipur'],
//   t3: ['Taiyuan','Haikou','Guiyang','Ürümqi','Nanchang','Wuxi','Narayanganj','Cumilla','Mymensingh','Sylhet','Rajshahi','Khulna','Vinh','Hue','Buon Ma Thuot','Quy Nhon','Da Lat','Gò Công','Medinine','Zarzis','Tozeur','Zriba El Alia','El Kef','Al Huwariyah']
// }

data = {
  t1: ['India'],
  t2: ['ABS Limited', 'Glamour Textiles', 'PureCotton Fabrics','Luxe Looms Ltd', 'Deluxe Outerwear Co.','Delta Textiles Ltd','Noble Wool Co','PrimePoly Fabrics','Golden Loom Silk Co'],
  t3: ['Lakhani fabrics', 'Gupta manufacturers', 'Lush Fabrics', 'Lush Fabric', 'Royal Embrodery', 'Fresh Weave Textiles', 'Urban Threads Ltd','Fine Yarn Textiles','Elegant Weavers','Trendy Stitchworks','Classic Fabrics','Arya Dyes & Chemicals','Greenfield Chemicals','CraftTech Dyes','Alpine Yarn Ltd','StrongFiber Dyes & Chemicals','Elite Dyes','SilkArt Dyes Pvt Ltd','PureDye Chemicals'],
  t4: ['Pearl yarn', 'Hindustan Limited', 'Vishnu apparels', 'WarmFibers Ltd', 'Trendy Knitworks', 'Royal Embroidery', 'Bright Threads Ltd', 'Fabric Dynasty', 'Classic Garment Makers', 'Colorstitch Enterprises', 'Trendy Buttons', 'Fine Stitches Ltd', 'KnitPro Mills',
    'WarmFiber Ltd', 'Trendy Knitwork', 'YarnSolutions Co.', 'FineWeave Textiles', 'SoftSpun Fabrics','Stitches Textiles','FabricMasters Ltd','CottonSew Industries', 'WoolCraft Industries','Soft Silk Mills','BrightSew Textiles', 'SilkNStuff Enterprises', 'ButtonWorks', 'Woolix Ltd','Apex Weavers','Global Threads Inc','FibreCraft Mills','CozySew Enterprises','Fabrica Materials','Elite Stitch','Prime Fasteners Pvt Ltd','Classic Dyes Co','Evercolor Textiles','FiberTech Industries','Spectrum Weavers','Global Chemicals Ltd','Luxe Fasteners Pvt Ltd','FiberDye Pvt Ltd','EcoDye Solutions', 'SuperThread Industries', 'PureColor Dyes', 'BrightChem Co.','ZipMaster Industries', 'NatureTint Dyes Pvt Ltd', 'Vibrant Dyestuffs Co', 'TopDye Industries', 'Global Chemical Supplies', 'HighWeave Textiles', 'Silk Thread Masters', 'NatureWeave Dyes', 'LeafTints Textiles', 'FineFiber Threads', 'SunDye Co','CleanChem Industries' ]
}




  ngOnInit() {
    const randomIndex = Math.floor(Math.random() * this.messages.length);
    this.selectedMessage = this.messages[randomIndex].message;
    this.selectedCountry = this.messages[randomIndex].country;
    this.markerRadius.name = this.messages[randomIndex].country;
    this.markerRadius.geometry.coordinates = [ this.messages[randomIndex].coordinates[0],this.messages[randomIndex].coordinates[1]];
    this.date = new Date();
    this.finalDate = this.date.toLocaleString('en-US', this.dateOptions);

    nodeDetailsMap = this.mapService.getNetworkViewData();



    var self = this;
     Networkgraph(Highcharts);
     exporting(Highcharts);
     offlineExporting(Highcharts);
        self.activeview(true);

  }
 activeview(isMap: boolean){
  this.view.map = isMap;
  this.view.network = !isMap;
  this.loadGraph();
 }

 loadMap(){
    var self = this;
   const data: CustomPointOptions[] = [
        {
          'hc-key': 'af', // Afghanistan
          color: '#FF5733',
          info: 'There are (2) Tier 1, (4) Tier 2 suppliers'
        },
        {
          'hc-key': 'ar', // Argentina
          color: '#33FF57',
          info: 'There are (3) Tier 1, (5) Tier 2 suppliers'
        },
        {
          'hc-key': 'au', // Australia
          color: '#3357FF',
          info: 'There are (1) Tier 1, (3) Tier 2 suppliers'
        },
        {
          'hc-key': 'br', // Brazil
          color: '#FF33A1',
          info: 'There are (2) Tier 1, (6) Tier 2 suppliers'
        },
        {
          'hc-key': 'ca', // Canada
          color: '#FFC300',
          info: 'There are (4) Tier 1, (3) Tier 2 suppliers'
        },
        {
          'hc-key': 'cn', // China
          color: '#DAF7A6',
          info: 'There are (3) Tier 1, (5) Tier 2 suppliers'
        },
        {
          'hc-key': 'eg', // Egypt
          color: '#900C3F',
          info: 'There are (1) Tier 1, (2) Tier 2 suppliers'
        },
        {
          'hc-key': 'et', // Ethiopia
          color: '#581845',
          info: 'There are (2) Tier 1, (4) Tier 2 suppliers'
        },
        {
          'hc-key': 'fi', // Finland
          color: '#74C0FC',
          info: 'There are (2) Tier 1, (5) Tier 2 suppliers'
        },
        {
          'hc-key': 'fr', // France
          color: '#E4FF33',
          info: 'There are (3) Tier 1, (3) Tier 2 suppliers'
        },
        {
          'hc-key': 'de', // Germany
          color: '#E63946',
          info: 'There are (4) Tier 1, (4) Tier 2 suppliers'
        },
        {
          'hc-key': 'gr', // Greece
          color: '#1D3557',
          info: 'There are (1) Tier 1, (2) Tier 2 suppliers'
        },
        {
          'hc-key': 'in', // India
          color: '#FFB400',
          info: 'There are (5) Tier 1, (6) Tier 2 suppliers'
        },
        {
          'hc-key': 'id', // Indonesia
          color: '#6A0572',
          info: 'There are (2) Tier 1, (4) Tier 2 suppliers'
        },
        {
          'hc-key': 'ir', // Iran
          color: '#8D99AE',
          info: 'There are (3) Tier 1, (3) Tier 2 suppliers'
        },
        {
          'hc-key': 'it', // Italy
          color: '#E76F51',
          info: 'There are (2) Tier 1, (6) Tier 2 suppliers'
        },
        {
          'hc-key': 'jp', // Japan
          color: '#2A9D8F',
          info: 'There are (4) Tier 1, (5) Tier 2 suppliers'
        },
        {
          'hc-key': 'ke', // Kenya
          color: '#264653',
          info: 'There are (1) Tier 1, (2) Tier 2 suppliers'
        },
        {
          'hc-key': 'mx', // Mexico
          color: '#F4A261',
          info: 'There are (3) Tier 1, (5) Tier 2 suppliers'
        },
        {
          'hc-key': 'ma', // Morocco
          color: '#E9C46A',
          info: 'There are (2) Tier 1, (3) Tier 2 suppliers'
        },
        {
          'hc-key': 'nl', // Netherlands
          color: '#9B5DE5',
          info: 'There are (3) Tier 1, (4) Tier 2 suppliers'
        },
        {
          'hc-key': 'nz', // New Zealand
          color: '#F15BB5',
          info: 'There are (2) Tier 1, (2) Tier 2 suppliers'
        },
        {
          'hc-key': 'ng', // Nigeria
          color: '#00BBF9',
          info: 'There are (4) Tier 1, (6) Tier 2 suppliers'
        },
        {
          'hc-key': 'no', // Norway
          color: '#FC77C3',
          info: 'There are (1) Tier 1, (4) Tier 2 suppliers'
        },
        {
          'hc-key': 'pk', // Pakistan
          color: '#FF6B6B',
          info: 'There are (3) Tier 1, (5) Tier 2 suppliers'
        },
        {
          'hc-key': 'pe', // Peru
          color: '#A6D785',
          info: 'There are (2) Tier 1, (3) Tier 2 suppliers'
        },
        {
          'hc-key': 'ph', // Philippines
          color: '#FFD166',
          info: 'There are (3) Tier 1, (5) Tier 2 suppliers'
        },
        {
          'hc-key': 'ru', // Russia
          color: '#118AB2',
          info: 'There are (4) Tier 1, (6) Tier 2 suppliers'
        },
        {
          'hc-key': 'sa', // Saudi Arabia
          color: '#2D6A4F',
          info: 'There are (2) Tier 1, (5) Tier 2 suppliers'
        },
        {
          'hc-key': 'za', // South Africa
          color: '#9E0059',
          info: 'There are (3) Tier 1, (4) Tier 2 suppliers'
        },
        {
          'hc-key': 'kr', // South Korea
          color: '#06D6A0',
          info: 'There are (5) Tier 1, (3) Tier 2 suppliers'
        },
        {
          'hc-key': 'es', // Spain
          color: '#EF476F',
          info: 'There are (2) Tier 1, (4) Tier 2 suppliers'
        },
        {
          'hc-key': 'se', // Sweden
          color: '#06A77D',
          info: 'There are (4) Tier 1, (5) Tier 2 suppliers'
        },
        {
          'hc-key': 'tr', // Turkey
          color: '#F95738',
          info: 'There are (3) Tier 1, (4) Tier 2 suppliers'
        },
        {
          'hc-key': 'gb', // United Kingdom
          color: '#118AB2',
          info: 'There are (5) Tier 1, (6) Tier 2 suppliers'
        },
        {
          'hc-key': 'us', // United States
          color: '#FF8066',
          info: 'There are (3) Tier 1, (6) Tier 2 suppliers'
        }
  ];

  var mapOption : any = {
    chart: {
        map: topology
    },

    title: {
        text: 'Your suppliers  '
    },
    legend: {
        enabled: false
    },
    tooltip: {
        useHTML: true,
        headerFormat: '<b>{point.key}</b>:<br/>',
        pointFormat: '{point.info}'
    },

    mapView: {
      projection: {
        name: 'Miller' // or 'Mercator'
      },
      
        fitToGeometry: {
            type: 'MultiPoint',
            coordinates: [
                // Alaska west
                [-164, 54],
                // Greenland north
                [-35, 84],
                // New Zealand east
                [179, -38],
                // Chile south
                [-68, -55]
            ]
        }
    },

    series: [
        {
            data,
            keys: ['hc-key', 'color', 'info'],
            name: 'Coffee'
        },
        {
            type: 'mappoint',
            dataLabels: {
                format: '<b>{point.name}</b><br><span ' +
                    'style="font-weight: normal; opacity: 0.5">' +
                    '{point.custom.arrival}</span>',
                align: 'left',
                verticalAlign: 'middle'
            },
            data: [ this.markerRadius ],
            enableMouseTracking: false
        }
    ],
}

    self.AllChart.mapchart = Highchartsmaps.mapChart("mapcontainer", mapOption);

   
   
 }

 loadNetwork(){
    var self = this;
   
    

    Highcharts.addEvent(
        Highcharts.Series,
        'afterSetOptions',
        function (e: any) {
      
          const colors: any = Highcharts.getOptions().colors,
            nodes : any = {};
      
          if (
            this instanceof Highcharts.Series.types['networkgraph'] &&
            e.options.id === 'lang-tree'
          ) {

            e.options.data.forEach(function (link: any) {
              var data : any = self.data;
              var keys: any = Object.keys(self.data);
              var node0 = link[0];
              var node1 = link[1];
  
              keys.forEach(function(k: any){
                var index = data[k].indexOf(node0);
                var radius = 0;
                var color = '#';
                if(index > -1){
                  if(k == 't1'){
                    radius = 20;
                    color += 'C0C0C0';
                  }
                  else if(k == 't2'){
                    radius = 10;
                    color += 'd6c58d';
                  }
                  else if(k == 't3'){
                    radius = 5;
                    color += '326496';
                  }
                  else if(k == 't4'){
                    radius = 5;
                    color += '003366';
                  }

                  nodes[node0] = {
                    id: node0,
                    marker: {
                      radius: radius
                    },
                    color: color
                  };
                }
              })
  
              
              keys.forEach(function(k: any){
                var index = data[k].indexOf(node1);
                var radius = 0;
                var color = '#';
                if(index > -1){
                  if(k == 't1'){
                    radius = 20;
                    color += 'C0C0C0';
                  }
                  else if(k == 't2'){
                    radius = 10;
                    color += 'd6c58d';
                  }
                  else if(k == 't3'){
                    radius = 5;
                    color += '326496';
                  }
                  else if(k == 't4'){
                    radius = 5;
                    color += '003366';
                  }

                  nodes[node1] = {
                    id: node1,
                    marker: {
                      radius: radius
                    },
                    color: color
                  };
                }
              })
            });
      
            e.options.nodes = Object.keys(nodes).map(function (id) {
              return nodes[id];
            });
          }
        }
      );

      self.AllChart.mainChart = Highcharts.chart("networkcontainer", {
        ...self.options,
       exporting: {
          enabled: true,
          buttons: {
            contextButton: {
              menuItems: [{
                text: 'Download PNG',
                onclick: function(this: Highcharts.Chart) {
                  this.exportChartLocal({
                    type: 'image/png',
                    filename: 'network_chart'
                  });
                }
              }]
            }
          }
        }
      });
  
 }
 
 loadGraph(){
  var self = this;
  if(this.view.map){
    self.loadMap();
  }
  else if(this.view.network){
    self.loadNetwork();
  }
 }
}

