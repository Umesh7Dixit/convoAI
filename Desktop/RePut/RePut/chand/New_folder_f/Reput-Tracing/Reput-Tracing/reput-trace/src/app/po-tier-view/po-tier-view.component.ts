import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { OrgNode } from '../shared-component/tier-interceptor';

@Component({
  selector: 'app-po-tier-view',
  standalone: true,  
  imports: [CommonModule],
  templateUrl: './po-tier-view.component.html',
  styleUrl: './po-tier-view.component.scss'
})
export class PoTierViewComponent implements AfterViewInit {
  @ViewChild('svgContainer') svgContainer!: ElementRef<SVGSVGElement>;

  private _data: OrgNode | null = null;
  groupedByTier: { level: number; nodes: OrgNode[] }[] = [];
  zoomLevel = 1; // Initial zoom level

  @Input() set dataChart(value: OrgNode) {
    if (value) {
      this._data = this.processTreeIds(value);
      this.processData(this._data);
      this.drawConnectionsWithDelay();
    }
  }

  triggerConnectionRedraw() {
    this.zoomLevel = 1;
    this.drawConnections();
  }

  onZoomChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.zoomLevel = parseFloat(input.value);
    //this.drawConnectionsWithDelay();
  }

  private processTreeIds(node: OrgNode, parentId?: string): OrgNode {
    const processedNode = { ...node };
    processedNode.id = Math.random().toString(36).substr(2, 9);
    processedNode.parentId = parentId;

    if (node.children) {
      processedNode.children = node.children.map(child =>
        this.processTreeIds(child, processedNode.id)
      );
    }

    return processedNode;
  }

  private processData(rootNode: OrgNode, level: number = 1) {
    this.groupedByTier = [];
    const queue: [OrgNode, number][] = [[rootNode, level]];

    while (queue.length > 0) {
      const [node, currentLevel] = queue.shift()!;

      let tier = this.groupedByTier.find(t => t.level === currentLevel);
      if (!tier) {
        tier = { level: currentLevel, nodes: [] };
        this.groupedByTier.push(tier);
      }
      tier.nodes.push(node);

      if (node.children) {
        node.children.forEach(child => {
          queue.push([child, currentLevel + 1]);
        });
      }
    }

    this.groupedByTier.sort((a, b) => a.level - b.level);
  }

  private drawConnectionsWithDelay() {
    // Longer delay to ensure full rendering
    setTimeout(() => {
      this.drawConnections();
    }, 500);
  }

  private drawConnections() {
    const svg = this.svgContainer.nativeElement;
    
    // Clear existing connections
    svg.innerHTML = '';

    // Set SVG dimensions to full container
    const container = svg.closest('.org-chart') as HTMLElement;
    svg.setAttribute('width', `${container.scrollWidth}px`);
    svg.setAttribute('height', `${container.scrollHeight}px`);

    this.groupedByTier.forEach((tier, tierIndex) => {
      if (tierIndex < this.groupedByTier.length - 1) {
        tier.nodes.forEach(node => {
          if (node.children?.length) {
            this.createConnectionsForNode(svg, node);
          }
        });
      }
    });
  }

  private createConnectionsForNode(svg: SVGSVGElement, node: OrgNode) {
    const parentElement = document.querySelector(`[data-node-id="${node.id}"]`);

    if (parentElement) {
      const parentRect = parentElement.getBoundingClientRect();
      const svgRect = svg.getBoundingClientRect();

      node.children?.forEach((child, childIndex) => {
        const childElement = document.querySelector(`[data-node-id="${child.id}"]`);

        if (childElement) {
          const childRect = childElement.getBoundingClientRect();

          // Calculate connection points
          const startX = parentRect.left + parentRect.width / 2 - svgRect.left;
          const startY = parentRect.bottom - svgRect.top;
          const endX = childRect.left + childRect.width / 2 - svgRect.left;
          const endY = childRect.top - svgRect.top;

          // Create curved connection path
          this.createConnectionPath(svg, startX, startY, endX, endY);
        }
      });
    }
  }

  private createConnectionPath(
    svg: SVGSVGElement,
    startX: number,
    startY: number,
    endX: number,
    endY: number
  ) {
    // Calculate control points for a smooth curve
    const midY = (startY + endY) / 2;
    const controlPoint1Y = startY + (midY - startY) * 0.5;
    const controlPoint2Y = endY - (midY - startY) * 0.5;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `
      M ${startX},${startY}
      C ${startX},${controlPoint1Y}
        ${endX},${controlPoint2Y}
        ${endX},${endY}
    `);

    path.setAttribute('stroke', '#ddd');
    path.setAttribute('stroke-width', '2');
    path.setAttribute('fill', 'none');

    svg.appendChild(path);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataChart']) {
      this.drawConnectionsWithDelay();
    }
  }

  ngAfterViewInit() {
    this.drawConnectionsWithDelay();
  }

  
}


