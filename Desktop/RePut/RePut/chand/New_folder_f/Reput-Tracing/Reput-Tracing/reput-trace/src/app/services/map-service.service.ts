import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapServiceService {

  constructor() { }

  getNetworkViewData(){
    return {
       // Tier 1 Nodes
  'India': {
    tier: '',
    sustainabilityRating: '',
    location: 'Pan-India Network',
    sustainabilityMessage: ''
},

// Tier 2 Nodes - Companies
'ABS Limited': {
    tier: 'Tier 2',
    sustainabilityRating: 7.2,
    location: 'Mumbai, Maharashtra',
    sustainabilityMessage: 'Committed to reducing carbon footprint in textile manufacturing'
},
'Glamour Textiles': {
    tier: 'Tier 2',
    sustainabilityRating: 6.8,
    location: 'Surat, Gujarat',
    sustainabilityMessage: 'Implementing eco-friendly dyeing processes'
},
'PureCotton Fabrics': {
    tier: 'Tier 2',
    sustainabilityRating: 8.0,
    location: 'Bangalore, Karnataka',
    sustainabilityMessage: 'Focusing on organic cotton sourcing'
},
'Luxe Looms Ltd': {
    tier: 'Tier 2',
    sustainabilityRating: 8.0,
    location: 'Bangalore, Karnataka',
    sustainabilityMessage: 'Focusing on organic cotton sourcing'
},
'Deluxe Outerwear Co.': {
    tier: 'Tier 2',
    sustainabilityRating: 8.0,
    location: 'Bangalore, Karnataka',
    sustainabilityMessage: 'Focusing on organic cotton sourcing'
},
'Delta Textiles Ltd': {
    tier: 'Tier 2',
    sustainabilityRating: 8.0,
    location: 'Bangalore, Karnataka',
    sustainabilityMessage: 'Focusing on organic cotton sourcing'
},
'Noble Wool Co': {
    tier: 'Tier 2',
    sustainabilityRating: 8.0,
    location: 'Bangalore, Karnataka',
    sustainabilityMessage: 'Focusing on organic cotton sourcing'
},
'PrimePoly Fabrics': {
    tier: 'Tier 2',
    sustainabilityRating: 8.0,
    location: 'Bangalore, Karnataka',
    sustainabilityMessage: 'Focusing on organic cotton sourcing'
},
'Golden Loom Silk Co': {
    tier: 'Tier 2',
    sustainabilityRating: 8.0,
    location: 'Bangalore, Karnataka',
    sustainabilityMessage: 'Focusing on organic cotton sourcing'
},
// Add more Tier 2 nodes...

// Tier 3 Nodes - Suppliers
'Lakhani fabrics': {
    tier: 'Tier 3',
    sustainabilityRating: 6.5,
    location: 'Ahmedabad, Gujarat',
    sustainabilityMessage: 'Gradual adoption of water-efficient manufacturing'
},
// Continue with more Tier 3 nodes...

'Gupta manufacturers': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},

'Lush Fabrics': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},

'Lush Fabric': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},

'Fresh Weave Textiles': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Royal Embrodery': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Urban Threads Ltd': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Fine Yarn Textiles': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Elegant Weavers': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Trendy Stitchworks': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Classic Fabrics': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Arya Dyes & Chemicals': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Greenfield Chemicals': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'CraftTech Dyes': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Alpine Yarn Ltd': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'StrongFiber Dyes & Chemicals': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Elite Dyes': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'SilkArt Dyes Pvt Ltd': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'PureDye Chemicals': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},


// Tier 4 Nodes - Sub-suppliers

'Pearl yarn': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},

'Hindustan Limited': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Vishnu apparels': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'WarmFibers Ltd': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Trendy Knitworks': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Royal Embroidery': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},

'Bright Threads Ltd': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Fabric Dynasty': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Classic Garment Makers': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Colorstitch Enterprises': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Trendy Buttons': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Fine Stitches Ltd': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'KnitPro Mills': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'WarmFiber Ltd': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},


'Trendy Knitwork': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'YarnSolutions Co.': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'FineWeave Textiles': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'SoftSpun Fabrics': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Stitches Textiles': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},





'FabricMasters Ltd': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},

'CottonSew Industries': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'WoolCraft Industries': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Soft Silk Mills': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'BrightSew Textiles': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'SilkNStuff Enterprises': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},

'ButtonWorks': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},

'Woolix Ltd': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Apex Weavers': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Global Threads Inc': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'FibreCraft Mills': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'CozySew Enterprises': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Fabrica Materials': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Elite Stitch': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Prime Fasteners Pvt Ltd': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Classic Dyes Co': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Evercolor Textiles': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'FiberTech Industries': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Spectrum Weavers': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},

'Global Chemicals Ltd': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},

'Luxe Fasteners Pvt Ltd': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'FiberDye Pvt Ltd': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'EcoDye Solutions': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'SuperThread Industries': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'PureColor Dyes': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},

'BrightChem Co.': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'ZipMaster Industries': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'NatureTint Dyes Pvt Ltd': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Vibrant Dyestuffs Co': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'TopDye Industries': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},

