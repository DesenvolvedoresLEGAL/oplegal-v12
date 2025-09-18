import React from 'react';

interface JobPosting {
  title: string;
  description: string;
  department: string;
  location: string;
  type: string;
  level: string;
  salary?: string;
  datePosted?: string;
}

interface JobPostingSchemaProps {
  jobs: JobPosting[];
  hiringOrganization?: {
    name: string;
    url: string;
    logo?: string;
  };
}

const JobPostingSchema: React.FC<JobPostingSchemaProps> = ({
  jobs,
  hiringOrganization = {
    name: "LEGAL TechCo",
    url: "https://operadora.legal",
    logo: "https://operadora.legal/logo.png"
  }
}) => {
  const jobSchemas = jobs.map((job, index) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "datePosted": job.datePosted || new Date().toISOString().split('T')[0],
    "validThrough": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 90 days
    "hiringOrganization": {
      "@type": "Organization",
      "name": hiringOrganization.name,
      "sameAs": hiringOrganization.url,
      ...(hiringOrganization.logo && {
        "logo": hiringOrganization.logo
      })
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "BR",
        ...(job.location && { "addressLocality": job.location })
      }
    },
    "employmentType": job.type.toUpperCase(),
    "experienceRequirements": job.level,
    ...(job.salary && {
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "BRL",
        "value": {
          "@type": "QuantitativeValue",
          "value": job.salary,
          "unitText": "MONTH"
        }
      }
    }),
    "industry": "Technology",
    "occupationalCategory": job.department,
    "workHours": "40 hours per week",
    "qualifications": `Experiência nível ${job.level} em ${job.department}`,
    "responsibilities": job.description,
    "skills": ["Tecnologia", "Eventos Inteligentes", "Inovação"],
    "educationRequirements": "Ensino Superior",
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "Brasil"
    }
  }));

  return (
    <>
      {jobSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default JobPostingSchema;