// triggerConnectionRedraw() {
  //   this.drawConnections();
  // }

  // private drawConnections() {
  //   const svg = this.svgContainer.nativeElement;
  //   svg.innerHTML = '';

  //   svg.setAttribute('width', '100%');
  //   svg.setAttribute('height', '100%');

  //   this.groupedByTier.forEach((tier, tierIndex) => {
  //     if (tierIndex < this.groupedByTier.length - 1) {
  //       tier.nodes.forEach(node => {
  //         if (node.children?.length) {
  //           const parentElement = document.querySelector(`[data-node-id="${node.id}"]`);

  //           // Calculate the vertical segments positions
  //           const parentRect = parentElement?.getBoundingClientRect();
  //           if (!parentElement || !parentRect) return;

  //           const svgRect = svg.getBoundingClientRect();
  //           const startX = parentRect.left + parentRect.width / 2 - svgRect.left;
  //           const startY = parentRect.bottom - svgRect.top;

  //           // Calculate the width needed for all children
  //           const childrenElements = node.children.map(child => ({
  //             child,
  //             element: document.querySelector(`[data-node-id="${child.id}"]`)
  //           })).filter(item => item.element);

  //           if (childrenElements.length === 0) return;

  //           // Draw the main vertical line from parent
  //           const verticalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  //           const middleY = startY + (parentRect.height / 2);
  //           verticalLine.setAttribute('x1', startX.toString());
  //           verticalLine.setAttribute('y1', startY.toString());
  //           verticalLine.setAttribute('x2', startX.toString());
  //           verticalLine.setAttribute('y2', middleY.toString());
  //           verticalLine.setAttribute('stroke', '#ddd');
  //           verticalLine.setAttribute('stroke-width', '2');
  //           svg.appendChild(verticalLine);

  //           // Draw horizontal connector line
  //           const firstChildRect = childrenElements[0].element!.getBoundingClientRect();
  //           const lastChildRect = childrenElements[childrenElements.length - 1].element!.getBoundingClientRect();
  //           const leftX = firstChildRect.left + firstChildRect.width / 2 - svgRect.left;
  //           const rightX = lastChildRect.left + lastChildRect.width / 2 - svgRect.left;

  //           const horizontalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  //           horizontalLine.setAttribute('x1', leftX.toString());
  //           horizontalLine.setAttribute('y1', middleY.toString());
  //           horizontalLine.setAttribute('x2', rightX.toString());
  //           horizontalLine.setAttribute('y2', middleY.toString());
  //           horizontalLine.setAttribute('stroke', '#ddd');
  //           horizontalLine.setAttribute('stroke-width', '2');
  //           svg.appendChild(horizontalLine);

  //           // Draw individual lines connecting each child to the horizontal line
  //           childrenElements.forEach(({ child, element }) => {
  //             const childRect = element!.getBoundingClientRect();
  //             const childX = childRect.left + childRect.width / 2 - svgRect.left;
  //             const childY = childRect.top - svgRect.top;

  //             const childLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  //             childLine.setAttribute('x1', childX.toString());
  //             childLine.setAttribute('y1', middleY.toString());
  //             childLine.setAttribute('x2', childX.toString());
  //             childLine.setAttribute('y2', childY.toString());
  //             childLine.setAttribute('stroke', '#ddd');
  //             childLine.setAttribute('stroke-width', '2');
  //             svg.appendChild(childLine);
  //           });
  //         }
  //       });
  //     }
  //   });
  // }
