import React from 'react';

interface EventLocation {
  name: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
}

interface EventOrganizer {
  name: string;
  url?: string;
  email?: string;
  telephone?: string;
  logo?: string;
}

interface EventOffer {
  name: string;
  price: number;
  currency: string;
  availability: 'InStock' | 'SoldOut' | 'PreOrder';
  validFrom: string;
  validThrough: string;
  url?: string;
}

interface EventSchemaProps {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: EventLocation;
  organizer: EventOrganizer;
  image?: string[];
  url?: string;
  eventStatus?: 'EventScheduled' | 'EventCancelled' | 'EventPostponed' | 'EventRescheduled';
  eventAttendanceMode?: 'OfflineEventAttendanceMode' | 'OnlineEventAttendanceMode' | 'MixedEventAttendanceMode';
  offers?: EventOffer[];
  performer?: Array<{
    name: string;
    type: 'Person' | 'Organization';
    image?: string;
  }>;
  audience?: {
    audienceType: string;
    name: string;
    description: string;
  };
  subEvent?: Array<{
    name: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  maximumAttendeeCapacity?: number;
  remainingAttendeeCapacity?: number;
  typicalAgeRange?: string;
  inLanguage?: string;
  keywords?: string;
}

const EventSchema: React.FC<EventSchemaProps> = ({
  name,
  description,
  startDate,
  endDate,
  location,
  organizer,
  image = [],
  url,
  eventStatus = 'EventScheduled',
  eventAttendanceMode = 'OfflineEventAttendanceMode',
  offers = [],
  performer = [],
  audience,
  subEvent = [],
  maximumAttendeeCapacity,
  remainingAttendeeCapacity,
  typicalAgeRange,
  inLanguage = 'pt-BR',
  keywords
}) => {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": name,
    "description": description,
    "startDate": startDate,
    "endDate": endDate,
    "eventStatus": `https://schema.org/${eventStatus}`,
    "eventAttendanceMode": `https://schema.org/${eventAttendanceMode}`,
    "location": {
      "@type": "Place",
      "name": location.name,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": location.address.streetAddress,
        "addressLocality": location.address.addressLocality,
        "addressRegion": location.address.addressRegion,
        "postalCode": location.address.postalCode,
        "addressCountry": location.address.addressCountry
      },
      ...(location.geo && {
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": location.geo.latitude,
          "longitude": location.geo.longitude
        }
      })
    },
    "organizer": {
      "@type": "Organization",
      "name": organizer.name,
      "url": organizer.url,
      "email": organizer.email,
      "telephone": organizer.telephone,
      "logo": organizer.logo
    },
    "image": image,
    "url": url,
    "offers": offers.map(offer => ({
      "@type": "Offer",
      "name": offer.name,
      "price": offer.price,
      "priceCurrency": offer.currency,
      "availability": `https://schema.org/${offer.availability}`,
      "validFrom": offer.validFrom,
      "validThrough": offer.validThrough,
      "url": offer.url
    })),
    "performer": performer.map(p => ({
      "@type": p.type,
      "name": p.name,
      "image": p.image
    })),
    ...(audience && {
      "audience": {
        "@type": "Audience",
        "audienceType": audience.audienceType,
        "name": audience.name,
        "description": audience.description
      }
    }),
    "subEvent": subEvent.map(sub => ({
      "@type": "Event",
      "name": sub.name,
      "startDate": sub.startDate,
      "endDate": sub.endDate,
      "description": sub.description
    })),
    "maximumAttendeeCapacity": maximumAttendeeCapacity,
    "remainingAttendeeCapacity": remainingAttendeeCapacity,
    "typicalAgeRange": typicalAgeRange,
    "inLanguage": inLanguage,
    "keywords": keywords
  };

  // Additional schema for Smart Events technology
  const smartEventSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Smart Events™ Technology",
    "description": "Tecnologia avançada para eventos inteligentes e conectados",
    "brand": {
      "@type": "Brand",
      "name": "LEGAL TechCo"
    },
    "category": "Event Technology",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": 5000,
      "highPrice": 50000,
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.8,
      "reviewCount": 150,
      "bestRating": 5
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(smartEventSchema) }}
      />

      {/* Hidden structured content for search engines */}
      <div className="sr-only" aria-hidden="true">
        <article itemScope itemType="https://schema.org/Event">
          <h1 itemProp="name">{name}</h1>
          <meta itemProp="description" content={description} />
          <meta itemProp="startDate" content={startDate} />
          <meta itemProp="endDate" content={endDate} />
          <meta itemProp="eventStatus" content={eventStatus} />
          <meta itemProp="eventAttendanceMode" content={eventAttendanceMode} />
          <meta itemProp="inLanguage" content={inLanguage} />
          {keywords && <meta itemProp="keywords" content={keywords} />}

          <div itemProp="location" itemScope itemType="https://schema.org/Place">
            <span itemProp="name">{location.name}</span>
            <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <div itemProp="streetAddress">{location.address.streetAddress}</div>
              <div itemProp="addressLocality">{location.address.addressLocality}</div>
              <div itemProp="addressRegion">{location.address.addressRegion}</div>
              <div itemProp="postalCode">{location.address.postalCode}</div>
              <div itemProp="addressCountry">{location.address.addressCountry}</div>
            </div>
            {location.geo && (
              <div itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
                <meta itemProp="latitude" content={location.geo.latitude.toString()} />
                <meta itemProp="longitude" content={location.geo.longitude.toString()} />
              </div>
            )}
          </div>

          <div itemProp="organizer" itemScope itemType="https://schema.org/Organization">
            <span itemProp="name">{organizer.name}</span>
            {organizer.url && <meta itemProp="url" content={organizer.url} />}
            {organizer.email && <meta itemProp="email" content={organizer.email} />}
            {organizer.telephone && <meta itemProp="telephone" content={organizer.telephone} />}
          </div>

          {offers.map((offer, index) => (
            <div key={index} itemProp="offers" itemScope itemType="https://schema.org/Offer">
              <span itemProp="name">{offer.name}</span>
              <meta itemProp="price" content={offer.price.toString()} />
              <meta itemProp="priceCurrency" content={offer.currency} />
              <meta itemProp="availability" content={offer.availability} />
              <meta itemProp="validFrom" content={offer.validFrom} />
              <meta itemProp="validThrough" content={offer.validThrough} />
            </div>
          ))}

          {performer.map((p, index) => (
            <div key={index} itemProp="performer" itemScope itemType={`https://schema.org/${p.type}`}>
              <span itemProp="name">{p.name}</span>
            </div>
          ))}

          {audience && (
            <div itemProp="audience" itemScope itemType="https://schema.org/Audience">
              <span itemProp="audienceType">{audience.audienceType}</span>
              <span itemProp="name">{audience.name}</span>
              <meta itemProp="description" content={audience.description} />
            </div>
          )}

          {subEvent.map((sub, index) => (
            <div key={index} itemProp="subEvent" itemScope itemType="https://schema.org/Event">
              <span itemProp="name">{sub.name}</span>
              <meta itemProp="startDate" content={sub.startDate} />
              <meta itemProp="endDate" content={sub.endDate} />
              <meta itemProp="description" content={sub.description} />
            </div>
          ))}

          {maximumAttendeeCapacity && (
            <meta itemProp="maximumAttendeeCapacity" content={maximumAttendeeCapacity.toString()} />
          )}
          {remainingAttendeeCapacity && (
            <meta itemProp="remainingAttendeeCapacity" content={remainingAttendeeCapacity.toString()} />
          )}
          {typicalAgeRange && (
            <meta itemProp="typicalAgeRange" content={typicalAgeRange} />
          )}

          <div itemScope itemType="https://schema.org/Product" itemProp="about">
            <h2 itemProp="name">Tecnologia Smart Events™</h2>
            <div itemProp="description">
              Este evento utiliza a tecnologia Smart Events™ da LEGAL TechCo para proporcionar uma experiência 10× superior:
              conectividade 5G, IA integrada, analytics em tempo real, controle de acesso biométrico e automação completa.
            </div>
            <div itemProp="brand" itemScope itemType="https://schema.org/Brand">
              <span itemProp="name">LEGAL TechCo</span>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default EventSchema;