'Global Chemical Supplies': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'HighWeave Textiles': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'Silk Thread Masters': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'NatureWeave Dyes': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'LeafTints Textiles': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'FineFiber Threads': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'SunDye Co': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
'CleanChem Industries': {
    tier: 'Tier 4',
    sustainabilityRating: 5.7,
    location: 'Ichalkaranji, Maharashtra',
    sustainabilityMessage: 'Initial steps towards sustainable yarn production'
},
// Add more Tier 4 nodes as needed

    }
  }

  getCountryCoordinates(){
    return {
        data:[
            {
                  id: '1',
                  name: 'Afghanistan',
                  color: '#FF5733',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [67.7100, 33.9391]
                  }
                },
                {
                  id: '2',
                  name: 'Argentina',
                  color: '#33FF57',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [-63.6167, -38.4161]
                  }
                },
                {
                  id: '3',
                  name: 'Australia',
                  color: '#3357FF',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [133.7751, -25.2744]
                  }
                },
                {
                  id: '4',
                  name: 'Brazil',
                  color: '#FF33A1',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [-51.9253, -14.2350]
                  }
                },
                {
                  id: '5',
                  name: 'Canada',
                  color: '#FFC300',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [-106.3468, 56.1304]
                  }
                },
                {
                  id: '6',
                  name: 'China',
                  color: '#DAF7A6',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [104.1954, 35.8617]
                  }
                },
                {
                  id: '7',
                  name: 'Egypt',
                  color: '#900C3F',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [30.8025, 26.8206]
                  }
                },
                {
                  id: '8',
                  name: 'Ethiopia',
                  color: '#581845',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [40.4897, 9.1450]
                  }
                },
                {
                  id: '9',
                  name: 'Finland',
                  color: '#74C0FC',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [25.7482, 61.9241]
                  }
                },
                {
                  id: '10',
                  name: 'France',
                  color: '#E4FF33',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [1.8883, 46.6034]
                  }
                },
                {
                  id: '11',
                  name: 'Germany',
                  color: '#E63946',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [10.4515, 51.1657]
                  }
                },
                {
                  id: '12',
                  name: 'Greece',
                  color: '#1D3557',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [21.8243, 39.0742]
                  }
                },
                {
                  id: '13',
                  name: 'India',
                  color: '#FFB400',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [78.9629, 20.5937]
                  }
                },
                {
                  id: '14',
                  name: 'Indonesia',
                  color: '#6A0572',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [113.9213, -0.7893]
                  }
                },
                {
                  id: '15',
                  name: 'Iran',
                  color: '#8D99AE',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [53.6880, 32.4279]
                  }
                },
                {
                  id: '16',
                  name: 'Italy',
                  color: '#E76F51',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [12.5674, 41.8719]
                  }
                },
                {
                  id: '17',
                  name: 'Japan',
                  color: '#2A9D8F',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [138.2529, 36.2048]
                  }
                },
                {
                  id: '18',
                  name: 'Kenya',
                  color: '#264653',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [36.8172, -1.2864]
                  }
                },
                {
                  id: '19',
                  name: 'Mexico',
                  color: '#F4A261',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [-102.5528, 23.6345]
                  }
                },
                {
                  id: '20',
                  name: 'Morocco',
                  color: '#E9C46A',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [-7.0926, 31.7917]
                  }
                },
                {
                  id: '21',
                  name: 'Netherlands',
                  color: '#9B5DE5',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [5.2913, 52.1326]
                  }
                },
                {
                  id: '22',
                  name: 'New Zealand',
                  color: '#F15BB5',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [174.8860, -40.9006]
                  }
                },
                {
                  id: '23',
                  name: 'Nigeria',
                  color: '#00BBF9',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [8.6753, 9.0820]
                  }
                },
                {
                  id: '24',
                  name: 'Norway',
                  color: '#FC77C3',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [8.4689, 60.4720]
                  }
                },
                {
                  id: '25',
                  name: 'Pakistan',
                  color: '#FF6B6B',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [69.3451, 30.3753]
                  }
                },
                {
                  id: '26',
                  name: 'Peru',
                  color: '#A6D785',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [-75.0152, -9.1899]
                  }
                },
                {
                  id: '27',
                  name: 'Philippines',
                  color: '#FFD166',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [121.7740, 12.8797]
                  }
                },
                {
                  id: '28',
                  name: 'Russia',
                  color: '#118AB2',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [105.3188, 61.5240]
                  }
                },
                {
                  id: '29',
                  name: 'Saudi Arabia',
                  color: '#2D6A4F',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [45.0792, 23.8859]
                  }
                },
                {
                  id: '30',
                  name: 'South Africa',
                  color: '#9E0059',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [22.9375, -30.5595]
                  }
                },
                {
                  id: '31',
                  name: 'South Korea',
                  color: '#06D6A0',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [127.7669, 35.9078]
                  }
                },
                {
                  id: '32',
                  name: 'Spain',
                  color: '#EF476F',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [-3.7038, 40.4168]
                  }
                },
                {
                  id: '33',
                  name: 'Sweden',
                  color: '#06A77D',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [18.6435, 60.1282]
                  }
                },
                {
                  id: '34',
                  name: 'Turkey',
                  color: '#F95738',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [35.2433, 38.9637]
                  }
                },
                {
                  id: '35',
                  name: 'United Kingdom',
                  color: '#118AB2',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [-1.1743, 51.5099]
                  }
                },
                {
                  id: '36',
                  name: 'United States',
                  color: '#FF8066',
                  marker: {
                    radius: 5
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [-95.7129, 37.0902]
                  }
    }]
    }
  }
}
