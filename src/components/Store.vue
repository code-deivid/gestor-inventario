
<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import { appleProducts } from '@/data/products.ts'
</script>

<template>
  <main class="store">
    <header class="store-header">
      <span class="eyebrow">APPLE COLLECTION · DEMO</span>

      <h1>Descubre nuestra colección.</h1>

      <p>
        Explora una selección de productos Apple.
        Tecnología, diseño e innovación en un solo lugar.
      </p>
    </header>

    <section class="catalog">
      <div class="catalog-header">
        <div>
          <h2>Todos los productos</h2>
          <p>Encuentra lo que estás buscando.</p>
        </div>

        <span class="product-count">
          {{ appleProducts.length }} productos
        </span>
      </div>

      <div class="products-grid">
        <ProductCard
          v-for="product in appleProducts"
          :key="product.id"
          :product="product"
        />
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
  flex-wrap: wrap;
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

/* Grid de productos */
.products-grid {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, 260px), 1fr)
  );
  gap: 24px;
  align-items: stretch;
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
}
</style>
