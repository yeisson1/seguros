export const adjustSkuItemForPixelEvent = (skuItem: any) => {
    // Changes this `/Apparel & Accessories/Clothing/Tops/`
    // to this `Apparel & Accessories/Clothing/Tops`
    const category = skuItem.category ? skuItem.category.slice(1, -1) : ''
  
    return {
      skuId: skuItem.id,
      variant: skuItem.variant,
      price: skuItem.price,
      name: skuItem.name,
      quantity: skuItem.quantity,
      productId: skuItem.productId,
      productRefId: skuItem.productRefId,
      brand: skuItem.brand,
      category,
      detailUrl: skuItem.detailUrl,
      imageUrl: skuItem.imageUrl,
      referenceId: skuItem?.referenceId?.[0]?.Value,
    }
  }