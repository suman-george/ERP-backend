import type { Schema, Struct } from '@strapi/strapi';

export interface SharedSaleItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_sale_items';
  info: {
    displayName: 'SaleItem';
    icon: 'check';
  };
  attributes: {
    Price: Schema.Attribute.Integer;
    Product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    Quantity: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.sale-item': SharedSaleItem;
    }
  }
}
