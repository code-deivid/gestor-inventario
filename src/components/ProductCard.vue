<script setup lang="ts">
import { defineProps } from 'vue'
import type { IProduct } from '@/types/product.js'

const props = defineProps<{
  product: IProduct
}>()

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price)
}
</script>
<template>
  <article class="products-grid">
    <div class="product-image">
      <img :src="props.product.image" :alt="props.product.name" loading="lazy" decoding="async" />
    </div>

    <div class="product-info">
      <span class="product-category">{{ props.product.category }}</span>

      <h3>{{ props.product.name }}</h3>

      <div class="product-footer">
        <span class="product-price">{{ formatPrice(props.product.price) }}</span>

        <span class="stock-badge" :class="{ 'out-of-stock': props.product.stock === 0 }">
          {{ props.product.stock > 0 ? `${props.product.stock} disponibles` : 'Agotado' }}
        </span>
      </div>
    </div>
  </article>
</template>

<style scoped>
/* Grid responsive */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: 24px;
}

/* Tarjetas */
.product-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
  border: 1px solid #eaeaea;
  border-radius: 20px;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 35px rgb(0 0 0 / 7%);
}

/* Imágenes */
.product-image {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 240px;
  padding: 24px;
  overflow: hidden;
  background: #f5f5f7;
}

.product-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.06);
}

/* Información */
.product-info {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 24px;
}

.product-category {
  color: #86868b;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.product-info h3 {
  margin: 10px 0 24px;
  font-size: 20px;
  font-weight: 650;
  letter-spacing: -0.5px;
}

/* Precio y stock */
.product-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
}

.product-price {
  font-size: 20px;
  font-weight: 700;
}

.stock-badge {
  padding: 6px 10px;
  border-radius: 20px;
  background: #e8f7ed;
  color: #16803c;
  font-size: 11px;
  font-weight: 600;
}

.stock-badge.out-of-stock {
  background: #fce8e8;
  color: #d32f2f;
}

/* Móviles */
@media (max-width: 600px) {
  .product-image {
    height: 200px;
    padding: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .product-card,
  .product-image img {
    transition: none;
  }

  .product-card:hover,
  .product-card:hover .product-image img {
    transform: none;
  }
}
</style>
