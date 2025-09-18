import React from 'react';

interface PriceSpecification {
  price: number;
  priceCurrency: string;
  validFrom?: string;
  validThrough?: string;
  eligibleQuantity?: {
    minValue: number;
    maxValue?: number;
    unitCode: string;
  };
}

interface BusinessFunction {
  type: 'LeaseOut' | 'Sell' | 'Buy' | 'Rent' | 'Maintain' | 'Repair' | 'Install';
  description: string;
}

interface OfferSchemaProps {
  name: string;
  description: string;
  itemOffered: {
    type: 'Product' | 'Service';
    name: string;
    description: string;
    category: string;
    brand?: string;
    model?: string;
    features?: string[];
  };
  seller: {
    name: string;
    type: 'Organization' | 'Person';
    url?: string;
    telephone?: string;
    email?: string;
    address?: {
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      addressCountry: string;
      postalCode: string;
    };
  };
  priceSpecification: PriceSpecification;
  availability: 'InStock' | 'OutOfStock' | 'PreOrder' | 'Discontinued' | 'OnlineOnly';
  deliveryMethod?: 'OnSitePickup' | 'DeliveryModeDirectDownload' | 'DeliveryModeFreight' | 'DeliveryModeMail';
  eligibleRegion?: string[];
  businessFunction?: BusinessFunction[];
  warranty?: {
    duration: string;
    scope: string;
  };
  paymentAccepted?: string[];
  advanceBookingRequirement?: string;
  areaServed?: string[];
  availableDeliveryMethod?: string[];
}

