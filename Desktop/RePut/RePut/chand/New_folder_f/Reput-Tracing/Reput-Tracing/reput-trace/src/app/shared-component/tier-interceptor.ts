export interface OrgNode {
    id?: string;
  name: string;
  description?: string;
  hasDocuments?: boolean;
  children?: OrgNode[];
  parentId?: string;
  }