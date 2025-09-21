
export interface Service {
  title: string;
  description: string;
  imageUrl: string;
  benefits: string[];
}

export interface PricingPlan {
  title: string;
  price: number;
  description: string;
  features: string[];
  isPopular: boolean;
  paymentLink: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
}
