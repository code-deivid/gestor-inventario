<script setup lang="ts">
import { ref } from 'vue'
import { appleProducts } from '@/data/products'

const products = ref(appleProducts)

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price)
}
</script>

<template>
  <main class="store">
    <header class="store-header">
      <span class="eyebrow">APPLE COLLECTION · DEMO</span>
      <h1>Descubre nuestra colección.</h1>
      <p>
        Explora una selección de productos Apple. Tecnología, diseño e innovación en un solo lugar.
      </p>
    </header>

    <section class="catalog">
      <div class="catalog-header">
        <div>
          <h2>Todos los productos</h2>
          <p>Encuentra lo que estás buscando.</p>
        </div>

        <span class="product-count">{{ products.length }} productos</span>
      </div>

      <div class="products-grid">
        <article v-for="product in products" :key="product.id" class="product-card">
          <div class="product-image">
            <img :src="product.image" :alt="product.name" loading="lazy" decoding="async" />
          </div>

          <div class="product-info">
            <span class="product-category">{{ product.category }}</span>

            <h3>{{ product.name }}</h3>

            <div class="product-footer">
              <span class="product-price">{{ formatPrice(product.price) }}</span>

              <span class="stock-badge" :class="{ 'out-of-stock': product.stock === 0 }">
                {{ product.stock > 0 ? `${product.stock} disponibles` : 'Agotado' }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.store {
  max-width: 1280px;
  margin: 0 auto;
  padding: 48px 24px 80px;
}

/* Header */
.store-header {
  text-align: center;
  padding: 60px 0 80px;
}

.eyebrow {
  color: #777;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 2px;
}

.store-header h1 {
  margin: 18px 0;
  font-size: clamp(32px, 5vw, 56px);
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 1.1;
}

.store-header p {
  max-width: 520px;
  margin: 0 auto;
  color: #6e6e73;
  font-size: 17px;
  line-height: 1.6;
}

/* Catálogo */
.catalog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 28px;
}

.catalog-header h2 {
  margin: 0 0 6px;
  font-size: 26px;
  letter-spacing: -0.7px;
}

.catalog-header p {
  margin: 0;
  color: #86868b;
  font-size: 14px;
}

.product-count {
  color: #6e6e73;
  font-size: 13px;
  white-space: nowrap;
}

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
  .store {
    padding: 24px 16px 48px;
  }

  .store-header {
    padding: 40px 0 56px;
  }

  .store-header h1 {
    letter-spacing: -1px;
  }

  .catalog-header h2 {
    font-size: 22px;
  }

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
