'use client';

import { motion } from 'motion/react';
import { memo, useMemo } from 'react';
import { Section } from '../ui/section';
import { Container } from '../ui/container';
import { SectionHeader } from '../ui/section-header';
import { comparisonConfig } from '@/lib/config/comparison.config';

// Memoized Product Header Component
const ProductHeader = memo(function ProductHeader({
  product,
  isFirst = false,
}: {
  product: typeof comparisonConfig.products[0];
  isFirst?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      className={`${product.bgColor} ${product.color} rounded-2xl p-4 xl:p-6 text-center`}
    >
      <div className="flex items-center justify-center mb-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={product.icon}
          />
        </svg>
      </div>
      <h3 className="text-base xl:text-lg font-semibold">{product.name}</h3>
    </motion.div>
  );
});

// Memoized Feature Row Component
const FeatureRow = memo(function FeatureRow({
  feature,
  products,
  index,
}: {
  feature: typeof comparisonConfig.features[0];
  products: typeof comparisonConfig.products;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{
        scale: 1.005,
        boxShadow: '0 8px 20px -5px rgba(104, 192, 174, 0.2)',
        transition: { duration: 0.2 },
      }}
      className="grid gap-3 xl:gap-4 rounded-xl overflow-hidden transition-all duration-300"
      style={{ gridTemplateColumns: `200px repeat(${products.length}, 1fr)` }}
    >
      <div className="bg-[#0d3d4a] p-3 xl:p-4 flex items-center rounded-xl">
        <span className="text-[#68c0ae] text-sm xl:text-base font-medium">
          {feature.label}
        </span>
      </div>
      {products.map((product) => (
        <motion.div
          key={product.id}
          whileHover={{ backgroundColor: product.hoverColor }}
          className="bg-[#0f2935] p-3 xl:p-4 flex items-center justify-center text-center rounded-xl transition-colors duration-200"
        >
          <span className="text-white text-sm xl:text-base">
            {feature.values[product.id] || '—'}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
});

// Memoized Expert Tip Component
const ExpertTip = memo(function ExpertTip({
  tip,
}: {
  tip: typeof comparisonConfig.expertTip;
}) {
  if (!tip) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-6 p-4 xl:p-5 bg-[#0d3d4a]/50 rounded-xl border border-[#68c0ae]/20 flex items-start gap-3"
    >
      {tip.icon && (
        <svg
          className="w-5 h-5 text-[#68c0ae] flex-shrink-0 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={tip.icon}
          />
        </svg>
      )}
      <p className="text-white/90 text-sm xl:text-base">
        {tip.highlight && (
          <span className="text-[#68c0ae]">{tip.highlight} </span>
        )}
        {tip.text}
      </p>
    </motion.div>
  );
});

export const ComparisonChart = memo(function ComparisonChart() {
  const { products, features, expertTip } = comparisonConfig;

  // Generate title dynamically from products
  const title = useMemo(
    () => products.map((p) => p.name).join(' vs '),
    [products]
  );

  // Calculate grid columns dynamically
  const gridTemplateColumns = useMemo(
    () => `200px repeat(${products.length}, 1fr)`,
    [products.length]
  );

  return (
    <Section id="comparison" background="white" withPattern patternColor="accent">
      <Container size="full">
        <SectionHeader
          badge="Insights"
          badgeVariant="primary"
          title={title}
          description="Understanding the differences to make informed investment decisions."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto rounded-3xl"
        >
          <div className="min-w-[800px] bg-[#1a2332] p-6 xl:p-10 rounded-3xl">
            {/* Header Row */}
            <div
              className="grid gap-3 xl:gap-4 mb-4"
              style={{ gridTemplateColumns }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-[#0d3d4a] text-white rounded-2xl p-4 xl:p-6 flex items-center justify-center"
              >
                <h3 className="text-base xl:text-lg font-semibold">Feature</h3>
              </motion.div>
              {products.map((product) => (
                <ProductHeader key={product.id} product={product} />
              ))}
            </div>

            {/* Data Rows */}
            <div className="space-y-2">
              {features.map((feature, index) => (
                <FeatureRow
                  key={feature.id}
                  feature={feature}
                  products={products}
                  index={index}
                />
              ))}
            </div>

            {/* Expert Tip */}
            {expertTip && <ExpertTip tip={expertTip} />}
          </div>
        </motion.div>
      </Container>
    </Section>
  );
});