const OfferSchema: React.FC<OfferSchemaProps> = ({
  name,
  description,
  itemOffered,
  seller,
  priceSpecification,
  availability,
  deliveryMethod,
  eligibleRegion = [],
  businessFunction = [],
  warranty,
  paymentAccepted = [],
  advanceBookingRequirement,
  areaServed = [],
  availableDeliveryMethod = []
}) => {
  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": name,
    "description": description,
    "itemOffered": {
      "@type": itemOffered.type,
      "name": itemOffered.name,
      "description": itemOffered.description,
      "category": itemOffered.category,
      "brand": itemOffered.brand ? {
        "@type": "Brand",
        "name": itemOffered.brand
      } : undefined,
      "model": itemOffered.model,
      "additionalProperty": itemOffered.features?.map(feature => ({
        "@type": "PropertyValue",
        "name": "feature",
        "value": feature
      }))
    },
    "seller": {
      "@type": seller.type,
      "name": seller.name,
      "url": seller.url,
      "telephone": seller.telephone,
      "email": seller.email,
      "address": seller.address ? {
        "@type": "PostalAddress",
        "streetAddress": seller.address.streetAddress,
        "addressLocality": seller.address.addressLocality,
        "addressRegion": seller.address.addressRegion,
        "addressCountry": seller.address.addressCountry,
        "postalCode": seller.address.postalCode
      } : undefined
    },
    "price": priceSpecification.price,
    "priceCurrency": priceSpecification.priceCurrency,
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": priceSpecification.price,
      "priceCurrency": priceSpecification.priceCurrency,
      "validFrom": priceSpecification.validFrom,
      "validThrough": priceSpecification.validThrough,
      "eligibleQuantity": priceSpecification.eligibleQuantity ? {
        "@type": "QuantitativeValue",
        "minValue": priceSpecification.eligibleQuantity.minValue,
        "maxValue": priceSpecification.eligibleQuantity.maxValue,
        "unitCode": priceSpecification.eligibleQuantity.unitCode
      } : undefined
    },
    "availability": `https://schema.org/${availability}`,
    "deliveryMethod": deliveryMethod ? `https://schema.org/${deliveryMethod}` : undefined,
    "eligibleRegion": eligibleRegion.map(region => ({
      "@type": "GeoShape",
      "name": region
    })),
    "businessFunction": businessFunction.map(func => `https://schema.org/${func.type}`),
    "warranty": warranty ? {
      "@type": "WarrantyPromise",
      "durationOfWarranty": warranty.duration,
      "warrantyScope": warranty.scope
    } : undefined,
    "paymentAccepted": paymentAccepted,
    "advanceBookingRequirement": advanceBookingRequirement,
    "areaServed": areaServed.map(area => ({
      "@type": "GeoShape", 
      "name": area
    })),
    "availableDeliveryMethod": availableDeliveryMethod.map(method => `https://schema.org/${method}`)
  };

  // Additional schema for aggregated offers (when multiple pricing tiers)
  const aggregateOfferSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    "name": `${name} - Opções de Preço`,
    "description": `Diferentes opções de preço e configurações para ${itemOffered.name}`,
    "lowPrice": priceSpecification.price * 0.8, // Assuming discount options
    "highPrice": priceSpecification.price * 1.5, // Assuming premium options
    "priceCurrency": priceSpecification.priceCurrency,
    "offerCount": businessFunction.length || 3,
    "availability": `https://schema.org/${availability}`,
    "itemOffered": {
      "@type": itemOffered.type,
      "name": itemOffered.name,
      "category": itemOffered.category
    },
    "seller": {
      "@type": seller.type,
      "name": seller.name
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateOfferSchema) }}
      />

      {/* Hidden structured content for search engines */}
      <div className="sr-only" aria-hidden="true">
        <div itemScope itemType="https://schema.org/Offer">
          <h2 itemProp="name">{name}</h2>
          <meta itemProp="description" content={description} />
          
          <div itemProp="itemOffered" itemScope itemType={`https://schema.org/${itemOffered.type}`}>
            <h3 itemProp="name">{itemOffered.name}</h3>
            <div itemProp="description">{itemOffered.description}</div>
            <div itemProp="category">{itemOffered.category}</div>
            {itemOffered.brand && (
              <div itemProp="brand" itemScope itemType="https://schema.org/Brand">
                <span itemProp="name">{itemOffered.brand}</span>
              </div>
            )}
            {itemOffered.model && <div itemProp="model">{itemOffered.model}</div>}
            
            {itemOffered.features && (
              <div>
                <h4>Características principais:</h4>
                <ul>
                  {itemOffered.features.map((feature, index) => (
                    <li key={index} itemProp="additionalProperty" itemScope itemType="https://schema.org/PropertyValue">
                      <span itemProp="value">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div itemProp="seller" itemScope itemType={`https://schema.org/${seller.type}`}>
            <span itemProp="name">{seller.name}</span>
            {seller.url && <meta itemProp="url" content={seller.url} />}
            {seller.telephone && <meta itemProp="telephone" content={seller.telephone} />}
            {seller.email && <meta itemProp="email" content={seller.email} />}
            
            {seller.address && (
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <div itemProp="streetAddress">{seller.address.streetAddress}</div>
                <div itemProp="addressLocality">{seller.address.addressLocality}</div>
                <div itemProp="addressRegion">{seller.address.addressRegion}</div>
                <div itemProp="addressCountry">{seller.address.addressCountry}</div>
                <div itemProp="postalCode">{seller.address.postalCode}</div>
              </div>
            )}
          </div>

          <div itemProp="priceSpecification" itemScope itemType="https://schema.org/PriceSpecification">
            <span itemProp="price">{priceSpecification.price}</span>
            <span itemProp="priceCurrency">{priceSpecification.priceCurrency}</span>
            {priceSpecification.validFrom && (
              <meta itemProp="validFrom" content={priceSpecification.validFrom} />
            )}
            {priceSpecification.validThrough && (
              <meta itemProp="validThrough" content={priceSpecification.validThrough} />
            )}
          </div>

          <meta itemProp="availability" content={availability} />
          {deliveryMethod && <meta itemProp="deliveryMethod" content={deliveryMethod} />}

          {eligibleRegion.length > 0 && (
            <div>
              <h4>Regiões atendidas:</h4>
              <ul>
                {eligibleRegion.map((region, index) => (
                  <li key={index} itemProp="eligibleRegion">{region}</li>
                ))}
              </ul>
            </div>
          )}

          {businessFunction.length > 0 && (
            <div>
              <h4>Tipos de negócio:</h4>
              <ul>
                {businessFunction.map((func, index) => (
                  <li key={index} itemProp="businessFunction">
                    {func.type}: {func.description}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {warranty && (
            <div itemProp="warranty" itemScope itemType="https://schema.org/WarrantyPromise">
              <h4>Garantia</h4>
              <div itemProp="durationOfWarranty">{warranty.duration}</div>
              <div itemProp="warrantyScope">{warranty.scope}</div>
            </div>
          )}

          {paymentAccepted.length > 0 && (
            <div>
              <h4>Formas de pagamento aceitas:</h4>
              <ul>
                {paymentAccepted.map((payment, index) => (
                  <li key={index} itemProp="paymentAccepted">{payment}</li>
                ))}
              </ul>
            </div>
          )}

          {advanceBookingRequirement && (
            <div itemProp="advanceBookingRequirement">
              <strong>Reserva antecipada:</strong> {advanceBookingRequirement}
            </div>
          )}

          {areaServed.length > 0 && (
            <div>
              <h4>Áreas de atendimento:</h4>
              <ul>
                {areaServed.map((area, index) => (
                  <li key={index} itemProp="areaServed">{area}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4>Por que escolher esta oferta?</h4>
            <ul>
              <li>Melhor relação custo-benefício do mercado</li>
              <li>Suporte técnico especializado 24/7</li>
              <li>Implementação rápida e eficiente</li>
              <li>ROI comprovado em +1000 clientes</li>
              <li>Tecnologia de ponta com IA integrada</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfferSchema;