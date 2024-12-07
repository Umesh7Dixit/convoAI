import { Injectable } from '@angular/core';
import { OrgNode } from '../shared-component/tier-interceptor';

@Injectable({
  providedIn: 'root'
})
export class PoDataService {

  constructor() { }

  // getRandomData(){

  //   const generateLargeData = (name: string, depth: number, breadth: number): any => {
  //     const createChildren = (parentName: string, level: number): any[] => {
  //       if (level > depth) return [];
  //       return Array.from({ length: breadth }, (_, index) => ({
  //         name: `${parentName} - Child ${index + 1}`,
  //         description: `Tier ${level}`,
  //         hasDocuments: Math.random() > 0.2,
  //         children: createChildren(`${parentName} - Child ${index + 1}`, level + 1)
  //       }));
  //     };
    
  //     return {
  //       name,
  //       description: 'Root Node',
  //       hasDocuments: true,
  //       children: createChildren(name, 1)
  //     };
  //   };
    
  //   const largeData = generateLargeData('Root Node', 10, 3);

  //   return largeData;
    
  // }

  getSampleData1(): OrgNode {
    return {
      name: 'ABS Limited',
      description: 'Textile fusion fabrics',
      hasDocuments: true,
      children: [
        {
          name: 'Lakhani fabrics',
          description: 'Textile fusion fabrics',
          hasDocuments: true,
          children: [
            {
              name: 'Pearl yarn',
              description: 'Textile fusion fabrics',
              hasDocuments: false,
              children: [
                {
                  name: 'YSC enterprises',
                  description: 'Textile fusion fabrics',
                  hasDocuments: true,
                }

              ]
            },
            {
              name: 'Hindustan Limited',
              description: 'Textile fusion fabrics',
              hasDocuments: true,
              children: [
                {
                  name: 'Creative buttons',
                  description: 'Textile fusion fabrics',
                  hasDocuments: false
                }
              ]
            },
            {
              name: 'Vishnu apparels',
              description: 'Textile fusion fabrics',
              hasDocuments: true,
              children: [
                {
                  name: 'SLN enterprises',
                  description: 'Textile fusion fabrics',
                  hasDocuments: true
                }
              ]
            }
          ]
        },
        {
          name: 'Gupta manufacturers',
          description: 'Textile fusion fabrics',
          hasDocuments: true,
          children: [
            {
              name: 'WarmFibers Ltd',
              description: 'Textile fusion fabrics',
              hasDocuments: true,
              children: [
                {
                  name: 'Yarn Masters',
                  description: 'Textile fusion fabrics',
                  hasDocuments: false
                },
                {
                  name: 'FineWeave Industries',
                  description: 'Textile fusion fabrics',
                  hasDocuments: true
                },
                {
                  name: 'PrimeTextiles Co.',
                  description: 'Textile fusion fabrics',
                  hasDocuments: true
                }
              ]
            },
            {
              name: 'Trendy Knitworks',
              description: 'Textile fusion fabrics',
              hasDocuments: false
            },
            {
              name: 'Royal Embroidery',
              description: 'Textile fusion fabrics',
              hasDocuments: true
            }
          ]
        },
        {
          name: 'Lush Fabrics',
          description: 'Textile fusion fabrics',
          hasDocuments: true
        }
      ]
    };
  }


getProductComponentData1(): OrgNode {
  return {
    name: 'Dye-Blue',
    description: 'ABS limited',
    hasDocuments: true,
    children: [
      {
        name: 'Carboxylic acid',
        description: 'Gupta chemicals',
        hasDocuments: true,
        children: [
          {
            name: 'Buttons',
            description: 'Tiruppur suppliers',
            hasDocuments: true,
            children: [
              {
                name: 'Dye-blue',
                description: 'Chakra colours',
                hasDocuments: false,
              }

            ]
          },
          {
            name: 'Dye-green',
            description: 'Vishnu dying pvt ltd',
            hasDocuments: true,
            children: [
              {
                name: 'Natural dye-yellow',
                description: 'Sri devi fabrics',
                hasDocuments: true
              }
            ]
          },
          {
            name: 'Natural dye-Red',
            description: 'Remo dying and tying',
            hasDocuments: false,
            children: [
              {
                name: 'Caustic soda',
                description: 'Kavya chemicals',
                hasDocuments: true
              }
            ]
          }
        ]
      },
      {
        name: 'Sulphonic acid',
        description: 'Chandra acids',
        hasDocuments: true
      }
    ]
  };
}

getProductComponentData2(): OrgNode {
  return {
    name: 'Cotton Fabric',
    description: 'Delta Textiles Ltd',
    hasDocuments: true,
    children: [
      {
        name: 'Linen Weave',
        description: 'SilkSpun Fabrics',
        hasDocuments: true,
        children: [
          {
            name: 'Dye-Green',
            description: 'Classic Dyes Co.',
            hasDocuments: true,
            children: [
              {
                name: 'Natural Dye-Yellow',
                description: 'Spectrum Weavers',
                hasDocuments: false,
              }

            ]
          },
          {
            name: 'Natural-Dye Red',
            description: 'Evercolor Textiles',
            hasDocuments: true,
            children: [
              {
                name: 'Caustic Soda',
                description: 'Global Chemicals Ltd',
                hasDocuments: true
              }
            ]
          },
          {
            name: 'Thread',
            description: 'FiberTech Industries',
            hasDocuments: false,
            children: [
              {
                name: 'Natural Dye-Yellow',
                description: 'PureColor Dyes',
                hasDocuments: true
              }
            ]
          }
        ]
      },
      {
        name: 'Dye-Blue',
        description: 'Arya Dyes & Chemicals',
        hasDocuments: true
      },
      {
        name: 'Linen Finish Treatment',
        description: 'Greenfield Chemicals',
        hasDocuments: true,
        children:[
          {
            name: 'Zipper',
            description: 'Prime Fasteners Pvt Ltd',
            hasDocuments: true,
          }
        ]
      }
    ],
  }
}

getProductComponentData3(): OrgNode {
  return {
    name: 'Polyester Fabric',
    description: 'PrimePoly Fabrics',
    hasDocuments: true,
    children: [
      {
        name: 'Nylon Blend',
        description: 'QuickTex Materials',
        hasDocuments: true,
        children: [
          {
            name: 'Button',
            description: 'Luxe Fasteners Pvt Ltd',
            hasDocuments: true,
            children: [
              {
                name: 'Thread',
                description: 'SuperThread Industries',
                hasDocuments: false,
              }

            ]
          },
          {
            name: 'Dye-Green',
            description: 'FiberDye Pvt Ltd',
            hasDocuments: true,
            children: [
              {
                name: 'Natural Dye-Yellow',
                description: 'PureColor Dyes',
                hasDocuments: true
              }
            ]
          },
          {
            name: 'Natural-Dye Red',
            description: 'EcoDye Solutions',
            hasDocuments: false,
            children: [
              {
                name: 'Caustic Soda',
                description: 'BrightChem Co.',
                hasDocuments: true
              }
            ]
          }
        ]
      },
      {
        name: 'Dye-Black',
        description: 'Elite Dyes',
        hasDocuments: true,
        children:[
          {
            name: 'Zipper',
            description: 'ZipMaster Industries',
            hasDocuments: true,
          }
        ]
      },
      {
        name: 'Polyester Coating',
        description: 'StrongFiber Dyes & Chemicals',
        hasDocuments: true,
      },
      {
        name: 'Wool Yarn',
        description: 'SoftSheen Wool Co.',
        hasDocuments: true,
      }
      
    ],
  }
}

getProcessData1(): OrgNode {
  return {
    name: 'Dyeing',
    description: 'ABS limited',
    hasDocuments: true,
    children: [
      {
        name: 'Weaving',
        description: 'Gupta factory',
        hasDocuments: true,
        children: [
          {
            name: 'Ginning',
            description: 'Tiruppur garments',
            hasDocuments: true,
            children: [
              {
                name: 'Packing',
                description: 'Chakra packaging',
                hasDocuments: false,
              }

            ]
          },
          {
            name: 'Weaving',
            description: 'Vishnu pvt ltd',
            hasDocuments: true,
            children: [
              {
                name: 'Cutting',
                description: 'Sri devi fabrics',
                hasDocuments: true
              }
            ]
          },
          {
            name: 'Sewing',
            description: 'Remo producing unit',
            hasDocuments: true,
            children: [
              {
                name: 'Processing',
                description: 'Kavya agencies',
                hasDocuments: true
              }
            ]
          }
        ]
      },
      {
        name: 'Spinning',
        description: 'Chandra ltd',
        hasDocuments: true
      }
    ]
  };
}

getProcessData2(): OrgNode {
  return {
    name: 'Fabric Dyeing',
    description: 'VibrantHue Dyes Ltd.',
    hasDocuments: true,
    children: [
      {
        name: 'Cutting',
        description: 'SharpCut Garment Works',
        hasDocuments: true,
        children: [
          {
            name: 'Shaping',
            description: 'Tiruppur garments',
            hasDocuments: true,
            children: [
              {
                name: 'Final Quality Check',
                description: 'PerfectFinish QC Services',
                hasDocuments: false,
              }

            ]
          },
          {
            name: 'Stitching',
            description: 'NeedleWorks Apparel',
            hasDocuments: true,
            children: [
              {
                name: 'Packing',
                description: 'PackPerfect Solutions Inc.',
                hasDocuments: true
              }
            ]
          },
          {
            name: 'Adding Trims',
            description: 'TrendyTrims Ltd.',
            hasDocuments: true,
            children: [
              {
                name: 'Tagging',
                description: 'LabelCraft Ltd.',
                hasDocuments: true
              }
            ]
          }
        ]
      },
      {
        name: 'Weaving',
        description: 'SilkWeave Textiles Co.',
        hasDocuments: true
      },
      {
        name: 'Spinning',
        description: 'SpinMaster Yarns Pvt. Ltd.',
        hasDocuments: true,
        children: [
          {
            name: 'Stitching',
            description: 'ThreadCraft Apparel',
            hasDocuments: true,
            children: [
              {
                  name: 'Embellishing',
                  description: 'GlamorTrim Accessories',
                  hasDocuments: true,
              }
            ]
          }
        ]
      }
    ]
  };
}

getProcessData3(): OrgNode {
  return {
    name: 'Yarn Dyeing',
    description: 'ColorSpin Dyes Ltd.',
    hasDocuments: true,
    children: [
      {
        name: 'Spinning',
        description: 'WoolSpin Industries',
        hasDocuments: true,
        children: [
          {
            name: 'Stitching',
            description: 'NeedleWorks Apparel',
            hasDocuments: true,
            children: [
              {
                name: 'Finishing',
                description: 'FinestFold Textiles Ltd.',
                hasDocuments: false,
              }

            ]
          },
          {
            name: 'Adding Trims',
            description: 'TrendyTrims Ltd.',
            hasDocuments: true,
            children: [
              {
                name: 'Packing',
                description: 'WrapPack Solutions',
                hasDocuments: true
              }
            ]
          },
          {
            name: 'Quality Control',
            description: 'PrimeInspect QC Services',
            hasDocuments: true,
            children: [
              {
                name: 'Tagging',
                description: 'TagRight Industries',
                hasDocuments: true
              }
            ]
          }
        ]
      },
      {
        name: 'Knitting',
        description: 'KnitNest Manufacturing',
        hasDocuments: true
      },
      {
        name: 'Shaping',
        description: 'FormFit Garments Pvt. Ltd.',
        hasDocuments: true,
        children: [
          {
            name: 'Adding Zippers',
            description: 'ZipPerfect Solutions',
            hasDocuments: true,
            children: [
              {
                  name: 'Final Pressing',
                  description: 'PressMax Textile Solutions',
                  hasDocuments: true,
              }
            ]
          }
        ]
      }
    ]
  };
}


getSampleData2(): OrgNode {
  return {
    name: 'KnitPro Mills',
    description: 'Textile fusion fabrics',
    hasDocuments: true,
    children: [
      {
        name: 'WarmFibers Ltd',
        description: 'Textile fusion fabrics',
        hasDocuments: true,
        children: [
          {
            name: 'Yarn Masters',
            description: 'Textile fusion fabrics',
            hasDocuments: true,
            children: [
              {
                name: 'Cozy Wool Enterprises',
                description: 'Textile fusion fabrics',
                hasDocuments: true,
              }

            ]
          },
          {
            name: 'FineWeave Industries',
            description: 'Textile fusion fabrics',
            hasDocuments: true,
            children: [
              {
                name: 'WoolCraft Ltd',
                description: 'Textile fusion fabrics',
                hasDocuments: true
              }
            ]
          },
          {
            name: 'PrimeTextiles Co.',
            description: 'Textile fusion fabrics',
            hasDocuments: true,
            children: [
              {
                name: 'Silken Threads Ltd',
                description: 'Textile fusion fabrics',
                hasDocuments: true
              }
            ]
          }
        ]
      },
      {
        name: 'Trendy Knitworks',
        description: 'Textile fusion fabrics',
        hasDocuments: true
      },
      {
        name: 'Royal Embroidery',
        description: 'Textile fusion fabrics',
        hasDocuments: false
      }
    ]
  };
}

getSampleData3(): OrgNode {
  return {
    name: 'Deluxe Outerwear Co.',
    description: 'Textile fusion fabrics',
    hasDocuments: true,
    children: [
      {
        name: 'Trendy Stitchworks',
        description: 'Textile fusion fabrics',
        hasDocuments: true,
      },
      {
        name: 'Classic Fabrics',
        description: 'Textile fusion fabrics',
        hasDocuments: true,
        children: [
          {
            name: 'Apex Weavers',
            description: 'Textile fusion fabrics',
            hasDocuments: true,
            children: [
              {
                name: 'Fabrica Materials',
                description: 'Textile fusion fabrics',
                hasDocuments: true,
              }

            ]
          },
          {
            name: 'Global Threads Inc.',
            description: 'Textile fusion fabrics',
            hasDocuments: true,
            children: [
              {
                name: 'CozySew Enterprises',
                description: 'Textile fusion fabrics',
                hasDocuments: true
              }
            ]
          },
          {
            name: 'FibreCraft Mills',
            description: 'Textile fusion fabrics',
            hasDocuments: true,
            children: [
              {
                name: 'Elite Stitch',
                description: 'Textile fusion fabrics',
                hasDocuments: true
              }
            ]
          }
        ]
      },
      {
        name: 'Elegant Weavers',
        description: 'Textile fusion fabrics',
        hasDocuments: false
      }
    ]
  };
}

}


